// Simulating menu items data
const menuItems = [
    { id: 1, name: 'Paneer Butter Masala', price: 200 },
    { id: 2, name: 'AALOO PARATHA', price: 120},
    { id: 3, name: 'Dal Tadka', price: 150 },
    {Id: 4,name:'RAJMA,4 ROTI', price: 180}
];


const orders = [
    { id: 1, itemName: 'Paneer Butter Masala', quantity: 2, total: 400 },
    { id: 3, itemName: 'DAL Tadka', quantity: 1, total: 120 }
];

document.addEventListener('DOMContentLoaded', function() {
    const menuItemsContainer = document.getElementById('menuItems');
    const orderListContainer = document.getElementById('orderList');

    
    function displayMenuItems() {
        menuItems.forEach(item => {
            const menuItemElement = document.createElement('div');
            menuItemElement.classList.add('menu-item');
            menuItemElement.innerHTML = `
                <h3>${item.name}</h3>
                <p>Price: ${item.price} INR</p>
                <button onclick="addToCart(${item.id})">Add to Cart</button>
            `;
            menuItemsContainer.appendChild(menuItemElement);
        });
    }

    
    function displayOrders() {
        orderListContainer.innerHTML = '';
        orders.forEach(order => {
            const orderItemElement = document.createElement('li');
            orderItemElement.innerHTML = `
                <p>${order.itemName} x ${order.quantity} - Total: ${order.total} INR</p>
            `;
            orderListContainer.appendChild(orderItemElement);
        });
    }

    
    window.addToCart = function(itemId) {
        const selectedItem = menuItems.find(item => item.id === itemId);
        const newOrder = {
            id: orders.length + 1,
            itemName: selectedItem.name,
            quantity: 1,
            total: selectedItem.price
        };
        orders.push(newOrder);
        displayOrders();
    };

    
    displayMenuItems();
    displayOrders();
});
