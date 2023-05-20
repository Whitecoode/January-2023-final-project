const submitButton = document.querySelector("#submit");

const loader = document.querySelector("#loader");
const bodyColor =  document.querySelector("body");
const pop = document.querySelector(".pop-up");

submitButton.addEventListener("click", (e)=>{
    loader.style.display = "block";
    bodyColor.style.backgroundColor = "lightgrey"
    setTimeout(() => {
        loader.style.display = "none";
        pop.style.display = "block"
        }, 5000);
})