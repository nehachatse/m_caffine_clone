var form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    formData = new FormData(form)

    const userdata = {}
    for(pair of formData.entries()){
        userdata[pair[0]] = pair[1];
    }

    storeData = localStorage.getItem('userInfo');
    storeData = JSON.parse(storeData)
    console.log(storeData, userdata)

    for(key in userdata){
        console.log("key", key)
        if(storeData["email"] != userdata["email"]){
            console.log("++++")
            return wrongCreds(email=true, pass=false)
        }
        if(storeData["password"] != userdata["password"])
            return wrongCreds(email=false, pass=true);
    }
    window.location.href = "index.html"

})

function wrongCreds(email=false, pass=false){
    if(!document.querySelector('p')){
        var div = document.getElementById('loginContainer')
        var childEle = div.querySelector('h1')
        var newPara = document.createElement('p')
        if(pass)
            newPara.textContent = "Wrong Password ..."
        if(email)
            newPara.textContent = "Email does not exits, try creating new user."
        newPara.style.color = "red"
        newPara.style.textAlign = "center"
        div.insertBefore(newPara, childEle)
    }

}