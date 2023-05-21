
// Get the elements
const mostDownloadedLi = document.getElementById("most_downloaded");
const topChartLi = document.getElementById("top_chart");
const downLoad1 = document.getElementById("down-load1");
const downLoad2 = document.getElementById("down-load2");
const appCards = document.querySelectorAll(".app_card");

// Add click event listeners
mostDownloadedLi.addEventListener("click", showDownload1);
topChartLi.addEventListener("click", showDownload2);


// Show "Most Downloaded" section by default
showDownload1();

// Function to show down-load1
function showDownload1() {
  downLoad1.style.display = "block";
  downLoad2.style.display = "none";
  // shuffleAppCards(downLoad1);
}

// Function to show down-load2
function showDownload2() {
  downLoad1.style.display = "none";
  downLoad2.style.display = "block";
  // shuffleAppCards(downLoad2);
}

// Function to shuffle app cards randomly
// function shuffleAppCards(container) {
//   const appCardsArray = Array.from(container.querySelectorAll(".app_card"));
//   appCardsArray.forEach((card) => {
//     card.style.order = Math.floor(Math.random() * appCardsArray.length) + 1;
//   });
// }
