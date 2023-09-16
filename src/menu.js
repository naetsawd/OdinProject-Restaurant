import { categoryLists } from "./menuItems";

export function createMenuSection() {
    const categories = [
        "Beverages",
        "Breakfast",
        "Appetizers",
        "Main Courses",
        "Desserts"
    ];

    let currentPage = "Beverages";

    const menuPageContainer = document.createElement('span');
    menuPageContainer.id = 'pageContainer';

    const menuTitle = document.createElement('div');
    menuTitle.id = 'pageTitle';
    menuTitle.textContent = 'Menu';

    const whiteLine = document.createElement('div');
    whiteLine.classList.add('whiteLine');

    const menuCategories = document.createElement('div');
    menuCategories.id = 'menuCategories';

    categories.forEach(categoryName => {
        const categoryElement = document.createElement('p');
        categoryElement.classList.add('menuItemCategory');
        categoryElement.textContent = categoryName;
        menuCategories.appendChild(categoryElement);
    });

    const menuItemsContainer = document.createElement('div');
    menuItemsContainer.id = 'menuItemsContainer';

    categoryLists(currentPage).forEach(({ name, price, descr }) => {
        const menuItem = document.createElement('div');
        const itemName = document.createElement('p');
        const itemPrice = document.createElement('p');
        const itemDescr = document.createElement('p');
    
        menuItem.classList.add('menuItem');
    
        itemName.classList.add('menuItemName');
        itemName.textContent = name;

        itemPrice.classList.add('menuItemPrice');
        itemPrice.textContent = price;

        const whiteLine = document.createElement('div');
        whiteLine.classList.add('whiteLine');
    
        itemDescr.classList.add('menuItemDescr');
        itemDescr.textContent = descr;
    
        menuItem.appendChild(itemName);
        menuItem.appendChild(itemPrice);
        menuItem.appendChild(whiteLine);
        menuItem.appendChild(itemDescr);
    
        // Append the menuItem to the menuItemsContainer
        menuItemsContainer.appendChild(menuItem);
    });

    menuPageContainer.appendChild(menuTitle);
    menuPageContainer.appendChild(whiteLine);
    menuPageContainer.appendChild(menuCategories);
    menuPageContainer.appendChild(menuItemsContainer);


    return menuPageContainer;
}