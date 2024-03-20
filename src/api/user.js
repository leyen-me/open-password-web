import service from "@/utils/request.js";

export const useUserLogin = (dataForm) => {
    return service.post('/user/login', dataForm)
}

export const useUserInfoApi = () => {
    return service.get('/user/info')
}