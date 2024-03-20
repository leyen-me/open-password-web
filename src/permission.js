import router from "@/router";
import {ROUTE_WHITE_LIST} from "@/constants";
import {useUserStore} from "@/stores/modules/userStore";


router.beforeEach(async (to, from, next) => {
    const userStore = useUserStore()

    if (userStore.authorization) {
        if (to.path === '/login') {
            next()
        } else {
            if (!userStore.userInfo.email) {
                try {
                    await userStore.getUserInfo()
                } catch (error) {
                    /**
                     * 服务器异常，跳转到login页面进行重新登录
                     * Server exception, jump to login page for re-login
                     *
                     */
                    next('/login')
                    return Promise.reject(error)
                }
                next()
            } else {
                /**
                 * 用户已登录，可正常访问所有页面
                 * User is logged in and can access all pages normally
                 */
                next()
            }
        }
    } else {
        if (ROUTE_WHITE_LIST.indexOf(to.path) > -1) {
            next()
        } else {
            /**
             * 用户未登录情况下，访问其他地址，必须要登录之后访问，需要让用户去登录
             * If the user is not logged in, to access other addresses, the user must be logged in to access them,
             * and the user needs to be allowed to log in.
             */
            next('/login')
        }
    }
})