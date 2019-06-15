const tabItems = document.querySelectorAll(".tab-item");
const tabContents = document.querySelectorAll(".tab-content-item");

tabItems.forEach(item => item.addEventListener("click", selectItem));

function selectItem(e) {
  removeBorder();
  this.classList.add("tab-border");

  removeShow();
  const tabContentSelected = document.querySelector(`#${this.id}-content`);
  tabContentSelected.classList.add("show");
}

function removeBorder() {
  tabItems.forEach(item => item.classList.remove("tab-border"));
}

function removeShow() {
  tabContents.forEach(item => item.classList.remove("show"));
}

//tab-4-stuff
const tab4Items = document.querySelectorAll(".tab-4-item");
const tab4Contents = document.querySelectorAll(".tab-4-content-item");

if (document.getElementById("project")) {
  removeShow2();
  const tab4ContentSelected = document.querySelector(`#tab-4-project-content`);
  tab4ContentSelected.classList.add("show");
}

function removeShow2() {
  tab4Contents.forEach(item => item.classList.remove("show"));
}
