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
const modeSwitch = document.querySelector(".mode-switch");
const modeSwitchIcon = document.querySelector(".mode-icon");

let darkMode = false;

modeSwitch.addEventListener("click", () => {
  darkMode = !darkMode;
  modeSwitchIcon.className = darkMode
    ? "fa-solid fa-sun mode-icon"
    : "fa-solid fa-moon mode-icon";
  modeSwitchIcon.style.transform = darkMode ? "rotate(180deg)" : "";
  const currentTheme = body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "" : "dark";
  body.setAttribute("data-theme", newTheme);
});

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
        <button class=nav-drop-down-btn>
        <div>
        Page
        <img src="./assets/imgs/arrow-down.svg" alt="arrow-down" />
        </div>
        </button>
        <a href="">Premium Theme</a>`;

const navDropDown = document.querySelectorAll(".nav-drop-down-btn");

navDropDown.forEach((btn) => {
  const dropDownContainer = document.createElement("div");
  btn.appendChild(dropDownContainer);
  dropDownContainer.classList.add("drop-down");
  dropDownContainer.style.transform = "scale(0)";
  dropDownContainer.innerHTML = `<a href='./contact.html' data-lang='contact'>contact</a>
  <a href='./faq.html' data-lang='faq'>faq</a>`;

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen =
      dropDownContainer.style.transform === "scaleX(1)translateY(50px)";
    toggleDropDown(dropDownContainer, !isOpen);
  });
});
const toggleSidebar = (isOpen) => {
  sideBarContainer.style.transform = isOpen
    ? "translateX(0)"
    : "translateX(100%)";
};

const toggleDropDown = (container, open) => {
  container.style.transform = open ? "scaleX(1)translateY(50px)" : "scale(0)";
};

const handleBodyClick = (e) => {
  const isClickOutside =
    !sideBarContainer.contains(e.target) && e.target !== listBtn;
  if (isClickOutside) {
    toggleSidebar(false);
  }
};

listBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleSidebar(true);
});
body.addEventListener("click", handleBodyClick);
body.addEventListener("click", () => {
  navDropDown.forEach((btn) => {
    const dropDownContainer = btn.querySelector(".drop-down");
    toggleDropDown(dropDownContainer, false); // Close all dropdowns
  });
});
window.onresize = () => {
  if (window.innerWidth > 1023) {
    toggleSidebar(false);
  }
};

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

const articles = {
  page1: [
    {
      img: "/assets/imgs/articles-card-img1.svg",
      title: "Best LearnPress WordPress Theme Collection for 2023",
      date: "2022",
      content: ` Looking for an amazing & well-functional LearnPress WordPress
                Theme?...`,
      dataLangTitle: "best_learnpress_wordPress_theme_collection_for_2023",
      dataLangContent:
        "looking_for_an_amazing_well_functional_learnpress_wordpress_theme",
    },
    {
      img: "/assets/imgs/articles-card-img2.svg",
      title: "Best LearnPress WordPress Theme Collection for 2023",
      date: "2022",
      content: ` Looking for an amazing & well-functional LearnPress WordPress
                Theme?...`,
      dataLangTitle: "best_learnpress_wordPress_theme_collection_for_2023",
      dataLangContent:
        "looking_for_an_amazing_well_functional_learnpress_wordpress_theme",
    },
    {
      img: "/assets/imgs/articles-card-img3.svg",
      title: "Best LearnPress WordPress Theme Collection for 2023",
      date: "2023",
      content: ` Looking for an amazing & well-functional LearnPress WordPress
                Theme?...`,
      dataLangTitle: "best_learnpress_wordPress_theme_collection_for_2023",
      dataLangContent:
        "looking_for_an_amazing_well_functional_learnpress_wordpress_theme",
    },
    {
      img: "/assets/imgs/articles-card-img4.svg",
      title: "Best LearnPress WordPress Theme Collection for 2023",
      date: "2023",
      content: ` Looking for an amazing & well-functional LearnPress WordPress
                Theme?...`,
      dataLangTitle: "best_learnpress_wordPress_theme_collection_for_2023",
      dataLangContent:
        "looking_for_an_amazing_well_functional_learnpress_wordpress_theme",
    },
    {
      img: "/assets/imgs/articles-card-img5.svg",
      title: "Best LearnPress WordPress Theme Collection for 2023",
      date: "2023",
      content: ` Looking for an amazing & well-functional LearnPress WordPress
                Theme?...`,
      dataLangTitle: "best_learnpress_wordPress_theme_collection_for_2023",
      dataLangContent:
        "looking_for_an_amazing_well_functional_learnpress_wordpress_theme",
    },
    {
      img: "/assets/imgs/card-img6.svg",
      title: "Best LearnPress WordPress Theme Collection for 2023",
      date: "2023",
      content: ` Looking for an amazing & well-functional LearnPress WordPress
                Theme?...`,
      dataLangTitle: "best_learnpress_wordPress_theme_collection_for_2023",
      dataLangContent:
        "looking_for_an_amazing_well_functional_learnpress_wordpress_theme",
    },
  ],
  page2: [
    {
      img: "/assets/imgs/articles-card-img2.svg",
      title: "Best LearnPress WordPress Theme Collection for 2023",
      date: "2020",
      content: ` Looking for an amazing & well-functional LearnPress WordPress
                Theme?...`,
      dataLangTitle: "best_learnpress_wordPress_theme_collection_for_2023",
      dataLangContent:
        "looking_for_an_amazing_well_functional_learnpress_wordpress_theme",
    },
    {
      img: "/assets/imgs/articles-card-img2.svg",
      title: "Best LearnPress WordPress Theme Collection for 2023",
      date: "2023",
      content: ` Looking for an amazing & well-functional LearnPress WordPress
                Theme?...`,
      dataLangTitle: "best_learnpress_wordPress_theme_collection_for_2023",
      dataLangContent:
        "looking_for_an_amazing_well_functional_learnpress_wordpress_theme",
    },
    {
      img: "/assets/imgs/articles-card-img3.svg",
      title: "Best LearnPress WordPress Theme Collection for 2023",
      date: "2055",
      content: ` Looking for an amazing & well-functional LearnPress WordPress
                Theme?...`,
      dataLangTitle: "best_learnpress_wordPress_theme_collection_for_2023",
      dataLangContent:
        "looking_for_an_amazing_well_functional_learnpress_wordpress_theme",
    },

    {
      img: "/assets/imgs/articles-card-img4.svg",
      title: "Best LearnPress WordPress Theme Collection for 2023",
      date: "2023",
      content: ` Looking for an amazing & well-functional LearnPress WordPress
                Theme?...`,
      dataLangTitle: "best_learnpress_wordPress_theme_collection_for_2023",
      dataLangContent:
        "looking_for_an_amazing_well_functional_learnpress_wordpress_theme",
    },
    {
      img: "/assets/imgs/articles-card-img5.svg",
      title: "Best LearnPress WordPress Theme Collection for 2023",
      date: "2021",
      content: ` Looking for an amazing & well-functional LearnPress WordPress
                Theme?...`,
      dataLangTitle: "best_learnpress_wordPress_theme_collection_for_2023",
      dataLangContent:
        "looking_for_an_amazing_well_functional_learnpress_wordpress_theme",
    },
    {
      img: "/assets/imgs/card-img6.svg",
      title: "Best LearnPress WordPress Theme Collection for 2023",
      date: "2023",
      content: ` Looking for an amazing & well-functional LearnPress WordPress
                Theme?...`,
      dataLangTitle: "best_learnpress_wordPress_theme_collection_for_2023",
      dataLangContent:
        "looking_for_an_amazing_well_functional_learnpress_wordpress_theme",
    },
  ],
  page3: [
    {
      img: "/assets/imgs/articles-card-img3.svg",
      title: "Best LearnPress WordPress Theme Collection for 2023",
      date: "2123",
      content: ` Looking for an amazing & well-functional LearnPress WordPress
                Theme?...`,
      dataLangTitle: "best_learnpress_wordPress_theme_collection_for_2023",
      dataLangContent:
        "looking_for_an_amazing_well_functional_learnpress_wordpress_theme",
    },
    {
      img: "/assets/imgs/articles-card-img2.svg",
      title: "Best LearnPress WordPress Theme Collection for 2023",
      date: "2013",
      content: ` Looking for an amazing & well-functional LearnPress WordPress
                Theme?...`,
      dataLangTitle: "best_learnpress_wordPress_theme_collection_for_2023",
      dataLangContent:
        "looking_for_an_amazing_well_functional_learnpress_wordpress_theme",
    },
    {
      img: "/assets/imgs/articles-card-img3.svg",
      title: "Best LearnPress WordPress Theme Collection for 2023",
      date: "2023",
      content: ` Looking for an amazing & well-functional LearnPress WordPress
                Theme?...`,
      dataLangTitle: "best_learnpress_wordPress_theme_collection_for_2023",
      dataLangContent:
        "looking_for_an_amazing_well_functional_learnpress_wordpress_theme",
    },

    {
      img: "/assets/imgs/articles-card-img4.svg",
      title: "Best LearnPress WordPress Theme Collection for 2023",
      date: "2023",
      content: ` Looking for an amazing & well-functional LearnPress WordPress
                Theme?...`,
      dataLangTitle: "best_learnpress_wordPress_theme_collection_for_2023",
      dataLangContent:
        "looking_for_an_amazing_well_functional_learnpress_wordpress_theme",
    },
    {
      img: "/assets/imgs/articles-card-img5.svg",
      title: "Best LearnPress WordPress Theme Collection for 2023",
      date: "2023",
      content: ` Looking for an amazing & well-functional LearnPress WordPress
                Theme?...`,
      dataLangTitle: "best_learnpress_wordPress_theme_collection_for_2023",
      dataLangContent:
        "looking_for_an_amazing_well_functional_learnpress_wordpress_theme",
    },
    {
      img: "/assets/imgs/card-img6.svg",
      title: "Best LearnPress WordPress Theme Collection for 2023",
      date: "2033",
      content: ` Looking for an amazing & well-functional LearnPress WordPress
                Theme?...`,
      dataLangTitle: "best_learnpress_wordPress_theme_collection_for_2023",
      dataLangContent:
        "looking_for_an_amazing_well_functional_learnpress_wordpress_theme",
    },
  ],
};
const courses = {
  page1: [
    {
      img: "/assets/imgs/featured-course-card-1.svg",
      title: "Create an LMS Website with LearnPress",
      createdBy: "Determined-Poitras",
      time: "3Weeks",
      graduated: "156 Students",
      price: "$29.0",
      dataLangTitle: "Create_an_MS_Website_with_LearnPress",
      dataLangDeterminedPoitras: "Determined_Poitras",
      dataLangBy: "by",
      dataLangPhotography: "photography",
      dataLangGraduated: "students_156",
      dataLangTime: "weeks_2",
      dataLangFree: "free",
      dataLangViewMore: "view_more",
    },
    {
      img: "/assets/imgs/featured-course-card-2.svg",
      title: "Create an LMS Website with LearnPress",
      createdBy: "Determined-Poitras",
      time: "2Weeks",
      graduated: "156 Students",
      price: "$29.0",
      dataLangTitle: "Create_an_MS_Website_with_LearnPress",
      dataLangDeterminedPoitras: "Determined_Poitras",
      dataLangBy: "by",
      dataLangPhotography: "photography",
      dataLangGraduated: "students_156",
      dataLangTime: "weeks_2",
      dataLangFree: "free",
      dataLangViewMore: "view_more",
    },
    {
      img: "/assets/imgs/featured-course-card-3.svg",
      title: "Create an LMS Website with LearnPress",
      createdBy: "Determined-Poitras",
      time: "2Weeks",
      graduated: "156 Students",
      price: "$29.0",
      dataLangTitle: "Create_an_MS_Website_with_LearnPress",
      dataLangDeterminedPoitras: "Determined_Poitras",
      dataLangBy: "by",
      dataLangPhotography: "photography",
      dataLangGraduated: "students_156",
      dataLangTime: "weeks_2",
      dataLangFree: "free",
      dataLangViewMore: "view_more",
    },
    {
      img: "/assets/imgs/card-img6.svg",
      title: "Create an LMS Website with LearnPress",
      createdBy: "Determined-Poitras",
      time: "2Weeks",
      graduated: "156 Students",
      price: "$29.0",
      dataLangTitle: "Create_an_MS_Website_with_LearnPress",
      dataLangDeterminedPoitras: "Determined_Poitras",
      dataLangBy: "by",
      dataLangPhotography: "photography",
      dataLangGraduated: "students_156",
      dataLangTime: "weeks_2",
      dataLangFree: "free",
      dataLangViewMore: "view_more",
    },
    {
      img: "/assets/imgs/featured-course-card-5.svg",
      title: "Create an LMS Website with LearnPress",
      createdBy: "Determined-Poitras",
      time: "2Weeks",
      graduated: "156 Students",
      price: "$29.0",
      dataLangTitle: "Create_an_MS_Website_with_LearnPress",
      dataLangDeterminedPoitras: "Determined_Poitras",
      dataLangBy: "by",
      dataLangPhotography: "photography",
      dataLangGraduated: "students_156",
      dataLangTime: "weeks_2",
      dataLangFree: "free",
      dataLangViewMore: "view_more",
    },
    {
      img: "/assets/imgs/featured-course-card-6.svg",
      title: "Create an LMS Website with LearnPress",
      createdBy: "Determined-Poitras",
      time: "2Weeks",
      graduated: "156 Students",
      price: "$29.0",
      dataLangTitle: "Create_an_MS_Website_with_LearnPress",
      dataLangDeterminedPoitras: "Determined_Poitras",
      dataLangBy: "by",
      dataLangPhotography: "photography",
      dataLangGraduated: "students_156",
      dataLangTime: "weeks_2",
      dataLangFree: "free",
      dataLangViewMore: "view_more",
    },
  ],
  page2: [
    {
      img: "/assets/imgs/featured-course-card-2.svg",
      title: "Create an LMS Website with LearnPress",
      createdBy: "Determined-Poitras",
      time: "21Weeks",
      graduated: "156 Students",
      price: "$29.0",
      dataLangTitle: "Create_an_MS_Website_with_LearnPress",
      dataLangDeterminedPoitras: "Determined_Poitras",
      dataLangBy: "by",
      dataLangPhotography: "photography",
      dataLangGraduated: "students_156",
      dataLangTime: "weeks_2",
      dataLangFree: "free",
      dataLangViewMore: "view_more",
    },
    {
      img: "/assets/imgs/featured-course-card-3.svg",
      title: "Create an LMS Website with LearnPress",
      createdBy: "Determined-Poitras",
      time: "2Weeks",
      graduated: "156 Students",
      price: "$29.0",
      dataLangTitle: "Create_an_MS_Website_with_LearnPress",
      dataLangDeterminedPoitras: "Determined_Poitras",
      dataLangBy: "by",
      dataLangPhotography: "photography",
      dataLangGraduated: "students_156",
      dataLangTime: "weeks_2",
      dataLangFree: "free",
      dataLangViewMore: "view_more",
    },
    {
      img: "/assets/imgs/featured-course-card-5.svg",
      title: "Create an LMS Website with LearnPress",
      createdBy: "Determined-Poitras",
      time: "2Weeks",
      graduated: "156 Students",
      price: "$29.0",
      dataLangTitle: "Create_an_MS_Website_with_LearnPress",
      dataLangDeterminedPoitras: "Determined_Poitras",
      dataLangBy: "by",
      dataLangPhotography: "photography",
      dataLangGraduated: "students_156",
      dataLangTime: "weeks_2",
      dataLangFree: "free",
      dataLangViewMore: "view_more",
    },
    {
      img: "/assets/imgs/card-img6.svg",
      title: "Create an LMS Website with LearnPress",
      createdBy: "Determined-Poitras",
      time: "2Weeks",
      graduated: "156 Students",
      price: "$29.0",
      dataLangTitle: "Create_an_MS_Website_with_LearnPress",
      dataLangDeterminedPoitras: "Determined_Poitras",
      dataLangBy: "by",
      dataLangPhotography: "photography",
      dataLangGraduated: "students_156",
      dataLangTime: "weeks_2",
      dataLangFree: "free",
      dataLangViewMore: "view_more",
    },
    {
      img: "/assets/imgs/featured-course-card-1.svg",
      title: "Create an LMS Website with LearnPress",
      createdBy: "Determined-Poitras",
      time: "2Weeks",
      graduated: "156 Students",
      price: "$29.0",
      dataLangTitle: "Create_an_MS_Website_with_LearnPress",
      dataLangDeterminedPoitras: "Determined_Poitras",
      dataLangBy: "by",
      dataLangPhotography: "photography",
      dataLangGraduated: "students_156",
      dataLangTime: "weeks_2",
      dataLangFree: "free",
      dataLangViewMore: "view_more",
    },
    {
      img: "/assets/imgs/featured-course-card-6.svg",
      title: "Create an LMS Website with LearnPress",
      createdBy: "Determined-Poitras",
      time: "2Weeks",
      graduated: "156 Students",
      price: "$29.0",
      dataLangTitle: "Create_an_MS_Website_with_LearnPress",
      dataLangDeterminedPoitras: "Determined_Poitras",
      dataLangBy: "by",
      dataLangPhotography: "photography",
      dataLangGraduated: "students_156",
      dataLangTime: "weeks_2",
      dataLangFree: "free",
      dataLangViewMore: "view_more",
    },
  ],
  page3: [
    {
      img: "/assets/imgs/featured-course-card-3.svg",
      title: "Create an LMS Website with LearnPress",
      createdBy: "Determined-Poitras",
      time: "2Weeks",
      graduated: "156 Students",
      price: "$29.0",
      dataLangTitle: "Create_an_MS_Website_with_LearnPress",
      dataLangDeterminedPoitras: "Determined_Poitras",
      dataLangBy: "by",
      dataLangPhotography: "photography",
      dataLangGraduated: "students_156",
      dataLangTime: "weeks_2",
      dataLangFree: "free",
      dataLangViewMore: "view_more",
    },
    {
      img: "/assets/imgs/featured-course-card-5.svg",
      title: "Create an LMS Website with LearnPress",
      createdBy: "Determined-Poitras",
      time: "2Weeks",
      graduated: "156 Students",
      price: "$29.0",
      dataLangTitle: "Create_an_MS_Website_with_LearnPress",
      dataLangDeterminedPoitras: "Determined_Poitras",
      dataLangBy: "by",
      dataLangPhotography: "photography",
      dataLangGraduated: "students_156",
      dataLangTime: "weeks_2",
      dataLangFree: "free",
      dataLangViewMore: "view_more",
    },
    {
      img: "/assets/imgs/featured-course-card-6.svg",
      title: "Create an LMS Website with LearnPress",
      createdBy: "Determined-Poitras",
      time: "2Weeks",
      graduated: "156 Students",
      price: "$29.0",
      dataLangTitle: "Create_an_MS_Website_with_LearnPress",
      dataLangDeterminedPoitras: "Determined_Poitras",
      dataLangBy: "by",
      dataLangPhotography: "photography",
      dataLangGraduated: "students_156",
      dataLangTime: "weeks_2",
      dataLangFree: "free",
      dataLangViewMore: "view_more",
    },
    {
      img: "/assets/imgs/card-img6.svg",
      title: "Create an LMS Website with LearnPress",
      createdBy: "Determined-Poitras",
      time: "2Weeks",
      graduated: "156 Students",
      price: "$29.0",
      dataLangTitle: "Create_an_MS_Website_with_LearnPress",
      dataLangDeterminedPoitras: "Determined_Poitras",
      dataLangBy: "by",
      dataLangPhotography: "photography",
      dataLangGraduated: "students_156",
      dataLangTime: "weeks_2",
      dataLangFree: "free",
      dataLangViewMore: "view_more",
    },
    {
      img: "/assets/imgs/featured-course-card-5.svg",
      title: "Create an LMS Website with LearnPress",
      createdBy: "Determined-Poitras",
      time: "2Weeks",
      graduated: "156 Students",
      price: "$29.0",
      dataLangTitle: "Create_an_MS_Website_with_LearnPress",
      dataLangDeterminedPoitras: "Determined_Poitras",
      dataLangBy: "by",
      dataLangPhotography: "photography",
      dataLangGraduated: "students_156",
      dataLangTime: "weeks_2",
      dataLangFree: "free",
      dataLangViewMore: "view_more",
    },
    {
      img: "/assets/imgs/featured-course-card-6.svg",
      title: "Create an LMS Website with LearnPress",
      createdBy: "Determined-Poitras",
      time: "5Weeks",
      graduated: "156 Students",
      price: "$29.0",
      dataLangTitle: "Create_an_MS_Website_with_LearnPress",
      dataLangDeterminedPoitras: "Determined_Poitras",
      dataLangBy: "by",
      dataLangPhotography: "photography",
      dataLangGraduated: "students_156",
      dataLangTime: "weeks_2",
      dataLangFree: "free",
      dataLangViewMore: "view_more",
    },
  ],
};
const searchInputCourses = document.querySelector("#search-input-course");
const searchInputBlogs = document.querySelector("#search-input-blog");

let isGridView = true;
const coursesContainer = document.querySelector(".courses-cards");
const articlesContainer = document.querySelector(".blog-cards");

if (coursesContainer || articlesContainer) {
  const renderCards = (container, data, page) => {
    const cardsList = data[page];

    if (coursesContainer) {
      searchInputCourses.addEventListener("input", (event) => {
        const searchValue = event.target.value.toLowerCase();
        const filteredCards = cardsList.filter((card) =>
          card.time.toLowerCase().includes(searchValue)
        );
        const cardsHtml = filteredCards
          .map((card) => {
            return `
            <div class="card">
              <img src="${card.img}" alt="card-img" />
              <p data-lang=${card.dataLangPhotography}>Photography</p>
              <div>
                <div>
                  <p class="created-by"> <span data-lang=${card.dataLangBy}>by</span> <span data-lang=${card.dataLangDeterminedPoitras}>${card.createdBy}</span> </p>
                  <p class="card-title" data-lang=${card.dataLangTitle}>${card.title}</p>
                </div>
                <div class="card-info">
                  <p><img src="./assets/imgs/time.svg" alt="time" /> <span data-lang=${card.dataLangTime}>${card.time}</span> </p>
                  <p><img src="./assets/imgs/hat.svg" alt="hat" /> <span data-lang=${card.dataLangGraduated}>${card.graduated}</span> </p>
                </div>
                <div class="card-footer">
                  <p><del>${card.price}</del> <span data-lang=${card.dataLangFree}>Free</span></p>
                  <a href="" data-lang=${card.dataLangViewMore}>View More</a>
                </div>
              </div>
            </div>
    `;
          })
          .join("");
        coursesContainer.innerHTML = cardsHtml;
      });
    } else {
      searchInputBlogs.addEventListener("input", (event) => {
        const searchValue = event.target.value.toLowerCase();
        const filteredCards = cardsList.filter((card) =>
          card.date.toLowerCase().includes(searchValue)
        );

        const cardsHtml = filteredCards
          .map((card) => {
            return `
            <div class="card">
              <img src="${card.img}" alt="card-img" />
              <div>
                <div>
                  <p class="card-title" data-lang=${card.dataLangTitle}>${card.title}</p>
                </div>
                <div class="card-info">
                  <p><img src="./assets/imgs/calender.svg" alt="calender" /> <span>Jan 24, ${card.date}</span> </p>
                </div>
                <div class="card-content">
                  <p data-lang=${card.dataLangContent}>${card.content}</p>
                </div>
              </div>
            </div>
    `;
          })
          .join("");
        articlesContainer.innerHTML = cardsHtml;
      });
    }

    container.innerHTML = cardsList
      .map((card) => {
        if (container.classList.contains("courses-cards")) {
          return `
            <div class="card">
              <img src="${card.img}" alt="card-img" />
              <p data-lang=${card.dataLangPhotography}>Photography</p>
              <div>
                <div>
                  <p class="created-by"> <span data-lang=${card.dataLangBy}>by</span> <span data-lang=${card.dataLangDeterminedPoitras}>${card.createdBy}</span> </p>
                  <p class="card-title" data-lang=${card.dataLangTitle}>${card.title}</p>
                </div>
                <div class="card-info">
                  <p><img src="./assets/imgs/time.svg" alt="time" /> <span data-lang=${card.dataLangTime}>${card.time}</span> </p>
                  <p><img src="./assets/imgs/hat.svg" alt="hat" /> <span data-lang=${card.dataLangGraduated}>${card.graduated}</span> </p>
                </div>
                <div class="card-footer">
                  <p><del>${card.price}</del> <span data-lang=${card.dataLangFree}>Free</span></p>
                  <a href="" data-lang=${card.dataLangViewMore}>View More</a>
                </div>
              </div>
            </div>
          `;
        } else {
          return `
            <div class="card">
              <img src="${card.img}" alt="card-img" />
              <div>
                <div>
                  <p class="card-title" data-lang=${card.dataLangTitle}>${card.title}</p>
                </div>
                <div class="card-info">
                  <p><img src="./assets/imgs/calender.svg" alt="calender" /> <span>Jan 24, ${card.date}</span> </p>
                </div>
                <div class="card-content">
                  <p data-lang=${card.dataLangContent}>${card.content}</p>
                </div>
              </div>
            </div>
          `;
        }
      })
      .join("");
  };
  const totalPages = 3;
  const pageNames = Array.from(
    { length: totalPages },
    (_, i) => `page${i + 1}`
  );

  const pagination = document.querySelectorAll(".pagination-btns");
  const paginationRight = document.querySelector(".pagination-btn-right");
  const paginationleft = document.querySelector(".pagination-btn-left");

  const handlePagination = (currentPageIndex = 0) => {
    const updateActivePageColor = (activePageIndex) => {
      pagination.forEach((page, id) => {
        page.style.color =
          id === activePageIndex ? "var(--primary-color)" : "black";
      });
    };

    updateActivePageColor(currentPageIndex);

    paginationRight.addEventListener("click", () => {
      if (currentPageIndex < totalPages - 1) {
        currentPageIndex++;
        const currentPageName = pageNames[currentPageIndex];
        if (coursesContainer) {
          renderCards(coursesContainer, courses, currentPageName);
        } else {
          renderCards(articlesContainer, articles, currentPageName);
        }
        updateActivePageColor(currentPageIndex);
        toggleStyleView(isGridView);
      }
    });

    paginationleft.addEventListener("click", () => {
      if (currentPageIndex > 0) {
        currentPageIndex--;
        const currentPageName = pageNames[currentPageIndex];
        if (coursesContainer) {
          renderCards(coursesContainer, courses, currentPageName);
        } else {
          renderCards(articlesContainer, articles, currentPageName);
        }
        updateActivePageColor(currentPageIndex);
        toggleStyleView(isGridView);
      }
    });

    pagination.forEach((page, id) => {
      page.addEventListener("click", () => {
        currentPageIndex = id;
        const currentPageName = pageNames[currentPageIndex];
        if (coursesContainer) {
          renderCards(coursesContainer, courses, currentPageName);
        } else {
          renderCards(articlesContainer, articles, currentPageName);
        }
        updateActivePageColor(currentPageIndex);
        toggleStyleView(isGridView);
      });
    });
  };

  handlePagination();

  if (coursesContainer) {
    renderCards(coursesContainer, courses, "page1");
  } else {
    renderCards(articlesContainer, articles, "page1");
  }
}

const cardsContainer = document.querySelector(".cards-container");
const gridBtnStyle = document.querySelector(".grid-style-btn");
const listBtnStyle = document.querySelector(".list-style-btn");
const gridBtnStyleIcn = document.querySelector(".grid-style-btn path");
const listBtnStyleIcn = document.querySelector(".list-style-btn path");
const cardBody = document.querySelectorAll(".card > div");
const cardFooter = document.querySelectorAll(".card-footer");

const toggleStyleView = (isGrid) => {
  const currentCards = document.querySelectorAll(".card");

  if (isGrid) {
    gridBtnStyleIcn.style.fill = "var(--primary-color)";
    listBtnStyleIcn.style.fill = "var(--text-color)";
    cardsContainer.classList.remove("list-style");
    cardsContainer.classList.add("grid-style");

    currentCards.forEach((card) => {
      card.style.transform = "scale(0.8)";

      setTimeout(() => {
        card.style.transform = "scale(1)";
      }, 100);

      card.classList.remove("list-style-card");
      card.classList.add("grid-style-card");
    });
  } else {
    listBtnStyleIcn.style.fill = "var(--primary-color)";
    gridBtnStyleIcn.style.fill = "var(--text-color)";
    cardsContainer.classList.remove("grid-style");
    cardsContainer.classList.add("list-style");

    currentCards.forEach((card) => {
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
  }
};
if (gridBtnStyle) {
  gridBtnStyle.addEventListener("click", () => {
    toggleStyleView(true);
    isGridView = true;
  });
}
if (listBtnStyle) {
  listBtnStyle.addEventListener("click", () => {
    toggleStyleView(false);
    isGridView = false;
  });
}
