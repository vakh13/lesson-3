// პირველი

function dadebitiNum(...numbers){
    let sum = 0;
    for (let i of numbers){
        if (i > 0){
            sum += i;
        }
    }
    return sum;
}

let result = dadebitiNum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
console.log(result);

// მეორე

function sum(...number){

        let numsum = 0;
        for (let item of number){
            numsum = numsum + item;  
        }
    return numsum;
    }

sum(10, 50, 6, 7, 8, 11, 6, 3, 9);

let resultsum= sum(10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(resultsum);

// მესამე

let user = {
    firstname: "გიორგი",
    lastname:"სააკაძე",
    age:32
    }

let result1 = `${user.firstname} ${user.lastname} არის ${user.age} წლის` 
console.log(result1);

// მეოთხე

 function array_max(array){
    let max = array[0];
    for (let i of array){
        if (i > max){
            max = i;
        }
    }
    return max;
 }

 let result = array_max([5,34,78,160,45,174,63,9]);
 console.log(result);



// მეხუთე

 function even_odd(num){
     if (num % 2 == 0){
         return "this number is even";
    }
     else if (num % 2 != 0){
         return "this number is odd";
     }
         return "error";
 }

 let result = even_odd(9);
 console.log(result);




//მეექვსე

let names = ['html','css', 'python','javascript', 'bootsrap'];
for (let item of names) {
    console.log(item);
  if (item.length < 4) {
        console.log(item);
    }
   
}


// მეშვიდე

let array = [1,2,3,4,5];
   
for(let i = array.length - 1; i >= 0; i--){
    console.log(array[i]);
}