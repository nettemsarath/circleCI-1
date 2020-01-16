
const Fail = ()=>{
    return new Promise((resolve)=>{
        console.log('Main Rocket is Failing')
        resolve( true )
    })
}

module.exports ={
    Fail
}