import React, { useReducer, useContext } from 'react'
import axios from 'axios'
import reducer from './reducer'
import {
    CLEAR_VALUES,
    LOGIN_USER,
    SHOW_MODAL,
    SET_USER_BEGIN,
    SET_USER_SUCCESS,
    SET_USER_ERROR,
    LOGOUT,
} from './action'

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')

export const initialState = {
    user: user ? JSON.parse(user) : null,
    token: token ? token : null,

    showNavbarModal: false,
    openModal: false,
    loginFail: false,

    user_data: {},
    user_type: '',
    alert_msg: '',
}

const AppContext = React.createContext()
const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const authFetch = axios.create({
        baseURL: '/api',
    })

    // interceptors
    authFetch.interceptors.request.use(
        (config) => {
            config.headers.common['authorization'] = `Bearer ${state.token}`
            return config
        },
        (error) => {
            return Promise.reject(error)
        }
    )

    authFetch.interceptors.response.use(
        (response) => {
            return response
        },
        (error) => {
            if (error.response.status === 401) {
                logout()
            }
            return Promise.reject(error)
        }
    )

    const addUserToLocalStorage = ({ result, token }) => {
        localStorage.setItem('user', JSON.stringify(result))
        localStorage.setItem('token', token)
    }

    const removeUserFromLocalStorage = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }

    const showModal = () => {
        dispatch({
            type: SHOW_MODAL,
        })
    }

    const setUserType = (user_type) => {
        clearValues()
        dispatch({
            type: LOGIN_USER,
            payload: { user_type },
        })
    }

    const clearValues = () => {
        dispatch({ type: CLEAR_VALUES })
    }

    const setUser = async (user_data) => {
        dispatch({ type: SET_USER_BEGIN })
        try {
            const { data } = await axios.post(`/users/login`, user_data)
            const { result, token } = data
            console.log(data)
            dispatch({
                type: SET_USER_SUCCESS,
                payload: { result, token },
            })
            addUserToLocalStorage({ result, token })
        } catch (error) {
            dispatch({
                type: SET_USER_ERROR,
                payload: { msg: error.response.data.msg },
            })
        }
    }

    const logout = () => {
        dispatch({ type: LOGOUT })
        removeUserFromLocalStorage()
    }

    return (
        <AppContext.Provider
            value={{
                ...state,
                showModal,
                setUserType,
                clearValues,
                setUser,
                logout,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}

export { AppProvider }
