import { TEnvironment, TLanguage } from "../commons/utils";

const Constants = {

    /**
     * Config for api.
     */
    Api: {
        /** Root URL of Api Server */
        // BASE_URL: "https://domain.com", // Server Live
        BASE_URL: "http://localhost:8000/api", // Server Test
        CLIENT_CERT: null,
        CLIENT_ID: null,
        CLIENT_KEY: null,
        /** Timeout for each request: 25sec */
        TIMEOUT: 25 * 1000,

        REPORT_IMG_ROOTPATH: "/reports/",
        USER_IMG_ROOTPATH: "/users/"
    },

    /**
     * Return code from Api
     */
    ApiCode: {
        // Code from server api
        SUCCESS: 200,

        // Code from local app
        CONNECTION_TIMEOUT: "CONNECTION_TIMEOUT",
        INTERNAL_SERVER: "INTERNAL_SERVER",
        UNKNOWN_NETWORK: "UNKNOWN_NETWORK",
    },

    /**
     * Setting path for Api
     */
    ApiPath: {
        // auth
        REGISTER: "/auth/register",
        LOGIN: "/auth/login",
        LOGOUT: "/auth/logout",
    },

    /**
     * Request methods
     */
    Methods: {
        DELETE: "DELETE",
        GET: "GET",
        POST: "POST",
        PUT: "PUT",
    },

    /**
     * Styles for app.
     *
     * Color refer
     * @see https://www.rapidtables.com/web/color/index.html
     * @see https://www.w3schools.com/w3css/w3css_colors.asp
     */
    Styles: {
        // =====================================================================
        // Common color
        // =====================================================================
        BLACK_COLOR: "#000000",
        BLUE_COLOR: "#0000FF",
        GRAY_COLOR: "#808080",
        GREEN_COLOR: "#008000",
        LIGHTGRAY_COLOR: "#D3D3D3",
        RED_COLOR: "#FF0000",
        WHITE_COLOR: "#FFFFFF",

        // New - Analysis - Processing - Processed - Cancelled - Close
        STATUS_COLOR: ["#27AE60", "#FEC600", "#24EBC7", "#00AFF0", "#D3D3D3", "#CED4DA"],

        // =====================================================================
        // Console log style
        // Color refer at: https://www.w3schools.com/w3css/w3css_colors.asp
        // =====================================================================
        CONSOLE_LOG_DONE_ERROR: "border: 2px solid #F44336; color: #000000", // Red
        CONSOLE_LOG_DONE_SUCCESS: "border: 2px solid #4CAF50; color: #000000", // Green
        CONSOLE_LOG_ERROR: "background: #F44336; color: #FFFFFF", // Red
        CONSOLE_LOG_NOTICE: "background: #FF9800; color: #000000; font-size: x-large", // Orange
        CONSOLE_LOG_PREPARE: "border: 2px solid #2196F3; color: #000000", // Blue
        CONSOLE_LOG_START: "background: #2196F3; color: #FFFFFF", // Blue
        CONSOLE_LOG_SUCCESS: "background: #4CAF50; color: #FFFFFF", // Green

        // =====================================================================
        // Common size
        // =====================================================================
        AVATAR_SIZE: "80px",
        DEFAULT_FONTSIZE: "16px",
        DEFAULT_SPACING: "24px",
    },

    /**
     * Regex Expression
     */
    RegExp: {
        EMAIL_ADDRESS: "^(([^<>()\\[\\]\\\\.,;:\\s@`]+(\\.[^<>()\\[\\]\\\\.,;:\\s@`]+)*)|(`.+`))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$",
        ORGANIZATION_SHORTNAME: "^[A-Z0-9]{2,3}$",
        PASSWORD: "^(?=.*[\\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\\w!@#$%^&*]{8,}$",
        PHONE_NUMBER: "^\(?((0))\)?([1|3|5|7|8|9]{1})?([0-9]{8})$",
        USERNAME: "^[A-Za-z0-9]+(?:[._-][A-Za-z0-9]+)*$",
    },

    /**
     * Storage keys
     */
    StorageKeys: {
        ACCESS_TOKEN: "access_token"
    },

    /**
     * Cookie keys
     */
    CookieNames: {
        LANGUAGE: "lang",
        SESSION_ID: "sessionId"
    },

    /**
     * Header name
     */
    HeaderNames: {
        DURATION: "X-Duration-Time"
    },

    /**
     * Event name using for DeviceEventEmitter
     */
    EventName: {
    },

    /**
     * Environment
     */
    Environment: {
        DEV: "development" as TEnvironment,
        PRO: "production" as TEnvironment,
    },

    /**
     * Language
     */
    Language: {
        EN: "en" as TLanguage,
        VI: "vi" as TLanguage,
    },

    /**
     * Debounce time for action
     */
    DEBOUNCE_TIME: 400,

};

export default Constants;
