import { axios_instance } from "./index"

export const signupUser = async (user)=>{
    try {
        const response = await axios_instance.post('/api/auth/signup',user);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}