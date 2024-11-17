/* ___________________________navbar________________________ */
const navBar = document.querySelector("nav");

window.onscroll = () => {
  if (window.scrollY > 0) {
    navBar.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
  }
};

const listBtn = document.querySelector(".list-btn");
const sideBar = document.querySelector("nav");
const sideBarContainer = document.createElement("div");
const body = document.querySelector("body");
sideBarContainer.classList.add("side-bar");
sideBar.appendChild(sideBarContainer);
sideBarContainer.innerHTML = `
        <a href="./login.html">Login / Register</a>
        <button class="search-btn">
            <img src="./assets/imgs/search.svg" alt="search" />
        </button>
        <a href="index.html" >Home</a>
        <a href="./courses.html">Courses</a>
        <a href="./blog.html">Blog</a>
        <a href="">
            Page
            <img src="./assets/imgs/arrow-down.svg" alt="arrow-down" />
        </a>
        <a href="">Premium Theme</a>`;

const navDropDown = document.querySelector(".nav-drop-down-btn");
const dropDownContainer = document.createElement("div");
dropDownContainer.classList.add("drop-down");
dropDownContainer.style.transform = "scale(0)";
navDropDown.appendChild(dropDownContainer);
dropDownContainer.innerHTML = `<a href='./contact.html'>contact</a>
<a href='./faq.html'>faq</a>`;

const toggleSidebar = (isOpen) => {
  sideBarContainer.style.transform = isOpen
    ? "translateX(0)"
    : "translateX(100%)";
};
const toggleDropDown = (open) => {
  dropDownContainer.style.transform = open
    ? "scaleX(1)translateY(50px)"
    : "scale(0)";
};
const handleBodyClick = (e) => {
  const isClickOutside =
    !sideBarContainer.contains(e.target) && e.target !== listBtn;
  if (isClickOutside) {
    toggleSidebar(false);
  }
  const outsideDropDown =
    !dropDownContainer.contains(e.target) && e.target !== navDropDown;
  if (outsideDropDown) {
    toggleDropDown(false);
  }
};

listBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleSidebar(true);
});

body.addEventListener("click", handleBodyClick);

window.onresize = () => {
  if (window.innerWidth > 1023) {
    toggleSidebar(false);
  }
};
navDropDown.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleDropDown(true);
});

/* --------------------------faq-section------------------------ */
const faqCard = document.querySelectorAll(".faq-card");
const faqContent = document.querySelectorAll(".faq-card > p");
const faqBtn = document.querySelectorAll(".faq-card button");
const faqBntIcn = document.querySelectorAll(".faq-card button > img");

faqBntIcn.forEach((icn) => {
  icn.style.transform = "rotate(180deg)";
});

let cardStatus = null;
faqBtn.forEach((btn, id) => {
  btn.addEventListener("click", () => {
    if (cardStatus !== null && cardStatus !== id) {
      faqCard[cardStatus].style.height = "";
      faqCard[cardStatus].style.justifyContent = "";
      faqContent[cardStatus].style.display = "none";
      faqBntIcn[cardStatus].style.transform = "rotate(180deg)";
    }

    const faqOpen = faqContent[id].style.display === "flex";
    faqContent[id].style.display = faqOpen ? "none" : "flex";
    faqCard[id].style.justifyContent = faqOpen ? "center" : "flex-start";
    faqBntIcn[id].style.transform = faqOpen ? "rotate(180deg)" : "";
    faqCard[id].style.height = faqOpen ? "" : "190px";
    cardStatus = faqOpen ? null : id;
  });
});

/* ------------------------------courses/articles-------------------------------- */
const cardsContainer = document.querySelector(".cards-container");
const card = document.querySelectorAll(".card");
const gridBtnStyle = document.querySelector(".grid-style-btn");
const listBtnStyle = document.querySelector(".list-style-btn");
const gridBtnStyleIcn = document.querySelector(".grid-style-btn path");
const listBtnStyleIcn = document.querySelector(".list-style-btn path");
const cardBody = document.querySelectorAll(".card > div");
const cardFooter = document.querySelectorAll(".card-footer");

listBtnStyle.addEventListener("click", () => {
  listBtnStyleIcn.style.fill = "var(--primary-color)";
  gridBtnStyleIcn.style.fill = "var(--black-color)";
  cardsContainer.classList.remove("grid-style");
  cardsContainer.classList.add("list-style");
  card.forEach((card) => {
    card.style.transform = "scale(0.8)";

    setTimeout(() => {
      card.style.transform = "scale(1)";
    }, 100);

    card.classList.remove("grid-style-card");
    card.classList.add("list-style-card");

    cardBody.forEach((body) => {
      body.style = "justify-content:space-around;width:100%";
    });

    cardFooter.forEach((footer) => {
      footer.style = "margin:0;width:100%;padding:0;padding-top:20px";
    });
  });
});

gridBtnStyle.addEventListener("click", () => {
  gridBtnStyleIcn.style.fill = "var(--primary-color)";
  listBtnStyleIcn.style.fill = "var(--black-color)";
  cardsContainer.classList.remove("list-style");
  cardsContainer.classList.add("grid-style");

  card.forEach((card) => {
    card.style.transform = "scale(0.8)";

    setTimeout(() => {
      card.style.transform = "scale(1)";
    }, 100);

    card.classList.remove("list-style-card");
    card.classList.add("grid-style-card");
  });
});
