var tbody = document.querySelector("#ChatContent");
var sendButton = document.querySelector(".send");
var chatInput = document.querySelector("#chatInput");
var button = document.querySelector(".onlineChat");
var chatDiv = document.querySelector(".chat");
var inputChat = document.querySelector(".inputChat");
var theader = document.querySelector(".col");

var trArray = []
// CREAT CHAT
button.addEventListener("click", function () {
    chatDiv.style.opacity = "1";
    inputChat.style.opacity = "1";
})
// TALK WITH BUTTON
sendButton.addEventListener("click", function () {
    if (chatInput.value[0] >= 'a' && chatInput.value[0] <= 'z') {
        receiver();
    } else if (chatInput.value[0] >= 'A' && chatInput.value[0] <= 'Z') {
        callCenter();
    }
    scroll();
});

// TALK WITH ENTER BUTTON
chatInput.addEventListener("keydown", function (e) {
    if (e.which == 13) {
        if (chatInput.value[0] >= 'a' && chatInput.value[0] <= 'z') {
            receiver();
        } else if (chatInput.value[0] >= 'A' && chatInput.value[0] <= 'Z') {
            callCenter();
        }
        chatInput.value = "";
        deleteTr();
        scroll();
    }
})

// RECEIVER FUNCTION 

function receiver() {
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var text = document.createElement("p");
    var img = document.createElement("img");
    img.setAttribute("src", "img/receiver.jpg");
    td.classList.add("receiver");
    text.classList.add("chatR");
    text.innerText = chatInput.value;
    td.appendChild(img);
    td.appendChild(text);
    tr.appendChild(td);
    tbody.appendChild(tr);
    tr.scrollIntoView();
    tr.style.cursor = "pointer";    
    trArray.push(tr);
}

// CALL CENTER FUNCTION

function callCenter() {
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var text = document.createElement("p");
    var img = document.createElement("img");
    img.setAttribute("src", "img/service.jpg");
    td.classList.add("callCenter");
    text.classList.add("chatC");
    text.innerText = chatInput.value;
    td.appendChild(img);
    td.appendChild(text);
    tr.appendChild(td);
    tbody.appendChild(tr);
    tr.scrollIntoView();
    tr.style.cursor = "pointer";
    trArray.push(tr);
}

// FOR DELETING MESSAGE

function deleteTr() {
    for (var i = trArray.length-1; i < trArray.length; i++) {
        
        trArray[i].addEventListener("click", function (e) {
            var deleteTr = e.target;
            if(deleteTr.classList.contains("active")){
                deleteTr.classList.remove("active");
                deleteIcon();
            }else{
                deleteTr.classList.add("active");
                Icon();
            }
         
        })
    }
}

// creat delete trush icon
var icon = document.querySelector(".trush");

function Icon(){
    icon.style.opacity = "1";
    icon.addEventListener("click", function(){
        var element = document.querySelector(".active");
        element.parentElement.removeChild(element);
    })
    
}
// Disable delete icon
function deleteIcon(){
    icon.style.opacity = "0";
}



