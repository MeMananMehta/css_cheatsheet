//controlling inverse style on tabs

//main-tabs
const tabItems = document.querySelectorAll(".tab-item");
const tabContents = document.querySelectorAll(".tab-content-item");

tabItems.forEach(item => item.addEventListener("click", selectItemMain));

function selectItemMain(e) {
  removeInverseMain();
  this.classList.add("tab-inverse");

  removeShowMain();
  const tabContentSelected = document.querySelector(`#${this.id}-content`);
  tabContentSelected.classList.add("show");
}

function removeInverseMain() {
  tabItems.forEach(item => item.classList.remove("tab-inverse"));
}

function removeShowMain() {
  tabContents.forEach(item => item.classList.remove("show"));
}

//tab-4-work and project tab
const tab4Items = document.querySelectorAll(".tab-4-item");
const tab4Contents = document.querySelectorAll(".tab-4-content-item");

tab4Items.forEach(item => item.addEventListener("click", selectItemTab4));

function selectItemTab4(e) {
  removeInverseTab4();
  this.classList.add("tab-inverse");

  removeShowTab4();
  const tabContent4Selected = document.querySelector(`#${this.id}-content`);
  tabContent4Selected.classList.add("show");
}

function removeInverseTab4() {
  tab4Items.forEach(item => item.classList.remove("tab-inverse"));
}

function removeShowTab4() {
  tab4Contents.forEach(item => item.classList.remove("show"));
}

// controlling list displays

//initiallising variables

//all forms
const basicForm = document.querySelector("#basic-form");
const academicForm = document.querySelector("#academic-form");
const skillsForm = document.querySelector("#skills-form");
const projectForm = document.querySelector("#project-form");
const workForm = document.querySelector("#work-form");

//basic input fields
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone-no");
const githubInput = document.querySelector("#github");
const headingInput = document.querySelector("#heading");
const aboutInput = document.querySelector("#about");
const profileInput = document.querySelector("#profile");

//academic input fields
const qualificationInput = document.querySelector("#qualification");
const collegeInput = document.querySelector("#college");
const universityInput = document.querySelector("#university");
const startAcademicInput = document.querySelector("#start-academic");
const endAcademicInput = document.querySelector("#end-academic");

//skills input fields
const skillNameInput = document.querySelector("#skill-name");
const skillRatingInput = document.querySelector("#skill-rating");

//project input fields
const projectNameInput = document.querySelector("#project-name");
const projectDescriptionInput = document.querySelector("#project-description");

//work input fields
const workNameInput = document.querySelector("#work-name");
const workDescriptionInput = document.querySelector("#work-description");

//academic collection
const academicList = document.querySelector(".collection-academic");
//skills collection
const skillsList = document.querySelector(".collection-skills");

//project collection
const projectList = document.querySelector(".collection-project");

//work collection
const workList = document.querySelector(".collection-work");

loadEventListeners();

function loadEventListeners() {
  academicForm.addEventListener("submit", addAcademic);
  skillsForm.addEventListener("submit", addSkill);
  projectForm.addEventListener("submit", addProject);
  workForm.addEventListener("submit", addWork);
}

function addAcademic(e) {
  if (
    qualificationInput.value === "" ||
    collegeInput.value === "" ||
    universityInput.value === "" ||
    startAcademicInput === "" ||
    endAcademicInput === ""
  ) {
    alert("Please enter all fields!");
  } else {
    const li = document.createElement("li");
    li.className = "collection-academic-item";
    const data =
      qualificationInput.value +
      ", " +
      collegeInput.value +
      ", " +
      universityInput.value +
      ", " +
      "( " +
      startAcademicInput.value +
      " - " +
      endAcademicInput.value +
      " )";
    li.appendChild(document.createTextNode(data));

    academicList.appendChild(li);

    (qualificationInput.value = ""),
      (collegeInput.value = ""),
      (universityInput.value = ""),
      (startAcademicInput.value = ""),
      (endAcademicInput.value = "");
  }
  e.preventDefault();
}

function addSkill(e) {
  if (skillNameInput.value === "" || skillRatingInput.value === "") {
    alert("Please enter all fields!");
  } else {
    const li = document.createElement("li");
    li.className = "collection-skills-item";
    const data = skillNameInput.value + "  -  " + skillRatingInput.value;
    li.appendChild(document.createTextNode(data));

    skillsList.appendChild(li);

    (skillNameInput.value = ""), (skillRatingInput.value = "");
  }
  e.preventDefault();
}

function addProject(e) {
  if (projectNameInput.value === "" || projectDescriptionInput.value === "") {
    alert("Please enter all fields!");
  } else {
    const li = document.createElement("li");
    li.className = "collection-project-item";
    const data =
      projectNameInput.value + "  -  " + projectDescriptionInput.value;
    li.appendChild(document.createTextNode(data));

    projectList.appendChild(li);

    (projectNameInput.value = ""), (projectDescriptionInput.value = "");
  }
  e.preventDefault();
}

function addWork(e) {
  if (workNameInput.value === "" || workDescriptionInput.value === "") {
    alert("Please enter all fields!");
  } else {
    const li = document.createElement("li");
    li.className = "collection-work-item";
    const data = workNameInput.value + "  -  " + workDescriptionInput.value;
    li.appendChild(document.createTextNode(data));

    workList.appendChild(li);

    (workNameInput.value = ""), (workDescriptionInput.value = "");
  }
  e.preventDefault();
}
