/* Close the menu if click is outside of button */
window.onclick = function (event) {
  let menuDiv = document.querySelector(".dropdown-menu");
  if (!event.target.matches(".menu-button")) {
    console.log("removing menu");
    if (menuDiv.classList.contains("show-menu")) {
      menuDiv.classList.remove("show-menu");
    }
  }
};
window.onload = function () {
  let menuButtons = document.querySelectorAll(".menu-button");
  for (let i = 0; i < menuButtons.length; i++) {
    menuButtons[i].addEventListener("click", toggleMenu);
  }

  let viewButton = document.querySelector(".change-view");
  viewButton.addEventListener("click", flipView);
};
/* Show the menu if not shown and position it */
function toggleMenu(e) {
  let menuDiv = document.querySelector(".dropdown-menu");
  //let menuRect = menuDiv.getBoundingClientRect();
  let btnTarget = e.currentTarget;

  let leftPos = round2Decimals(
    btnTarget.offsetLeft + btnTarget.offsetWidth - menuDiv.offsetWidth,
  );
  let topPos = round2Decimals(btnTarget.offsetTop + btnTarget.offsetHeight);

  // Toggle menu if same button is clicked
  if (menuDiv.style.left === `${leftPos}px` && menuDiv.style.top === `${topPos}px`) {
    menuDiv.classList.toggle("show-menu");
    if (!menuDiv.classList.contains("show-menu")) document.activeElement.blur(); // Remove focus if menu is closed
    return;
  }

  // Show menu if it is not shown
  if (!menuDiv.classList.contains("show-menu")) menuDiv.classList.add("show-menu");

  // Reposition menu
  menuDiv.style.left = `${leftPos}px`;
  menuDiv.style.top = `${topPos}px`;
}

/* Flip between grid and list view */
function flipView(event) {
  let elButton = event.currentTarget;
  let list = "view_list";
  let grid = "view_comfy";
  if (elButton.innerText === list) {
    elButton.innerText = grid;
    document
      .querySelector(".container")
      .classList.replace("container-grid-view", "container-list-view");
  } else {
    elButton.innerText = list;
    document
      .querySelector(".container")
      .classList.replace("container-list-view", "container-grid-view");
  }
}

/* Round num to 2 decimals */
function round2Decimals(num) {
  return Math.round(num * 100) / 100;
}

/* Get random book image */
// function randomBookCover() {
//   let min = 100000;
//   let max = 999999;
//   let num = Math.floor(Math.random() * (max - min + 1)) + min;
//   let url = `https://covers.openlibrary.org/b/id/${num}-S.jpg`;
//   return url;
// }
