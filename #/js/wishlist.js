const addToWishlistButton = document.querySelector(".love");


// console.log(addToWishlist);


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
        wishHTML += `<div class="cart">
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
          document.querySelector(".carts__container").innerHTML = wishHTML;
        }
      
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