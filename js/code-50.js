const myDiv = document.querySelector('.user-50');
myDiv.textContent = 'Click me';
myDiv.addEventListener('click',()=>{
    myDiv.classList='user-50-1'
    myDiv.textContent = 'Got cha'
})