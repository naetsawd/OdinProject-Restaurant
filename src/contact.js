export function createContactSection() {

    const homeContainer = document.createElement('span');
    homeContainer.id = 'home';

    const homeTitle = document.createElement('div');
    homeTitle.id = 'homeTitle';
    homeTitle.textContent = 'Contact';

    const whiteLine = document.createElement('div');
    whiteLine.classList.add('whiteLine');

    homeContainer.appendChild(homeTitle);
    homeContainer.appendChild(whiteLine);

    return homeContainer;
}