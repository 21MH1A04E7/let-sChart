const Url=`http://localhost:5550/api`
const Api={
    register:{
        url:`${Url}/auth/register`,
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        }
    }
}
export default Api