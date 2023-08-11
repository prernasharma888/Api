const mysqlconnection = require("../config/db_connection");

//  module.exports.signup = async (req,res)=>{
//    try {
//         let details = {
//              name: req.body.name,
//              email: req.body.email,
//              password: req.body.password,
//              phone: req.body.phone
//             }
//             let sql = "INSERT INTO login SET ?"
//             let result = await mysqlconnection(sql,[details]);
            
//             if(result){
//                 return res.status(200).json({
//                     Message : "inserted successfully"
//                 })
//             }
//         } catch(err){
//         console.log(err)
//         return res.status(500).json({
//             Message : "error"
//         })

//     }}
module.exports.signup = async(req,res)=>{
    try{
        const {name,email,password,phone} = req.body
        let detail ={
            name,
            email,
            password,
            phone
        }

        let sql = "INSERT INTO login SET ?"
        let result = await mysqlconnection(sql,[detail])
        return res.json(200,{
            message : 'data inserted'
        })

    }catch(error){
        console.log(error)
        return res.json(500,{
            message : 'error'
        })
    }
}

