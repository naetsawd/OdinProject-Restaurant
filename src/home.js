export function createHomeSection() {

    const homeContainer = document.createElement('span');
    homeContainer.id = 'home';

    const homeTitle = document.createElement('div');
    homeTitle.id = 'homeTitle';
    homeTitle.textContent = 'Level Up Your Nostalgia!';

    const whiteLine = document.createElement('div');
    whiteLine.classList.add('whiteLine');

    const homeDesc = document.createElement('div');
    homeDesc.id = 'homeDesc';
    homeDesc.textContent = 'Pixel Bites is a nostalgic dining destination that ' +
        'transports you back to the golden age of video games. With ' +
        'pixelated decor, classic arcade games, and a menu inspired ' +
        'by iconic gaming characters, this diner is a haven for gamers ' +
        'and retro enthusiasts alike.';

    homeContainer.appendChild(homeTitle);
    homeContainer.appendChild(whiteLine);
    homeContainer.appendChild(homeDesc);

    return homeContainer;
}