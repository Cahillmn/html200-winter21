let animals = ['dog', 'cat' , 'bird', 'fish', 'hamster'];

for (let i = 0; i < animals.length; i++) {
  
  for (let j = 0; j < animals.length; j++ ) {
  
  let position = '' ;
   if (j === 0) {
            position = 1;
        } else if (j === 1) {
            position = 2;
        } else if (j === 2) {
            position = 3;
        } else if (j === 3) {
            position = 4;
        } else if (j === 4){
            position = 5;
        }
  
  console.log (position + ', ' + animals[i]);
}
  
}
