
const users = require('./app') ;
const mockaxios = require('axios')
const Rockets = require('./rocket-silo')

describe('Testing GetEmployees', ()=>{

    test('should success To Get All Employees', async() => {

        mockaxios.get = jest.fn(()=>{
            return new Promise.resolve({ 
                data: { result: 
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
                ] } 
            })
        })
    
        try {
            let output = await users.GetEmployes()
            expect( mockaxios.get ).toHaveBeenCalled()
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

    test('should Fail : To Get All Employee Details', async()=>{

        jest.spyOn(mockaxios ,'get').mockImplementationOnce(()=>{
            return new Promise((resolve, reject)=>{
                reject({ message :'Authentication Error'})
            })
        })

        try {
           let result= await users.GetEmployes()
        
        } catch (error) {
        
            expect( mockaxios.get ).toHaveBeenCalled()
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

