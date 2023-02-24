export function setToken(tokenKey,tokenValue){
    return localStorage.setItem(tokenKey,tokenValue)
}
export function getToken(tokenKey){
    return localStorage.getItem(tokenKey)
}
export function removeToken(tokenKey){
    return localStorage.removeItem(tokenKey)
}