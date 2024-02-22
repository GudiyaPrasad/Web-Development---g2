let mainColrs = localStorage.getItem("colors_option");
if (mainColrs !== null) {
  document.documentElement.style.setProperty("--main--color", mainColrs);
  document.querySelectorAll(".colors-list li").forEach((el) => {
    el.classList.remove("active");
    if (el.dataset.color === mainColrs) {
      el.classList.add("active");
    }
  });
}
const colerssLi = document.querySelectorAll(".colors-list li");
colerssLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main--color",
      e.target.dataset.color
    );
    localStorage.setItem("colors_option", e.target.dataset.color);
    handelActive(e);
  });
});

document.querySelector(".toggle-settings i ").onclick = function () {
  this.classList.toggle("fa-spin");
  document.querySelector(".setting-box").classList.toggle("active");
};
let backgrondOption = true;
let backgrondInterval;
let backgrondLocalItem = localStorage.getItem("backgrond_option");
if (backgrondLocalItem !== null) {
  if (backgrondLocalItem === "true") {
    backgrondOption = true;
  } else {
    backgrondOption = false;
  }
  document.querySelectorAll(".random-background span").forEach((el) => {
    el.classList.remove("active");
  });
  if (backgrondLocalItem === "true") {
    document.querySelector(".random-background .yes").classList.add("active");
  } else {
    document.querySelector(".random-background .no").classList.add("active");
  }
}
const randobBgckLi = document.querySelectorAll(".random-background span");
randobBgckLi.forEach((span) => {
  span.addEventListener("click", (e) => {
    handelActive(e);
    if (e.target.dataset.background === "yes") {
      backgrondOption = true;
      randomize();
      localStorage.setItem("backgrond_option", true);
    } else {
      backgrondOption = false;

      clearInterval(backgrondInterval);
      localStorage.setItem("backgrond_option", false);
    }
  });
});
let landingPage = document.querySelector(".landing-page");
let imges = ["R(1).jpg", "R(2).jpg", "R(3).jpg", "R(4).jpg", "R1.jpg"];
function randomize() {
  if (backgrondOption === true) {
    backgrondInterval = setInterval(() => {
      let rendomNumber = Math.floor(Math.random() * imges.length);
      landingPage.style.backgroundImage = `url("image/${imges[rendomNumber]} ")`;
    }, 5000);
  }
}
randomize();
let ourSkills = document.querySelector(".skills ")
window.onscroll = function () {
  let skillsOffsetTop = ourSkills.offsetTop;
  let skillOuteHeight = ourSkills.offsetHeight;
  let windowHeight = this.innerHeight;
  let windowScrollTop = this.pageYOffset;
  if (windowScrollTop > (skillsOffsetTop + skillOuteHeight - windowHeight)) {
    let allSkills = document.querySelectorAll(".skill-box .skill-progres span ");
    allSkills.forEach(skill => {
      skill.style.width = skill.dataset.progres
    })
  }
}
let ourGallery = document.querySelectorAll(".gallery img ");
ourGallery.forEach(img => {
  img.addEventListener('click', (e) => {
    let overlay = document.createElement("div");
    overlay.className = 'popup-overlay'
    document.body.appendChild(overlay);
    let popupbox = document.createElement("div");
    popupbox.className = 'popup-box';
    if (img.alt !== null) {
      let imgHeading = document.createElement("h3");
      let imgText = document.createTextNode(img.alt);
      imgHeading.appendChild(imgText)
      popupbox.appendChild(imgHeading)
    }
    let popupImage = document.createElement("img");
    popupImage.src = img.src;
    popupbox.appendChild(popupImage);
    document.body.appendChild(popupbox);
    let closeButton = document.createElement("span");
    let closeButtonText = document.createTextNode("X");
    closeButton.appendChild(closeButtonText);
    closeButton.className = 'close-button';
    popupbox.appendChild(closeButton);
  })
})
document.addEventListener("click", function (e) {
  if (e.target.className == 'close-button') {
    document.querySelector(".popup-box").remove();
    document.querySelector(".popup-overlay").remove();
  }
})
const allBullts = document.querySelectorAll(".nav-bullets .bullet");
const allLIinks = document.querySelectorAll(".links a");
function scrolToSomsher(elements) {
  elements.forEach(ele => {
    ele.addEventListener("click", function (e) {
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: 'smooth'
      })
    })
  })
};
scrolToSomsher(allBullts)
scrolToSomsher(allLIinks)
function handelActive(ev) {
  ev.target.parentElement.querySelectorAll(".active").forEach(function (el) {
    el.classList.remove("active");
  });
  ev.target.classList.add("active");
}
let bulletsspan = document.querySelectorAll(".bultets-option span");
let bulletscontainer = document.querySelector(".nav-bullets");
let bulletLocal = localStorage.getItem("bullets_option");
if (bulletLocal !== null) {
  bulletsspan.forEach(e => {
    e.classList.remove("active");
  })
  if (bulletLocal === 'block') {
    bulletscontainer.style.display = 'block';
    document.querySelector(".bultets-option  .yes").classList.add("active")
  }
  else {
    bulletscontainer.style.display = 'none';
    document.querySelector(".bultets-option  .no").classList.add("active")
  }
}
bulletsspan.forEach(span => {
  span.addEventListener("click", (e) => {
    if (e.target.dataset.display == 'show') {
      bulletscontainer.style.display = 'block';
      localStorage.setItem("bullets_option", 'block')
    } else {
      bulletscontainer.style.display = 'none';
      localStorage.setItem("bullets_option", 'none');
    }
    handelActive(e)
  })
})
document.querySelector(".reset-options").onclick = function () {
  localStorage.clear();
  window.location.reload();
}
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");
toggleBtn.onclick = function (e) {
  e.stopPropagation();
  this.classList.toggle("menu-active");
  tLinks.classList.toggle("open");
};
document.addEventListener("click", (e) => {
  if (e.target !== toggleBtn && e.target !== tLinks) {
    if (tLinks.classList.contains("open")) {
      toggleBtn.classList.toggle("menu-active");
      tLinks.classList.toggle("open");

    }
  }
});
tLinks.onclick = function (e) {
  e.stopPropagation();
}














































