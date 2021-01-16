import axios from 'axios'

const setAuthToken = token => {
    if(token){
        axios.defaults.headers.common['Authorization'] = 'Token ' + token
    }else{
        axios.defaults.headers.common['Authorization'] = null
    }
}

export default setAuthToken
