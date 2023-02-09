const { freteGratis } = require('./descontos.js')

const {generate,request } =require('./utility.js')


test('freteGratis é verdadeiro para 200', async () => {
  
    console.log(generate(2))

    console.log(await request("https://www.geeksforgeeks.org/node-js-crypto-randombytes-method","get"))
    
  expect(freteGratis(200)).toBeTruthy()
})


 
