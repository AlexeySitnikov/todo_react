export const expensiveFunc = (number)=>{
  
  let rnd;
  
  for (let index = 0; index < 2e0; index++) {
    rnd = Math.random();  
  }

  return rnd+number;
}