

const users = require('./app') ;
const axios = require('axios')
const Rockets = require('./rocket-silo')

describe('Testing GetEmployees', ()=>{

    test('success :Get All Employees', async() => {

        axios.get = jest.fn(() =>  new Promise().resolve(
            [
            { 
                id : 434 ,
                employee_name : "Nettem Sarath" ,
                employee_salary : "20000" ,
                employee_age : "23",
                profile_image : ""
            },
            { 
                id : 435 ,
                employee_name : "Perumal Navya" ,
                employee_salary : "25000" ,
                employee_age : "23",
                profile_image : ""
            },
        ]
        ) )
    
        try {
            let output = await users.GetEmployes()
            expect( output ).toEqual( [
                { 
                    id : 434 ,
                    employee_name : "Nettem Sarath" ,
                    employee_salary : "20000" ,
                    employee_age : "23",
                    profile_image : ""
                },
                { 
                    id : 435 ,
                    employee_name : "Perumal Navya" ,
                    employee_salary : "25000" ,
                    employee_age : "23",
                    profile_image : ""
                },
            ] )
        } catch (error) {
    
        }
    
    })

    test('Fail : To Get All Employee Details', async()=>{
        axios.get = jest.fn(()=> new Promise((resolve,reject)=>{
            reject('Authentication Error')
        }) ) ;
        try {
            await users.GetEmployes()
        } catch (error) {
            
            expect( error.message ).toBe('Authentication Error')
        }
    })

})


describe('Testing Rocket Launch ',()=>{
    test('spying on Launch Function', async()=>{

        const hackRockets = ()=>{
            return new Promise((resolve, reject)=>{
                resolve('Launching Rockets in TestNet')       
            })
        }
        
        Rockets.Launch = jest.fn( async()=> await hackRockets() )

        let expectedResult = 'Launching Rockets in TestNet' ;
        let actualResult =await Rockets.Launch() ;
        
        expect( Rockets.Launch ).toHaveBeenCalled()
        expect( actualResult ).toBe( expectedResult )
     
    } )
})



// describe('Testing Rocket Launch ',()=>{
//     test('spying on Launch Function', async()=>{
//         jest.spyOn(Rockets ,'Launch').mockImplementation(()=>{
//             return new Promise((resolve, reject)=>{
//                 resolve('Launching Rockets in TestNet')
//             })
//         })

//         let expectedResult = 'Launching Rockets in TestNet' ;
//         let actualResult =await Rockets.Launch() ;
//         expect( Rockets.Launch ).toHaveBeenCalled()
//         expect( actualResult ).toBe( expectedResult )
     
//     } )
// })

