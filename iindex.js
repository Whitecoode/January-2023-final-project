const BASE_URL = "https://authentication-2bc42-default-rtdb.firebaseio.com/"

const login = document.querySelector("#login")
const email = document.querySelector("input[id=e-mail]")
const password = document.querySelector("input[id=password]")

let inputs ={
    email:"",
    password:"",
}

email.addEventListener("change", (e)=>{
    inputs.email = e.target.value;
})
password.addEventListener("change", (e)=>{
    inputs.password = e.target.value;
})
login.addEventListener("submit", (event)=> {
    event.preventDefault();
    const options = {
        headers:{
            "Content-type":"application/json",
        },
        method:"POST",
        body: JSON.stringify(inputs),
    }
    fetch(`${BASE_URL}/inputs.json`, options).then(function(value){
        console.log(value)
    },function(error){
        console.log(error);
        throw error;
    });

    console.log(inputs)
})

