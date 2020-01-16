
const Rockets = require('./dependencyfunc')
const FailRocket = require('./FailRocket')

describe('Testing Rocket Launch ',()=>{
    test('spying on Launch Function', async()=>{

        jest.spyOn( FailRocket ,'Fail').mockImplementation(()=>{
            return new Promise((resolve, reject)=>{
                console.log('Test Rocket is Failing')
                resolve( true )
            })
        })

        let expectedResult = 'Abort Rocket' ;
        let actualResult =await Rockets.RocketStatus() ;

        expect( FailRocket.Fail ).toHaveBeenCalled()
        expect( actualResult ).toBe( expectedResult )
    
    } )
})



// describe('Testing Rocket Launch ',()=>{
//     test('spying on Launch Function', async()=>{

//         jest.mock('./dependencyfunc');
//         const Failmock = jest.fn(() =>{
//             return new Promise((resolve, reject)=>{

//                 console.log('Test Rocket is Failing')
//                 resolve( true )
//             })
//         }) ;
//         Fail = Failmock ;

//         let expectedResult = 'Abort Rocket' ;
//         let actualResult =await RocketStatus() ;

//         expect( Fail ).toHaveBeenCalled()
//         expect( actualResult ).toBe( expectedResult )
     
//     } )
// })
