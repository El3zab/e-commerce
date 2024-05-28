// change hover from nav links a
let navLinks = document.querySelectorAll(".navv-links");
navLinks.forEach((item) => {
    item.addEventListener("click", (eo) => {
        let oldActive = document.getElementsByClassName("active")[0];
        console.log(oldActive);
        oldActive.classList.remove("active");
        eo.target.classList.add("active");
    });
});


// eye and heart on in product section
let cards = document.querySelectorAll(".cardss")[0];
let card = document.querySelectorAll(".cardss")[0].querySelectorAll(".card");
card.forEach(item => {
    item.addEventListener("click", eo => {
        if (eo.target.classList.contains("heartt")) {
            cards.prepend(eo.target.parentElement.parentElement);
            eo.target.classList.add("fa-solid");
            eo.target.classList.add("soliddd");
            eo.target.classList.remove("heartt");
            eo.target.style.color = "red"
            eo.target.nextElementSibling.parentElement.parentElement.classList.remove("opaacity")
            eo.target.nextElementSibling.classList.remove("fa-eye");
            eo.target.nextElementSibling.classList.add("fa-eye-slash");
            eo.target.nextElementSibling.classList.add("eyeee");
        }  else if (eo.target.classList.contains("soliddd")) {
                cards.append(eo.target.parentElement.parentElement);
                eo.target.classList.add("heartt");
                eo.target.classList.remove("fa-solid");
                eo.target.style.color = "#212529"
            }
            
            if (eo.target.classList.contains("eyeee")) {
                eo.target.parentElement.parentElement.classList.add("opaacity")
                eo.target.classList.add("fa-eye");
                eo.target.classList.remove("fa-eye-slash");
                eo.target.classList.remove("eyeee");
                eo.target.previousElementSibling.classList.add("heartt");
                eo.target.previousElementSibling.classList.remove("fa-solid");
                eo.target.previousElementSibling.style.color = "#212529";
        } else if (eo.target.classList.contains("fa-eye")) {
            eo.target.parentElement.parentElement.classList.remove("opaacity")
            eo.target.classList.remove("fa-eye");
            eo.target.classList.add("fa-eye-slash");
            eo.target.classList.add("eyeee");
        }
    })
})


// Scroll arrow btn right, left in category section
let category = document.getElementsByClassName("category")[0];
category.addEventListener("click", function () {
    let cards = document.querySelectorAll(".cardss")[1];
    let scrollLength = cards.scrollWidth - cards.clientWidth;
    let leftButton = document.querySelectorAll(".left")[1];
    let rightButton = document.querySelectorAll(".right")[1];

    function checkScroll() {
        let currentScroll = cards.scrollLeft;
        if (currentScroll === 0) {
            leftButton.setAttribute("disabled", "");
            rightButton.removeAttribute("disabled");
        } else if (currentScroll === scrollLength) {
            rightButton.setAttribute("disabled", "");
            leftButton.removeAttribute("disabled");
        } else {
            leftButton.removeAttribute("disabled");
            rightButton.removeAttribute("disabled");
        }
    }

    cards.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    checkScroll();

    function leftScroll() {
        cards.scrollBy({
            left: -200,
            behavior: "smooth",
        });
    }
    function rightScroll() {
        cards.scrollBy({
            left: 200,
            behavior: "smooth",
        });
    }

    leftButton.addEventListener("click", leftScroll);
    rightButton.addEventListener("click", rightScroll);
});


// eye and heart on in This Month section
let cardss = document.querySelectorAll(".cardss")[2];
let cardd = document.querySelectorAll(".cardss")[2].querySelectorAll(".card");
cardd.forEach(item => {
    item.addEventListener("click", eo => {
        if (eo.target.classList.contains("heartt")) {
            cardss.prepend(eo.target.parentElement.parentElement);
            eo.target.classList.add("fa-solid");
            eo.target.classList.add("soliddd");
            eo.target.classList.remove("heartt");
            eo.target.style.color = "red"
            eo.target.nextElementSibling.parentElement.parentElement.classList.remove("opaacity")
            eo.target.nextElementSibling.classList.remove("fa-eye");
            eo.target.nextElementSibling.classList.add("fa-eye-slash");
            eo.target.nextElementSibling.classList.add("eyeee");
        }  else if (eo.target.classList.contains("soliddd")) {
                cardss.append(eo.target.parentElement.parentElement);
                eo.target.classList.add("heartt");
                eo.target.classList.remove("fa-solid");
                eo.target.style.color = "#212529";
            }
            
            if (eo.target.classList.contains("eyeee")) {
                eo.target.parentElement.parentElement.classList.add("opaacity")
                eo.target.classList.add("fa-eye");
                eo.target.classList.remove("fa-eye-slash");
                eo.target.classList.remove("eyeee");
                eo.target.previousElementSibling.classList.add("heartt");
                eo.target.previousElementSibling.classList.remove("fa-solid");
                eo.target.previousElementSibling.style.color = "#212529";
        } else if (eo.target.classList.contains("fa-eye")) {
            eo.target.parentElement.parentElement.classList.remove("opaacity")
            eo.target.classList.remove("fa-eye");
            eo.target.classList.add("fa-eye-slash");
            eo.target.classList.add("eyeee");
        }
    })
})


