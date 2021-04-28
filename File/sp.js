let user = { name: "Kavitha", email: "greetlabs@gmail.com" };
let arr_User = { ...user, password: "123ABC" };

let new_user_details = { ...arr_User, 
                     location:"kolkata", password:"234FDG"};


console.log(arr_User);

console.log(new_user_details);