console.log("hi");
const me = document.querySelector(".user-29");
me.textContent = "魏伊廷 ";
const message = document.createElement("span");
message.textContent = " : “哈囉，我是東東”";
me.appendChild(message);

me.addEventListener("click", () => {
  me.classList.toggle("clicked");
});
