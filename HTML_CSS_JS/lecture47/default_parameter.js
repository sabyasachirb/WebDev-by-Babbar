function getAge()
{
    let age = 190;
    return age;
}

function utility(name = "Sabyasachi", age = getAge()){
    console.log(name, " ", age);
}

utility();


//so here if we set default parameter then if we don't pass any value the default parameter gets to work