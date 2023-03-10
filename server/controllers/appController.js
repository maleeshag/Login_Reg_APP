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
    res.json('register route');
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
