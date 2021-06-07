let user2 = document.querySelector(".user-2");
user2.textContent = "歐嗨唷"

user2.addEventListener("mouseover", ()=> {
    user2.style.opacity = 0.5;
});

user2.addEventListener("mouseout", ()=> {
    user2.style.opacity = 1;
});