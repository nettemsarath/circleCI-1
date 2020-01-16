

const FailRocket = require('./FailRocket')

const Abort = ()=>{
    return new Promise(resolve=>{
        console.log('Main Rocket is Aborting')
        resolve('Abort Rocket')
    })
}

// const Fail = ()=>{
//     return new Promise((resolve)=>{
//         console.log('Main Rocket is Failing')
//         resolve( true )
//     })
// }


const RocketStatus = async()=>{

    let status = await FailRocket.Fail() ;
    if( status ){
       return await Abort()
    }else{
        return 'Rocket Successfull'
    }

}

module.exports = {
    RocketStatus
}