

const Rockets = require('./dependencyfunc')
const FailRocket = require('./FailRocket')

describe('Testing Rocket Launch22 ',()=>{
    test('spying on Launch Function22', async()=>{

        let expectedResult = 'Abort Rocket' ;
        let actualResult =await Rockets.RocketStatus() ;

        expect( actualResult ).toBe( expectedResult )
    
    } )
})