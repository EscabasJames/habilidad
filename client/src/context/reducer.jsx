import {
    SHOW_MODAL,
    // CLEAR_VALUES,
    CLEAR_ALERT,
    SET_USER_BEGIN,
    SET_USER_SUCCESS,
    SET_USER_ERROR,
    LOGOUT,
    CREATE_USER_BEGIN,
    CREATE_USER_SUCCESS,
    CREATE_USER_ERROR,
    // UPDATE_USER_BEGIN,
    // UPDATE_USER_SUCCESS,
    // UPDATE_USER_ERROR,
    // DELETE_USER_BEGIN,
    // DELETE_USER_SUCCESS,
    // DELETE_USER_ERROR,
    GET_ALL_COURSES_BEGIN,
    GET_ALL_COURSES_SUCCESS,
    // GET_ALL_COURSES_ERROR,
    CREATE_COURSE_BEGIN,
    CREATE_COURSE_SUCCESS,
    CREATE_COURSE_ERROR,
    GET_ALL_TOPICS_BEGIN,
    GET_ALL_TOPICS_SUCCESS,
    RESET_PASSWORD_LINK_BEGIN,
    RESET_PASSWORD_LINK_SUCCESS,
    RESET_PASSWORD_LINK_ERROR,
} from './action'

import { initialState } from './appContext'

const reducer = (state, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            return {
                ...state,
                openModal: !state.openModal,
            }
        // case CLEAR_VALUES: {
        //     const initialState = {
        //         user_type: '',
        //     }
        //     return { ...state, ...initialState }
        // }
        case CLEAR_ALERT:
            return {
                ...state,
                showAlert: false,
                alert_msg: '',
                alert_type: '',
            }
        case SET_USER_BEGIN:
            return {
                ...state,
            }
        case SET_USER_SUCCESS:
            return {
                ...state,
                showAlert: true,
                alert_type: 'success',
                alert_msg: action.payload.msg,
            }
        case SET_USER_ERROR:
            return {
                ...state,
                showAlert: true,
                alert_type: 'danger',
                alert_msg: action.payload.msg,
            }
        case LOGOUT:
            return {
                ...initialState,
                user: null,
                token: null,
            }
        case CREATE_USER_BEGIN:
            return {
                ...state,
            }
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                showAlert: true,
                alert_type: 'success',
                alert_msg: action.payload.msg,
            }
        case CREATE_USER_ERROR:
            return {
                ...state,
                showAlert: true,
                alert_type: 'danger',
                alert_msg: action.payload.msg,
            }
        case GET_ALL_COURSES_BEGIN:
            return {
                ...state,
            }
        case GET_ALL_COURSES_SUCCESS:
            return {
                ...state,
                courses: action.payload.result,
            }
        case GET_ALL_TOPICS_BEGIN:
            return {
                ...state,
            }
        case GET_ALL_TOPICS_SUCCESS:
            return {
                ...state,
                topics: action.payload.result,
            }
        case RESET_PASSWORD_LINK_BEGIN:
            return {
                ...state,
            }
        case RESET_PASSWORD_LINK_SUCCESS:
            return {
                ...state,
                showAlert: true,
                alert_msg: 'Email sent!',
                alert_type: 'success',
            }
        case RESET_PASSWORD_LINK_ERROR:
            return {
                ...state,
                showAlert: true,
                alert_msg: action.payload.msg,
                alert_type: 'danger',
            }
        case CREATE_COURSE_BEGIN:
            return {
                ...state,
            }
        case CREATE_COURSE_SUCCESS:
            return {
                ...state,
                showAlert: true,
                alert_type: 'success',
            }
        case CREATE_COURSE_ERROR:
            return {
                ...state,
                showAlert: true,
                alert_msg: action.payload.msg,
                alert_type: 'danger',
            }
        default:
            throw new Error(`no such action: ${action.type}`)
    }
}

export default reducer
