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

function getCartItem(){
    const carts = JSON.parse(localStorage.getItem("carts"));
    let cartHTML = '';
    carts.forEach(function(value){
        cartHTML += `<div class="cart">
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
              <i class="fa-solid fa-square-plus" style="color: #d08840"></i>
              <p class="counter">1</p>
              <i class="fa-solid fa-square-minus" style="color: #d08840"></i>
            </div>
          </div>
        </div>
        <div class="remove">
          <button><i class="fa-solid fa-trash-can"></i>Remove</button>
        </div>
        </div>`;
        if(document.querySelector(".carts__container") != undefined){
          document.querySelector(".carts__container").innerHTML = cartHTML;
        }
      
const deleteBtn = document.querySelectorAll(".remove button");
      deleteBtn.forEach(function (deletebtn, index) {
        deletebtn.addEventListener("click", function () {
          console.log("remove");
          if (confirm("Are you sure you want to remove the item")) {
            items[index].remove();
          }
        });
      });
    });
}

getCartItem();
plus.forEach(function (plus, index) {
  plus.addEventListener("click", () => {
    countValue[index].textContent = Number(countValue[index].textContent) + 1;
  });
});
minus.forEach(function (minus, index) {
  minus.addEventListener("click", () => {
    countValue[index].textContent =
      countValue[index].textContent <= 1
        ? 1
        : Number(countValue[index].textContent) - 1;
  });
});










const addToWishlistButton = document.querySelector(".love");


console.log(addToWishlist);


const wishes = [];
const wishOBJ = {
    title: itemTitle ?? "",
    price: itemPrice ?? "",
    imageSrc: itemImage ?? "",
}

addToWishlistButton?.addEventListener("click", addToWishlist);
function addToWishlist() {
    wishes.push(wishOBJ);
    localStorage.setItem("wishes", JSON.stringify(wishes));
}

function getWishItem(){
    const wishes = JSON.parse(localStorage.getItem("wishes"));
    let wishHTML = '';


    wishes.forEach(function(value){
        wishHTML += `<div class="cart" style="margin-top: 15px;">
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
        </div>`;
        if(document.querySelector(".whistlist__container") != undefined){
          document.querySelector(".whistlist__container").innerHTML = wishHTML;
        }
      
      });
    }
    // deleteBtn.forEach(function (deletebtn, index) {
    //   deletebtn.addEventListener("click", function () {
    //     console.log("remove");
    //     if (confirm("Are you sure you want to remove the item")) {
    //       items[index].remove();
    //     }
    //   });
    // });

getWishItem();
plus.forEach(function (plus, index) {
  plus.addEventListener("click", () => {
    countValue[index].textContent = Number(countValue[index].textContent) + 1;
  });
});
minus.forEach(function (minus, index) {
  minus.addEventListener("click", () => {
    countValue[index].textContent =
      countValue[index].textContent <= 1
        ? 1
        : Number(countValue[index].textContent) - 1;
  });
});