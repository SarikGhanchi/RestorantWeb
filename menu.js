document.addEventListener("DOMContentLoaded", function () {
    const menuItems = [
        {
            name: "Truffle Mushroom Risotto",
            description: "Creamy risotto infused with truffle oil and wild mushrooms, topped with parmesan.",
            price: "$34.99",
            image: "images/mushroom_risotto.jpg"
        },
        {
            name: "Stuffed Bell Peppers",
            description: "Oven-roasted bell peppers stuffed with quinoa, vegetables, and herbs.",
            price: "$24.99",
            image: "images/stuffed_peppers.jpg"
        },
        {
            name: "Saffron-infused Paneer Tikka",
            description: "Cottage cheese marinated in saffron yogurt and grilled to perfection.",
            price: "$29.99",
            image: "images/paneer_tikka.jpg"
        },
        {
            name: "Exotic Veg Sushi Platter",
            description: "A selection of avocado, cucumber, and mango sushi rolls with soy glaze.",
            price: "$39.99",
            image: "images/veg_sushi.jpg"
        },
        {
            name: "Belgian Chocolate Lava Cake",
            description: "Rich chocolate cake with a molten center, served with vanilla bean ice cream.",
            price: "$19.99",
            image: "images/lava_cake.jpg"
        }
    ];

    const menuContainer = document.getElementById("menu-items");
    
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row", "g-4");

    menuItems.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("col-md-3", "menu-item", "text-center", "p-3");

        menuItem.innerHTML = `
            <div class="card shadow-lg border-0 rounded-3">
                <img src="${item.image}" alt="${item.name}" class="card-img-top img-fluid rounded-top">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.description}</p>
                    <div class="price text-warning fw-bold">${item.price}</div>
                </div>
            </div>
        `;

        rowDiv.appendChild(menuItem);
    });
    
    menuContainer.appendChild(rowDiv);
});
