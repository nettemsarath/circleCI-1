


const Launch = async()=>{
    return await hackRockets()
}

const hackRockets = ()=>{
    return new Promise((resolve, reject)=>{
        resolve('Launching Rockets in MainNet')       
    })
}

module.exports ={
    Launch ,
    hackRockets
}