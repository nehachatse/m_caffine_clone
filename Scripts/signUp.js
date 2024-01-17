var form = document.querySelector('form');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    var formData = new FormData(form);

    const userData = {}
    for(pair of formData.entries()) {
        userData[pair[0]] = pair[1]
    }
    console.log("EVENT =", userData)
    localStorage.setItem('userInfo', JSON.stringify(userData))
    window.location.href = 'login.html';
})
