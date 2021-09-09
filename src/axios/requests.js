let token = ""

const requests = {

   
    login : "/auth/login",
    signup :`/auth/register/client?api_token=${token}`,
    getDashboard : "/dashboard/client",
    resetPassword : "/auth/password/reset"
        
    }
    export default requests;