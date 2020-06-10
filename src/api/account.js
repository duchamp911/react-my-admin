import service from '../utils/request';

/**
 * 登录接口
 */
export function Login(data){
    return service.request({
        url: "/login/",
        method: "POST",
        data,     // 请求类型为post时
        // params: data    // 请求类型为get时
    })
}


/**
 * 获取验证码接口
 */
export function get_code(data){
    return service.request({
        url: "/getSms/",
        method: "POST",
        data,     // 请求类型为post时
        // params: data    // 请求类型为get时
    })
}