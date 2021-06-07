let u22 = document.getElementsByClassName('user-22')[0];

u22.textContent = '新店新垣潔醫 老師點我！';

let img = document.createElement('img');
img.className = 'img-22';
img.setAttribute('src','https://images.chinatimes.com/newsphoto/2021-05-19/656/20210519006417.jpg')

u22.appendChild(img);

u22.addEventListener('click',function(){
    img.style.display = 'block';
})

