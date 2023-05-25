const plus = document.querySelectorAll(".fa-square-plus");
const minus = document.querySelectorAll(".fa-square-minus");
const countValue = document.querySelectorAll(".counter");
const items = document.querySelectorAll(".cart");
const itemImage = document.querySelector(".scarf img")?.src;
const itemTitle = document.querySelector(".type p:first-child")?.innerHTML;
const itemPrice = document.querySelector(".type p:last-child")?.innerHTML;

// console.log(itemTitle);

const addToCartButton = document.querySelector("button[add-to-cart]");
// console.log(addToCartButton);
const carts = [];
const cartOBJ = {
  title: itemTitle ?? "",
  price: itemPrice ?? "",
  imageSrc: itemImage ?? "",
};

addToCartButton?.addEventListener("click", addToCart);
function addToCart() {
  carts.push(cartOBJ);
  localStorage.setItem("carts", JSON.stringify(carts));
}

function getCartItem() {
  const carts = JSON.parse(localStorage.getItem("carts"));
  let cartHTML = "";
  carts.forEach(function (value) {
    let idGenerated = Math.floor(Math.random() * 10001);
    cartHTML += `<div class="cart" id= "item-${idGenerated}">
        <div class="cart-item">
          <div class="radio"><input type="radio" name="" id="" /></div>
          <div class="cartimg">
            <img src="${value.imageSrc}" alt="" />
          </div>
          <div class="body">
            <div class="text">
              <p>${value.title}</p>
              <h2>Price: <span>${value.price}</span></h2>
            </div>
            <div class="incress">
              <span onclick="increaseQty('counter-${idGenerated}')">
              <i class="fa-solid fa-square-plus" style="color: #d08840"></i>
              </span>
              <p class="counter" id= "counter-${idGenerated}">1</p>
              <span onclick="decreaseQty('counter-${idGenerated}')">
              <i class="fa-solid fa-square-minus" style="color: #d08840"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="remove" onclick="removeItem('item-${idGenerated}')">
          <button><i class="fa-solid fa-trash-can"></i>Remove</button>
        </div>
        </div>`;
    if (document.querySelector(".carts__container") != undefined) {
      document.querySelector(".carts__container").innerHTML = cartHTML;
    }
  });
}

getCartItem();

function increaseQty(data) {
  let newValue = parseInt(document.getElementById(data).innerText) + 1;

  document.getElementById(data).innerText = newValue;
}

function decreaseQty(data) {
  let newValue = parseInt(document.getElementById(data).innerText) - 1;

  if(parseInt(document.getElementById(data).innerText) <= 1) {
    return;
   }

  document.getElementById(data).innerText = newValue;
}

const addToWishlistButton = document.querySelector(".love");

console.log(addToWishlist);

const wishes = [];
const wishOBJ = {
  title: itemTitle ?? "",
  price: itemPrice ?? "",
  imageSrc: itemImage ?? "",
};

addToWishlistButton?.addEventListener("click", addToWishlist);
function addToWishlist() {
  wishes.push(wishOBJ);
  localStorage.setItem("wishes", JSON.stringify(wishes));
}

function getWishItem() {
  const wishes = JSON.parse(localStorage.getItem("wishes"));
  let wishHTML = "";

  wishes.forEach(function (value) {
    let idGenerated = Math.floor(Math.random() * 10001);
    wishHTML += `<div class="cart" style="margin-top: 15px; display: flex;" id= "item-${idGenerated}">
        <div class="cart-item">
          <div class="radio"><input type="radio" name="" id="" /></div>
          <div class="cartimg">
            <img src="${value.imageSrc}" alt="" />
          </div>
          <div class="body">
            <div class="text">
              <p>${value.title}</p>
              <h2>Price: <span>${value.price}</span></h2>
            </div>
          </div>
        </div>
        <div class="remove" style="margin: auto;" onclick="removeItem('item-${idGenerated}')">
        <button>Remove</button>
      </div>
        </div>`;
    if (document.querySelector(".whistlist__container") != undefined) {
      document.querySelector(".whistlist__container").innerHTML = wishHTML;
    }
  });
}

getWishItem();

function removeItem(idGenerated) {
  if (confirm("Are you sure you want to remove this item from cart?")) {
    let itemRemoved = document.getElementById(idGenerated).remove();
    
    if (itemRemoved) console.log("Item removed from cart");
  }
  const carts = JSON.parse(localStorage.getItem("carts"));

  console.log(carts);
}
