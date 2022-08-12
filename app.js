// import functions and grab DOM elements
import { getHacks } from './fetch-utils.js';
import { renderHack } from './render-utils.js';

const hackListEl = document.getElementById('life-hack');

async function loadData() {
    const hacks = await getHacks();

    for (let hack of hacks) {
        const hackEl = renderHack(hack);
        hackListEl.append(hackEl);
    }
}

loadData();
