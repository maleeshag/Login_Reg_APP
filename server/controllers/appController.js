import UserModel from "../model/User.model.js";
import bcrypt from 'bcrypt'

/** POST:http://localhost:8081/api/register
 * @param:{
 *  "username":"example123",
 * "password":"admin123",
 * "email":"example@gmail.com",
 * "firstname":"bill",
 * "lastname":"william",
 * "mobile":8009860560,
 * "adddress":"162/4-c,kadawala Road"
 * "profile":"" 
 *  
 * 
 * }
 */

export async function register(req,res){
    try{
        const {username,password,profile,email}=req.body;

        //check the existing user
        const existUsername=new Promise((resolve,reject)=>{
            UserModel.findOne({username},function(err,user){
                if(err)reject(new Error(err))
                if(user)reject({error:"Please use unique username"});

                resolve();

            })
        });

        //check for existing email
        const existEmail=new Promise((resolve,reject)=>{
            UserModel.findOne({email},function(err,email){
                if(err)reject(new Error(err))
                if(user)reject({error:"Please use unique email"});

                resolve();

            })
        });

        Promise.all([existUsername,existEmail])
            .then(()=>{

                if(password){
                    bcrypt.hash(password,10)
                        .then(hashedPassword=>{

                            const user=new UserModel({
                                username,
                                password:hashedPassword,
                                profile:profile || '',
                                email
                            });

                            //return save result as a response
                            user.save()
                                .then(result=>res.statues(201).send({msg:"User Register Successful"}))
                                .catch(error=>res.status(500).send({error}))

                        }).catch(error=>{
                            return res.status(500).send({
                                error:"Enable to hashed password"
                            }) 
                        })
                }

            }).catch(error=>{
                return res.status(500).send({
                    error
                })
            })



    }catch(error){
        return res.status(500).send(error);
    }
}

/** POST: http://localhost:8081/api/login
 * @param:{
 * "username":"example123",
 * "password":"admin123",
 * }
 */

export async function login(req,res){
    res.json('login route');
}

// POST: http://localhost:8081/api/user/example123
export async function getUser(req,res){
    res.json('getUser route');
}

// PUT: http://localhost:8081/api/updateuser
// @param:{
//     "id":"<userid>"
// }
// body:{
//     firstName:'',
//     address:'',
//     profile:''
// }
export async function updateUser(req,res){
    res.json('updateUser route');
}

// GET: http://localhost:8081/api/generateOTP 
export async function generateOTP(req,res){
    res.json('generateOTP route');
}

// GET: http://localhost:8081/api/verifyOTP  
export async function verifyOTP(req,res){
    res.json('generateOTP route');
}

//successfully redirect user when OTP is valid
// GET: http://localhost:8081/api/createResetSession 
export async function createResetSession(req,res){
    res.json('createResetSession route');
}


// PUT: http://localhost:8081/api/resetPassword
export async function resetPassword(req,res){
    res.json('resetPassword route');
}
