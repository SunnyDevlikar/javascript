function vowel(str)
{
    let count=0;
    let string = str.toString();
    
    for(let i=0; i<string.length; i++)
    {
        if(string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u")
        {
            count = count+1;
        }

    }
    console.log(count);
}

vowel("aeiou");



const NumberofVowels = (str) => {
    let count=0;
    let string = str.toString();
    
    for(let i=0; i<string.length; i++)
    {
        if(string.charAt(i) === "a" || string.charAt(i) === "e" || string.charAt(i) === "i" || string.charAt(i) === "o" || string.charAt(i) === "u")
        {
            count = count+1;
        }

    }
    console.log(count);

}

NumberofVowels("devlikar")

