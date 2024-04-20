import VanInfo from "../Pages/VanInfo"
import { redirect} from 'react-router-dom'


export async function authentication(){
    
try {
    const Api = VanInfo().vanauth
    if (typeof Api.setName !== 'function' || typeof Api.setPassword !== 'function') {
        throw new Error('setName or setPassword methods are not defined on vanauth');
      }

    Api.setName('name')
    Api.setPassword('password')

    if (typeof Api.login !== 'function') {
        throw new Error('login method is not defined on vanauth');
      }

    const isLoggedIn = Api.login()
    if(isLoggedIn){
        return { isLoggedIn: true}
    }else{
        redirect('/login?message=You must login first!'); 
      throw new Error('Authentication failed. User is not logged in.')
    }
}catch(error){
    throw error
}
}
