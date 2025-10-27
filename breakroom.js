//initially we hide the chat element by default then bring it up when someone talks

import { player } from './playerObject.js';
import { showThomas } from './npcThomas.js';

document.getElementById('chat').style.display = "none";


if (player.exp === 0) {
    showThomas();
}
