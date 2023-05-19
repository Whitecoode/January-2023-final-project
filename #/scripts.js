const toggleMenu = document.querySelector('.bttn-for-menu');
const menuBar = document.querySelector('#droplist1');

console.log(toggleMenu)
toggleMenu.addEventListener('click',() => {
    menuBar.classList.toggle('active');
});

const exitMenu = document.querySelector('.cancel-btn')
console.log(exitMenu)
exitMenu.addEventListener('click',() => {
    menuBar.classList.remove('active')
});
const imageContainer = document.querySelector('.content-over1');
const images = document.querySelectorAll('.over-contain');
const nextBtn = document.querySelector('next-click');
let currentIndex = 0

// function showImage(index){
//     const imageWidth = images[0].clientWidth;
//     imageContainer.style.transform = 'translateX(-${index * imageWidth}px)';
// }

// nextBtn.addEventListener('click', () =>) {
//     if (currentIndex < images.length - 1){
//         currentIndex++;
        
//     }
// }

const dropDown = document.querySelector('.btn-drop');
const dropDown2 = document.querySelector('.btn-drop2');
const dropDown3 = document.querySelector('.btn-drop3');
const accDrop = document.querySelector('#accdrop');
const accDrop2 = document.querySelector('#accdrop2');
const accDrop3 = document.querySelector('#accdrop3');

console.log(dropDown)
dropDown.addEventListener('click',() => {
    accDrop.classList.toggle('active');
});
dropDown2.addEventListener('click',() => {
    accDrop2.classList.toggle('active');
});
dropDown3.addEventListener('click',() => {
    accDrop3.classList.toggle('active');
});



// JavaScript code on the home page
// Retrieve item data from the Firebase database
firebase.database().ref("items").once("value").then(function(snapshot) {
    var items = snapshot.val();
  
    // Handle the retrieved item data
    var itemsContainer = document.getElementById("itemsContainer");
    for (var itemId in items) {
      var item = items[itemId];
      var itemElement = document.createElement("div");
      itemElement.innerHTML = "<h3>" + item.itemName + "</h3><p>" + item.itemDescription + "</p><img src='" + item.downloadURL + "' alt='Item Image'>";
      itemsContainer.appendChild(itemElement);
    }
  });
  