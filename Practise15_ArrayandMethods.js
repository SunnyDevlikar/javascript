let arr = [1,2,3,4,5,6,7,8,9,0];

//Method 1
arr.forEach(function values(val){
    console.log(`square of ${val} = ${val*val}`); 
    //console.log(val*val);
})
console.log("=======");

//Method 2
function cal(arr)
{
    let square = arr*arr;
    console.log(square);
}

arr.forEach(cal);
console.log("=======");

//Method 3 using "MAP" Method of array
//Map method works similar as of forEach loop of array, the only difference is that it return the values of given array to new array.

arr.map((val)=> {
    console.log(val*val);
});

//returning the values of original array, then passing those values to new array and printing the newarrays values.
const newarr = arr.map((val)=> {
    return val*val;
});
console.log("=======");
console.log(newarr);

//Filter Array Method
//Filter method can be used to filter the elements of array based upon the certain condition.
//here in this example we have filter out the even numbers from the array

const newarrays = arr.filter((val) => {
return val%2 ===0;

})

console.log("=============");
console.log(newarrays);

//Reduce Array Method
//This method is used in order to return the single value from the array after the operation
//suppose sum of all the values in array


const newarray = arr.reduce((prev, curr) =>{
    return prev + curr;
})
console.log("=======================================");
console.log(`The Sum value of array elemnts is : ${newarray}`);

//Using Reduce Array method finf out the largest element of array.

const largestEl = arr.reduce((prev, cur) => {

    if(prev > cur)
    {
        return prev;
    }
    return cur;
})

console.log("=======================================");
console.log(`The largest Elemnet of Array is: ${largestEl}`);

//This is Practise Question in which we have filter out the marks of the students who has scored 90 or above in any subject.

let Marks = [89, 67, 98, 92, 75, 45, 63];

let score = Marks.filter((val) => {
    return val > 90;
})

console.log("=======================================");
console.log(score);