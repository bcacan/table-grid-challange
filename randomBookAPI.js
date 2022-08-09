function randomBookCover() {
  // let min = 100000;
  // let max = 999999;
  // let num = Math.floor(Math.random() * (max - min + 1)) + min;
  // let url = `https://covers.openlibrary.org/b/id/${num}-S.jpg`;
  // return url;
  return "bookcover.jpg";
}

function flipView(elButton) {
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
