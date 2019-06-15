const tabItems = document.querySelectorAll(".tab-item");
const tabContents = document.querySelectorAll(".tab-content-item");

tabItems.forEach(item => item.addEventListener("click", selectItem));

function selectItem(e) {
  removeBorder();
  this.classList.add("tab-inverse");

  removeShow();
  const tabContentSelected = document.querySelector(`#${this.id}-content`);
  tabContentSelected.classList.add("show");
}

function removeBorder() {
  tabItems.forEach(item => item.classList.remove("tab-inverse"));
}

function removeShow() {
  tabContents.forEach(item => item.classList.remove("show"));
}

//tab-4-stuff
const tab4Items = document.querySelectorAll(".tab-4-item");
const tab4Contents = document.querySelectorAll(".tab-4-content-item");

tab4Items.forEach(item => item.addEventListener("click", selectItem2));

function selectItem2(e) {
  removeBorder2();
  this.classList.add("tab-inverse");

  removeShow2();
  const tabContent4Selected = document.querySelector(`#${this.id}-content`);
  tabContent4Selected.classList.add("show");
}

function removeBorder2() {
  tab4Items.forEach(item => item.classList.remove("tab-inverse"));
}

function removeShow2() {
  tab4Contents.forEach(item => item.classList.remove("show"));
}
