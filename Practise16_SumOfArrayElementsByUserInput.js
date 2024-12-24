let n = prompt("Enter The range");
let arr =[n];
for(let i=1; i<=n; i++)
{
    arr[i-1] = i;
}
console.log(arr);

//Sum of array elements
const sum = arr.reduce((prev, curr) => {
    return prev + curr;
})

console.log(sum);

//product of array Elements
const prod = arr.reduce((prev, curr) => {
    return prev*curr;
})

console.log(prod);
