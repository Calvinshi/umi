export default {
    "post /api/login" (req,res,next){
        const {username, password} = req.body;
        if (username = "shishaopeng" && password == "123") {
            return res.json({
                code: 0 ,
                data:{
                    token: "helloeveryone",
                    role:"admin",
                    balance: 1000,
                    username: "shishaopeng"
                }
            });
        }
        if (username == "xiaopeng" && password == '123') {
            return res.json({
                code: 0 ,
                data:{
                    token:"helloeveryday",
                    role: "user",
                    balance: 100,
                    username : "xiaopeng"
                }
            });
        }
        return res.status(401).json({
            code: -1,
            msg: "wrong passwrod"
        });
    }
}