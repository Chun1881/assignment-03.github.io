"use strict";

const thongtin = document.querySelector(".thongtin");
const emailInput = document.querySelector(".email-input");
const canhBao = document.querySelector(".canhbao");

const emailValue = document.getElementById("email").textContent;

const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const checkEmail = emailValue.match(regex);

document.querySelector(".btn-email").addEventListener("click", function () {
  // thongtin.classList.remove("hidden");
  // emailInput.classList.add("hidden");
  if (!checkEmail) {
    thongtin.classList.remove("hidden");
    emailInput.classList.add("hidden");
  } else {
    canhBao.textContent = "Vui lòng nhập đúng email";
  }
});

const viewMore = document.querySelectorAll(".view-more");
const jobBox = document.querySelectorAll(".job-box");
const sectionContent = document.querySelectorAll(".section-content");
console.log(viewMore, jobBox, sectionContent);

for (let i = 0; i < jobBox.length; i++) {
  jobBox[i].addEventListener("mouseover", function () {
    viewMore[i].classList.remove("hidden");
  });
  jobBox[i].addEventListener("mouseout", function () {
    viewMore[i].classList.toggle("hidden");
  });
  viewMore[i].addEventListener("click", function () {
    sectionContent[i].classList.toggle("hidden");
    if (viewMore[i].textContent == "▼ VIEW MORE") {
      viewMore[i].textContent = "△ VIEW LESS";
      viewMore[i].classList.replace("btn-warning", "btn-outline-warning");
    } else {
      viewMore[i].textContent = "▼ VIEW MORE";
      viewMore[i].classList.replace("btn-outline-warning", "btn-warning");
    }
  });
}
