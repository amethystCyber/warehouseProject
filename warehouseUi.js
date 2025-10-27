function showChatBubble(){
    document.getElementById('chat').style.display = "block";
}

function removeChatBubble(){
    document.getElementById('chat').style.display = "none";
}

function updateChat(message){
    document.getElementById('chat').innerText = message;
}

function clearChat(){
    document.getElementById('chat').innerText = "";
}
