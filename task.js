const dateTime = document.getElementById("dateTime");
const container = document.getElementById("container");
const takeInput = document.getElementById("takeInput");
const add = document.getElementById("add");
const list = document.getElementById("list");
const inputBox = document.getElementById("inputBox");
const logout = document.getElementById("logout");
var counter = 0;

setInterval(()=>{
    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var datetime = date+' '+time;
    dateTime.innerHTML = datetime;
},1000);

logout.addEventListener('click', ()=>{
    window.location.href = 'index.html';
})

add.addEventListener("click", ()=>{
    container.style.opacity="0.2";
    takeInput.style.display="block";
})


inputBox.addEventListener("keypress", (e)=>{
    if(e.key === 'Enter'){
        var task = inputBox.value;
        inputBox.value="";
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(task));
        list.appendChild(li);
        takeInput.style.display='none';
        container.style.opacity="1";
    }
});

document.addEventListener('click', function(event) {
    counter++;
    var isClickInsideElement = inputBox.contains(event.target);
    if (!isClickInsideElement && counter > 1) {
        inputBox.value="";
        takeInput.style.display='none';
        container.style.opacity="1";
        counter = 0;
    }
});

