let student = {
    name : "Sunny",
    age : 20,
    cgpa : 10
};

for(let i in student)
{
    console.log(i, "value=", student[i]);
}