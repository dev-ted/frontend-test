

let token = localStorage.getItem('token');

let account_id = localStorage.getItem('user_id')


const requests = {

   
    login : "auth/login",
    signup :`auth/register/client?api_token=${token}`,
    resetPassword : "/auth/password/reset",
    getUser : `user/me?api_token=${token}`,
    getDashboard : `dashboard/client?api_token=${token}`,
    getStores : `store/all?api_token=${token}`,
    getMembers : `loyalty/member/all/${account_id}?api_token=${token}`,
    addMember : `loyalty/member/store?api_token=${token}`,
    addStore : `store?api_token=${token}`,
    assignPoints : ``
   
   
        
    }
    export default requests;