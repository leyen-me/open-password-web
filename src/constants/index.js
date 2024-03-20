/**
 * 基础请求地址
 * Base request address
 *
 * @type {string}
 */
export const BASE_URL = import.meta.env.VITE_APP_BASE_API

/**
 * 用户认证需要的Header名称
 * Header name required for user authentication
 *
 * @type {string}
 */
export const AUTHORIZATION_NAME = 'Authorization'

/**
 * 路由白名单，用于无论是否都能访问的页面
 * Route whitelisting for pages that can be accessed whether
 *
 * @type {string[]}
 */
export const ROUTE_WHITE_LIST = ['/404', '/login']