export function nameRule(rule,value,callback){
    let reg = /(^[a-zA-Z0-9]{4,10}$)/
    if (value === '') {
        callback(new Error('please input your username'))
    } else if (!reg.test(value)) {
        callback(new Error('the username length is 4~10 character'))
    } else {
        callback()
    }
}

export function passwordRule(rule, value, callback){
    let reg = /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
    if (value === '') {
        callback(new Error('please input your password'))
    } else if (!reg.test(value)) {
        callback(new Error('password need to contain 6~12 character'))
    } else {
        callback()
    }
}