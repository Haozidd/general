module.exports={
    lintOnSave: false,
    devServer:{
        open:true,
        proxy:{
            '/app':{
                target:'http://rapserver.sunmi.com'
            },
            // '/api':{
            //     target:'http://gmall-h5-api.atguigu.cn'
            // }
        }
    }
}