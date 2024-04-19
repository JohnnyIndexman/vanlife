import { redirect } from "react-router-dom"

export async function authentication(){
    //const navigate = useNavigate()
    let isLoggedIn = false
    console.log('Authentication function called');
    if(isLoggedIn){
        redirect('/login?message= You must login first!')
        throw new Error('Authentication failed. User is not logged in.')
    }else{
        return true
    }
    
}
