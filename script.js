const products = [
    {
        id: 1,
        src: `shoes.png`,
        name: "air force 1",
        price: 100,
    },
    {
        id: 2,
        src: `shoes (1).png`,
        name: "air force 2",
        price: 100,
    },
    {
        id: 3,
        src: `shoes (2).png`,
        name: "air force 3",
        price: 100,
    },
    {
        id: 4,
        src: `shoes (3).png`,
        name: "air force 1",
        price: 100,
    }, {
        id: 5,
        src: `shoes (4).png`,
        name: "air force 1",
        price: 100,
    }, {
        id: 6,
        src: `shoes (5).png`,
        name: "air force 2",
        price: 100,
    }, {
        id: 7,
        src: `shoes (6).png`,
        name: "air force 2",
        price: 100,
    }, {
        id: 8,
        src: `shoes (7).png`,
        name: "air force 3",
        price: 100,
    }, {
        id: 9,
        src: `shoes (8).png`,
        name: "air force 3",
        price: 100,
    }, {
        id: 10,
        src: `shoes (9).png`,
        name: "qc cloudtilt",
        price: 100,
    }, {
        id: 11,
        src: `shoes (10).png`,
        name: "qc cloudtilt",
        price: 100,
    }, {
        id: 12,
        src: `shoes (11).png`,
        name: "qc cloudtilt",
        price: 100,
    }, {
        id: 13,
        src: `shoes (12).png`,
        name: "qc cloudtilt",
        price: 100,
    }, {
        id: 14,
        src: `shoes (13).png`,
        name: "qc cloudtilt",
        price: 100,
    }, {
        id: 15,
        src: `shoes (14).png`,
        name: "qc cloudtilt",
        price: 100,
    }, {
        id: 16,
        src: `shoes (15).png`,
        name: "qc cloudtilt",
        price: 100,
    }, {
        id: 17,
        src: `shoes (16).png`,
        name: "adidas samba",
        price: 100,
    }, {
        id: 18,
        src: `shoes (17).png`,
        name: "adidas samba",
        price: 100,
    }, {
        id: 19,
        src: `shoes (18).png`,
        name: "adidas samba",
        price: 100,
    }, {
        id: 20,
        src: `shoes (19).png`,
        name: "adidas samba",
        price: 100,
    }, {
        id: 21,
        src: `shoes (20).png`,
        name: "adidas samba",
        price: 100,
    }, {
        id: 22,
        src: `shoes (21).png`,
        name: "adidas samba",
        price: 100,
    }, {
        id: 23,
        src: `shoes (22).png`,
        name: "adidas samba",
        price: 100,
    }, {
        id: 24,
        src: `shoes (23).png`,
        name: "air jordan retro 4",
        price: 100,
    }, {
        id: 25,
        src: `shoes (24).png`,
        name: "air jordan retro 4",
        price: 100,
    }, {
        id: 26,
        src: `shoes (25).png`,
        name: "air jordan retro 4",
        price: 100,
    }
];

const searchInput = document.querySelector(".searchInput");
const contentDiv = document.querySelector(".content");
const cartIcon = document.querySelector("#cartIcon");
const cartCount = document.querySelector(".cartCount");

const cartItemDiv = document.querySelector(".cartItems");
const cartTotal = document.querySelector("#cartTotal");
const clearCartBtn = document.querySelector(".clearBtn");

const checkOutBtn = document.querySelector(".checkoutBtn");
checkOutBtn.addEventListener("click", ()=> {
    checkOutBtn.style.backgroundColor = `rgba(87, 251, 10, 1)`;
    checkOutBtn.style.color = "black";
    checkOutBtn.textContent = "Checked Out ✅";
});

let cart = [];

let quantity = 0;
let totalPrice = 0;
cartCount.textContent = quantity;

clearCartBtn.addEventListener("click", () => {
    cart = [];
    cartItemDiv.innerHTML = "";
    quantity = 0;
    cartCount.textContent = quantity;
    totalPrice = 0;
    cartTotal.textContent = totalPrice;
});

// Add to cart button function

function addToCart(product) {
    cart.push(product);
    quantity++;
    let productName = product.name.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    totalPrice += product.price;
    let div = document.createElement("div");
    cartCount.textContent = quantity;
    let h2 = document.createElement("h2");
    h2.textContent = productName;
    div.append(h2);
    let p = document.createElement("p");
    cartTotal.textContent = totalPrice;
    p.textContent = `$${product.price}`;
    div.append(p);
    cartItemDiv.append(div);
};


function renderProducts() {
    products.forEach(product => {
        let productName = product.name.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
        let div = document.createElement("div");
        div.classList.add("product");
        let img = document.createElement("img");
        img.src = product.src;
        img.classList.add("image");
        div.append(img);
        let p = document.createElement("p");
        p.classList.add("product-name");
        p.textContent = productName;
        div.append(p);
        let p2 = document.createElement("p");
        p2.classList.add("product-price");
        p2.textContent = `$${product.price}`;
        div.append(p2);
        let button = document.createElement("button");
        button.addEventListener("click", () => addToCart(product));
        button.classList.add("addToCart");
        button.textContent = "Add To Cart";
        div.append(button);
        contentDiv.append(div);
    });
};

renderProducts();

// Search Functionality

searchInput.addEventListener("input", () => {
    contentDiv.innerHTML = "";
    if (searchInput.value === "") {
        renderProducts();
    };
    if (searchInput.value !== "") {
        const query = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product => {
            return product.name.toLowerCase().includes(query);
        });
        filteredProducts.forEach(product => {
            let productName = product.name.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
            let div = document.createElement("div");
            div.classList.add("product");
            let img = document.createElement("img");
            img.src = product.src;
            img.classList.add("image");
            div.append(img);
            let p = document.createElement("p");
            p.classList.add("product-name");
            p.textContent = productName;
            div.append(p);
            let p2 = document.createElement("p");
            p2.classList.add("product-price");
            p2.textContent = `$${product.price}`;
            div.append(p2);
            let button = document.createElement("button");
            button.classList.add("addToCart");
            button.addEventListener("click", () => addToCart(product));
            button.textContent = "Add To Cart";
            div.append(button);
            contentDiv.append(div);
        });
    };
});

// Cart Functionality

const cartSideBar = document.querySelector(".cartSidebar");
cartIcon.addEventListener("click", () => {
    cartSideBar.classList.toggle("active");
});

const cartBackBtn = document.querySelector(".cartBack");
cartBackBtn.addEventListener("click", () => {
    cartSideBar.classList.remove("active");
});