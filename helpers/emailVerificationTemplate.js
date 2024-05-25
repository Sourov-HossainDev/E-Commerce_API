
function emailVerificationTemplate(token){
    return `<div><img alt=""src=https://i.ibb.co/LYwdVS5/OREBI.png style=width:100px><h1 style=font-size:40px;color:#262626>Welcome to OREBI-Ecommerce</h1><p style=font-size:18px;font-family:Arial,Helvetica,sans-serif;margin-bottom:30px>Please verify your email</p><a href=""style="background-color:#262626;padding:16px 58px 58px;color:#fff;font-family:DM Sans,sans-serif;font-size:14px;font-weight:700;text-decoration:none">Confrim your email</a></div>,${token} `
}

module.exports = emailVerificationTemplate;