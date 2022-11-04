import {
    SHOW_MODAL,
    CLEAR_ALERT,
    LOGOUT,
    SETUP_USER_BEGIN,
    SETUP_USER_SUCCESS,
    SETUP_USER_ERROR,
    LOGIN_OTP_BEGIN,
    LOGIN_OTP_SUCCESS,
    LOGIN_OTP_ERROR,
    CREATE_USER_BEGIN,
    CREATE_USER_SUCCESS,
    CREATE_USER_ERROR,
    GET_USER_BEGIN,
    GET_USER_SUCCESS,
    GET_USER_ERROR,
    UPDATE_USER_BEGIN,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR,
    // DELETE_USER_BEGIN,
    // DELETE_USER_SUCCESS,
    // DELETE_USER_ERROR,
    RESET_PASSWORD_LINK_BEGIN,
    RESET_PASSWORD_LINK_SUCCESS,
    RESET_PASSWORD_LINK_ERROR,
    GET_ALL_USERS_BEGIN,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_ERROR,
    GET_ALL_COURSES_BEGIN,
    GET_ALL_COURSES_SUCCESS,
    // GET_ONE_COURSE_BEGIN,
    // GET_ONE_COURSE_SUCCESS,
    // GET_ONE_COURSE_ERROR,
    // GET_ALL_PURCHASED_COURSES_BEGIN,
    // GET_ALL_PURCHASED_COURSES_SUCCESS,
    // GET_ALL_PURCHASED_COURSES_ERROR,
    // GET_ALL_POPULAR_COURSES_BEGIN,
    // GET_ALL_POPULAR_COURSES_SUCCESS,
    // GET_ALL_POPULAR_COURSES_ERROR,
    // GET_ALL_TOP_COURSES_BEGIN,
    // GET_ALL_TOP_COURSES_SUCCESS,
    // GET_ALL_TOP_COURSES_ERROR,
    CREATE_COURSE_BEGIN,
    CREATE_COURSE_SUCCESS,
    CREATE_COURSE_ERROR,
    EDIT_COURSE_BEGIN,
    EDIT_COURSE_SUCCESS,
    EDIT_COURSE_ERROR,
    GET_ONE_COURSE_BEGIN,
    GET_ONE_COURSE_SUCCESS,
    GET_ONE_COURSE_ERROR,
    GET_ALL_TOPICS_BEGIN,
    GET_ALL_TOPICS_SUCCESS,
    GET_COURSE_BY_TOPIC_BEGIN,
    GET_COURSE_BY_TOPIC_SUCCESS,
    GET_COURSE_BY_TOPIC_ERROR,
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
        case LOGIN_OTP_BEGIN:
            return {
                ...state,
                isLoading: true,
            }
        case LOGIN_OTP_SUCCESS:
            return {
                ...state,
                showAlert: true,
                alert_type: 'success',
                alert_msg: action.payload.msg,
                loginOtp: true,
                isLoading: false,
            }
        case LOGIN_OTP_ERROR:
            return {
                ...state,
                showAlert: true,
                alert_type: 'danger',
                alert_msg: action.payload.msg,
                isLoading: false,
            }
        case SETUP_USER_BEGIN:
            return {
                ...state,
                isLoading: false,
            }
        case SETUP_USER_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                showAlert: true,
                alert_type: 'success',
                alert_msg: action.payload.msg,
                loginOtp: false,
            }
        case SETUP_USER_ERROR:
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
        case GET_USER_BEGIN:
            return {
                ...state,
            }
        case GET_USER_SUCCESS:
            return {
                ...state,
                user_details: action.payload.result,
            }
        case GET_USER_ERROR:
            return {
                ...state,
            }
        case UPDATE_USER_BEGIN:
            return {
                ...state,
            }
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                user_details: action.payload.result,
            }
        case UPDATE_USER_ERROR:
            return {
                ...state,
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
        case GET_ONE_COURSE_BEGIN:
            return {
                ...state,
            }
        case GET_ONE_COURSE_SUCCESS:
            return {
                ...state,
                courseDetail: action.payload.result.data,
            }
        case GET_ONE_COURSE_ERROR:
            return {
                ...state,
                showAlert: true,
                alert_msg: action.payload.msg,
                alert_type: 'danger',
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
        case EDIT_COURSE_BEGIN:
            return {
                ...state,
                edit_course: action.payload,
            }
        case EDIT_COURSE_SUCCESS:
            return {
                ...state,
                showAlert: true,
                alert_type: 'success',
            }
        case EDIT_COURSE_ERROR:
            return {
                ...state,
                showAlert: true,
                alert_msg: action.payload.msg,
                alert_type: 'danger',
            }
        case GET_COURSE_BY_TOPIC_BEGIN:
            return {
                ...state,
            }
        case GET_COURSE_BY_TOPIC_SUCCESS:
            return {
                ...state,
                courses_topics: action.payload,
            }
        case GET_COURSE_BY_TOPIC_ERROR:
            return {
                ...state,
            }
        case GET_ALL_USERS_BEGIN:
            return {
                ...state,
            }
        case GET_ALL_USERS_SUCCESS:
            return {
                ...state,
                user_data: action.payload,
            }
        case GET_ALL_USERS_ERROR:
            return {
                ...state,
            }
        default:
            throw new Error(`no such action: ${action.type}`)
    }
}

export default reducer
