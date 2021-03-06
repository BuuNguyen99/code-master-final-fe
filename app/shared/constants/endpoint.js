export const ENDPOINT = {
  API: {
    UPDATE_USER_API: "/users",
    CREATE_USER_API: "/users",
    GET_LIST_USER: "/users",
    GET_DETAIL_API: "/users",
    SUBMIT_FORM: "/evaluations",
  },
  ROUTING: {
    AUTH: "/auth",
    SIGNUP: "/auth/register",
    LOGIN: "/auth/login",
    LOGIN_WITH_GOOGLE: "/v1/auth/google",
    LOGIN_SUCCESS: "/login/success",
    FORGOT_PASSWORD: "/auth/forgot-password",
    RESET_PASSWORD: "/auth/reset-password",
    CHANGE_PASSWORD: "/auth/change-password",
    RESEND_VERIFY_EMAIL: "/auth/verify-email/resend",
    LOGOUT: "/auth/logout",
    DASHBOARD: "/dashboard",
    EMPLOYEE_LIST: "/employee-list",
    EMPLOYEE_DETAIL: "/employee-detail/:id",
    EMPLOYEE_EDIT: "/employee-edit/:id",
    EMPLOYEE_NEW: "/employee-new",
    EVALUATION: "/evaluation",
    EXAMINATION_LIST: "/examination-list",
    MY_PROFILE: "/my-profile",
    EDIT_MY_PROFILE: "/edit-my-profile",
    ERROR: "/error",
    ERROR_404: "/error/404",
  },
};
