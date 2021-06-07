let user_17 = document.querySelector(".user-17");
//change name
user_17.textContent="Lucas Lin";

// add timer
let timer = setInterval(()=>{
  user_17.textContent = "Lucas Lin, Now is " + new Date().toLocaleTimeString();
},1000)


// click event
user_17.addEventListener("click",()=>{
  window.location.replace("www.google.com");
});
