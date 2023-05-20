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

const BASE_URL = "https://amamstore-b892b-default-rtdb.firebaseio.com";

// get all neccesary variables
const createProductForm = document.querySelector("form");
const priceInput = document.querySelector("input[id=price]");
const imageInput = document.querySelector("input[id=image]");
const descriptionInput = document.querySelector("#description");

const products = [];

const product = {
  price: 0,
  image: "",
  description: "",
};

priceInput?.addEventListener("change", (e) => {
  product.price = e.target.value;
});

imageInput?.addEventListener("change", (e) => {
  product.image = e.target.value;
});

descriptionInput?.addEventListener("change", (e) => {
  product.description = e.target.value;
});

createProductForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const options = {
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(product),
  };

  fetch(`${BASE_URL}/products.json`, options).then(
    function (value) {
      console.log(value);
    },
    function (error) {
      console.log(error);
      throw error;
    }
  );
  console.log(product);
  createProductForm.reset();
});

//   getting all products
async function getAllProducts() {
  const response = await fetch(`${BASE_URL}/products.json`);
  const data = await response.json();
  console.log(data);

  for (const key in data) {
    const product = { ...data[key], id: key };
    products.push(product);
  }

  let htmlProduct = "";
  products.forEach(function (product) {
    htmlProduct += `<div class = "content-over1">
      <div class="over-contain">
      <a href="item.html">
          <img
          src="${product.image}"
          alt=""
          />
      </a>
      <div class="pad-con">
          <div class="over-text">
            <h4>${product.description}</h4>
          </div>
          <div class="price-availablity">
            <h2>${product.price}</h2>
            <h3>In-Stock</h3>
          </div>
        </div>
      </div>
      </div>`;
  });

  if (document.querySelector(".over-contain") != undefined) {
    document.querySelector(".over-contain").innerHTML = htmlProduct;
  }
}

getAllProducts();
