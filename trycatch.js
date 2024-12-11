function divideNumber(a,b){
try {
    if(b===0)
    {
        throw new Error("Cannot Divide by Zero");
    }
    let result = a/b;
    console.log(`Result: ${result}`);
    }
    catch(error){
        console.log(`Error ${error.message}`);
    }
    finally{
        console.log("Division Attempted")
    }
    
}

divideNumber(10,5);
divideNumber(10,0);