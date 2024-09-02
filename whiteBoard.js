function computeRemainder(dividend, divisor){
    let quotient = 0
    let multiplication = 0
    let i = 0
   //  multiplyer = 0
   for(  i = 1 ; multiplication < dividend; i++ ){
     console.log('this is i', i)
     multiplication = divisor * i
     console.log('multi >>>',multiplication)
     console.log('idx >>>',i)
   }
   console.log(dividend,divisor)
   console.log('outside idx >>>',i)
   let final = dividend - (divisor * (i)) 
   console.log('final >>>',final)
   
 }
 console.log(computeRemainder(10,2))