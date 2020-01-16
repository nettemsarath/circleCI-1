

const axios = require('axios') ;

const GetEmployes = async()=>{
    try {
        return await axios.get('http://dummy.restapiexample.com/api/v1/employees') ;
        
    } catch (error) {
       
        throw new Error(error) ;
    }
}

module.exports = {
    GetEmployes 
}