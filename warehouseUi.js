export function showChatBubble(){
    document.getElementById('chat').style.display = "block";
}

export function removeChatBubble(){
    document.getElementById('chat').style.display = "none";
}

export function updateChat(message){
    document.getElementById('chat').innerText = message;
}

export function clearChat(){
    document.getElementById('chat').innerText = "";
}
