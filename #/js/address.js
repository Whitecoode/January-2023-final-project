// const button = document.getElementById("save")
const nameInput = document.getElementById("name");
const addressInput = document.getElementById("address");

const form = document.querySelector("form");

// Elements

const name = document.querySelector(".dress .name");
const paragraph = document.querySelector(".dress .head");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector(".dress").style.display = "block";

  if (nameInput.value == "" || addressInput.value == "") {
    alert("Please fill all the field inputs");
    return;
  }
  name.innerHTML = nameInput.value;
  paragraph.innerHTML = addressInput.value;
  form.reset();

});
const deleteIcon = document.querySelector(".deleteIcon");
const editIcon = document.querySelector(".editIcon");

deleteIcon.addEventListener("click", function () {
  if (confirm("Are you sure you want to delete this address")) {
    document.querySelector(".dress").remove();
  }
});

let toggleTaskPanel = (obj) => {
  var form = document.querySelector(".dropdown");
  if (form.style.display == "block") {
    obj.style.backgroundColor = "#d08840";
    obj.innerText = "Add Address";
    form.style.display = "none";
  } else {
    obj.innerText = "Close";
    form.style.display = "block";
  }
};

editIcon.addEventListener("click", () => {
  console.log(name);
  nameInput.value = name.innerHTML;
  addressInput.value = paragraph.innerHTML;
});
