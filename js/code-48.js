const user = document.querySelector(".user-48")
const website = document.createElement('a')
website.textContent = '歡迎來到Skysea Travel'
website.id = 'skysea'
website.href = 'https://skyseatravel.site/'
user.innerHTML = ''
user.append(website)