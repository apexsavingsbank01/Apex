/*=========================================
  Apex Saving Bank
  Main JavaScript
=========================================*/

// =============================
// Mobile Navigation
// =============================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

// =============================
// Sticky Navbar Shadow
// =============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.08)";

    } else {

        header.style.boxShadow = "0 2px 12px rgba(0,0,0,.05)";

    }

});

// =============================
// Active Navigation Link
// =============================

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link => {

    if (link.getAttribute("href") === currentPage) {

        link.classList.add("active");

    }

});

// =============================
// Scroll Reveal Animation
// =============================

const reveals = document.querySelectorAll(
".service-card,.why-card,.stat-box,.testimonial-card,.trust-item"
);

const revealElements = () => {

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

};

reveals.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = ".8s ease";

});

window.addEventListener("scroll", revealElements);

revealElements();

// =============================
// Animated Counter
// =============================

const counters = document.querySelectorAll(".stat h2,.stat-box h2");

counters.forEach(counter => {

    const text = counter.innerText;

    const number = parseInt(text.replace(/\D/g, ""));

    if (!number) return;

    let count = 0;

    const speed = number / 120;

    const update = () => {

        count += speed;

        if (count < number) {

            counter.innerText = Math.floor(count) + text.replace(/[0-9]/g,"");

            requestAnimationFrame(update);

        } else {

            counter.innerText = text;

        }

    };

    update();

});

// =============================
// Smooth Scroll
// =============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// =============================
// FAQ Accordion
// =============================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const answer = item.querySelector("p");

    if(answer){

        answer.style.display = "none";

    }

    item.addEventListener("click",()=>{

        faqItems.forEach(other=>{

            if(other!==item){

                const p = other.querySelector("p");

                if(p) p.style.display="none";

            }

        });

        if(answer){

            answer.style.display =
            answer.style.display==="block"
            ? "none"
            : "block";
        }

    });

});

// =============================
// Contact Form
// =============================

const form = document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! Your message has been received.");

form.reset();

});

}

// =============================
// Scroll To Top Button
// =============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "25px";
topBtn.style.right = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.cursor = "pointer";
topBtn.style.fontSize = "20px";
topBtn.style.background = "#1e63ff";
topBtn.style.color = "#fff";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 10px 25px rgba(0,0,0,.2)";
topBtn.style.zIndex = "999";

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// =============================
// Welcome Message
// =============================

window.addEventListener("load",()=>{

console.log("Welcome to Apex Saving Bank");

});

// =============================
// Disable Right Click (Optional)
// =============================

// Uncomment if you really want this.
// document.addEventListener("contextmenu",e=>e.preventDefault());