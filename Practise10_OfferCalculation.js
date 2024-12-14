let prices = [250, 645, 300, 900, 50];
let offer = 0.9;
let temp=[];

console.log(`The Prices of items are: ${prices}`);

//1st method using for of loop
for(let i of prices)
{
    let discountedPrice=i*offer;
    temp[i]=discountedPrice;
console.log(`Original price of an item is ${i} and after the 10% off offer: ${temp[i]}`);
}

//2nd method using for in loop
for(let i in prices)
    {
        let discountedPrice=prices[i]*offer;
        prices[i]=discountedPrice;
    console.log(`price of an item at index ${i} after the 10% off offer: ${prices[i]}`);
    }

//3rd method using for loop
for(let i=0; i<prices.length; i++)
{
    discountedPrice= prices[i]*offer;
    prices[i]=discountedPrice;
}
console.log(prices);

