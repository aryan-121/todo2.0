const submit = document.getElementById("submit");

submit.addEventListener("click", ()=>{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username === "aryan" && password === "aryan"){
        window.location.href = "task.html";
    }
})