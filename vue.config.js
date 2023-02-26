module.exports={
    lintOnSave: false,
    devServer:{
        proxy:{
        '/api':{
            target:'http://1.116.64.64:5004/api2/',
            changeOrigin:true,
            pathRewrite:{
                '^/api':''
            }
        }
    }
    }
}