// eye and heart on in This OurProducts section
let cardsss = document.querySelectorAll(".cardss")[3];
let carddd = document.querySelectorAll(".cardss")[3].querySelectorAll(".card");
carddd.forEach(item => {
    item.addEventListener("click", eo => {
        if (eo.target.classList.contains("heartt")) {
            cardsss.prepend(eo.target.parentElement.parentElement);
            eo.target.classList.add("fa-solid");
            eo.target.classList.add("soliddd");
            eo.target.classList.remove("heartt");
            eo.target.style.color = "red"
            eo.target.nextElementSibling.parentElement.parentElement.classList.remove("opaacity")
            eo.target.nextElementSibling.classList.remove("fa-eye");
            eo.target.nextElementSibling.classList.add("fa-eye-slash");
            eo.target.nextElementSibling.classList.add("eyeee");
        }  else if (eo.target.classList.contains("soliddd")) {
                cardss.append(eo.target.parentElement.parentElement);
                eo.target.classList.add("heartt");
                eo.target.classList.remove("fa-solid");
                eo.target.style.color = "#212529";
            }
            
            if (eo.target.classList.contains("eyeee")) {
                eo.target.parentElement.parentElement.classList.add("opaacity")
                eo.target.classList.add("fa-eye");
                eo.target.classList.remove("fa-eye-slash");
                eo.target.classList.remove("eyeee");
                eo.target.previousElementSibling.classList.add("heartt");
                eo.target.previousElementSibling.classList.remove("fa-solid");
                eo.target.previousElementSibling.style.color = "#212529";
        } else if (eo.target.classList.contains("fa-eye")) {
            eo.target.parentElement.parentElement.classList.remove("opaacity")
            eo.target.classList.remove("fa-eye");
            eo.target.classList.add("fa-eye-slash");
            eo.target.classList.add("eyeee");
        }
    })
})


// Scroll arrow btn right, left in OurProducts section
let OurProducts = document.getElementsByClassName("OurProducts")[0];
OurProducts.addEventListener("click", function () {
    let cards = document.querySelectorAll(".cardss")[3];
    let scrollLength = cards.scrollWidth - cards.clientWidth;
    let leftButton = document.querySelectorAll(".left")[2];
    let rightButton = document.querySelectorAll(".right")[2];

    function checkScroll() {
        let currentScroll = cards.scrollLeft;
        if (currentScroll === 0) {
            leftButton.setAttribute("disabled", "");
            rightButton.removeAttribute("disabled");
        } else if (currentScroll === scrollLength) {
            rightButton.setAttribute("disabled", "");
            leftButton.removeAttribute("disabled");
        } else {
            leftButton.removeAttribute("disabled");
            rightButton.removeAttribute("disabled");
        }
    }

    cards.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    checkScroll();

    function leftScroll() {
        cards.scrollBy({
            left: -200,
            behavior: "smooth",
        });
    }
    function rightScroll() {
        cards.scrollBy({
            left: 200,
            behavior: "smooth",
        });
    }

    leftButton.addEventListener("click", leftScroll);
    rightButton.addEventListener("click", rightScroll);
});


// Counddown timer in Enhance section
let countDownDate = new Date("Jan 1, 2027 00:00:00").getTime();
let days = document.getElementsByClassName("days")[0].querySelector("span");
let hours = document.getElementsByClassName("hours")[0].querySelector("span");
let minutes = document.getElementsByClassName("minutes")[0].querySelector("span");
let seconds = document.getElementsByClassName("seconds")[0].querySelector("span");
let interval = setInterval(() => {
    let now = new Date().getTime();
    let duration = countDownDate - now;
    
    if (duration < 0) {
        clearInterval(interval);
        updateDuration(0);
        return;
    }
updateDuration(duration);
}, 1000);

function updateDuration(duration)  {
  let dayss = Math.floor(duration / (1000 * 60 * 60 * 24));
  let hourss = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutess = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
  let secondss = Math.floor((duration % (1000 * 60)) / 1000);

    days.innerHTML = dayss;
    hours.innerHTML = hourss;
    minutes.innerHTML = minutess;
    seconds.innerHTML = secondss;
}

// Up to nav Arrow in features section
let arrowUpp = document.getElementsByClassName("arrowww-up")[0];
function topScroll() {
    window.scrollTo(0, 0)
}
arrowUpp.addEventListener("click", topScroll)
