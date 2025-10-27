import { showChatBubble } from './warehouseUi.js';

let thomasIndex = 0;
let thomasDialouge = [
    "Hello! Welcome to Kobayashi Industries.",
    "Since this is your first day i'll be giving you a small tour.",
    "OH man! where are my manners my name is Thomas by the way.. whats your name?"
]

function talkToThomas(){
    showThomas();
    showChatBubble();
    updateChat(thomasDialouge[thomasIndex]);
    thomasIndex++;
    if (thomasIndex >= 3) {
        setTimeout(removeChatBubble, 3200);
        thomasIndex = 0;
    }
}

export function showThomas(){
document.getElementById('person').style.backgroundImage = "url('pictures/thomas.png')";
}