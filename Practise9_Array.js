let marks = [1,2,3,4,5,6,7,8,9];
    console.log("Total Number of Elements are: " ,marks.length);
    let sum=0;
    for(let i=0; i<marks.length; i++)
    {
        
        sum = sum + i;
    }
    console.log("Sum is:", sum);

    let avg = sum/marks.length;
    console.log("The average is:", avg);