let size = [38,40,42]
let new_arry_size =[42,42,44]

let new_size=[...size, ...new_arry_size]
console.log(new_size);

///Duplicate property not allow in object///

let user= [ name="Pushpa",
    email= "push09@gmail.com",
    password="hgtUm43"

]

let new_user=[...user,
    loc="kol",
    password=755658

]

console.log(new_user);