const products = [
    { 
        id: 1, 
        name: 'Classic White Tee', 
        price: 999, 
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 
        images: [
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        ],
        category: 'basics', 
        rating: 4.5, 
        reviews: 128, 
        desc: 'A timeless classic white tee made from 100% organic cotton. Breathable, durable, and ethically sourced. Perfect for everyday wear.' 
    },
    { 
        id: 2, 
        name: 'Midnight Black Basic', 
        price: 1299, 
        image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 
        images: [
            'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1564859228273-274232fdb516?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        ],
        category: 'basics', 
        rating: 4.8, 
        reviews: 256, 
        desc: 'The perfect black t-shirt. Fade-resistant and incredibly soft. Designed with reinforced stitching to ensure it lasts wash after wash.' 
    },
    { 
        id: 3, 
        name: 'Heather Gray V-Neck', 
        price: 1199, 
        image: 'https://images.unsplash.com/photo-1564859228273-274232fdb516?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 
        images: [
            'https://images.unsplash.com/photo-1564859228273-274232fdb516?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        ],
        category: 'v-neck', 
        rating: 4.3, 
        reviews: 89, 
        desc: 'A comfortable v-neck in a versatile heather gray. The tailored fit makes it look sharp whether you are lounging or out on the town.' 
    },
    { 
        id: 4, 
        name: 'Ocean Blue Minimal', 
        price: 1499, 
        image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 
        images: [
            'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        ],
        category: 'premium', 
        rating: 4.9, 
        reviews: 312, 
        desc: 'Premium heavy-weight fabric in a stunning ocean blue. Pre-shrunk and exceptionally soft for a luxurious feel against the skin.' 
    },
    { 
        id: 5, 
        name: 'Crimson Red Polo', 
        price: 1799, 
        image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 
        images: [
            'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1564859228273-274232fdb516?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        ],
        category: 'polo', 
        rating: 4.6, 
        reviews: 145, 
        desc: 'Elevate your casual look with this structured crimson polo. Features a classic collar, two-button placket, and ribbed cuffs.' 
    },
    { 
        id: 6, 
        name: 'Olive Green Henley', 
        price: 1399, 
        image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 
        images: [
            'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1564859228273-274232fdb516?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        ],
        category: 'polo', 
        rating: 4.7, 
        reviews: 201, 
        desc: 'A rugged yet refined olive green henley with a 3-button placket. The ultimate blend of casual comfort and stylish detail.' 
    },
    { 
        id: 7, 
        name: 'Slate Charcoal Oversized', 
        price: 1599, 
        image: 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 
        images: [
            'https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1586790170058-20ddfe632b90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1503341455253-bfe4501028f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        ],
        category: 'basics', 
        rating: 4.9, 
        reviews: 42, 
        desc: 'An oversized slate charcoal t-shirt for that relaxed, modern silhouette. Made from premium heavy cotton for a structured look.' 
    },
    { 
        id: 8, 
        name: 'Sand Beige Premium', 
        price: 1699, 
        image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 
        images: [
            'https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        ],
        category: 'premium', 
        rating: 4.8, 
        reviews: 67, 
        desc: 'Earth-toned sand beige tee with a luxurious silk-touch finish. Perfect for layering or wearing on its own for a minimalist aesthetic.' 
    }
];

const ALLOWED_SIZES = ['S', 'M', 'L', 'XL', 'XXL'];

// App State v3 
let users = JSON.parse(localStorage.getItem('sword_users_v3')) || [];
let currentUser = JSON.parse(localStorage.getItem('sword_currentUser_v3')) || null;

let currentCategory = 'all';
let currentSearch = '';
let selectedSize = 'M'; // Default PDP Size

// Helpers
function saveUsers() { localStorage.setItem('sword_users_v3', JSON.stringify(users)); }
function saveCurrentUser() { localStorage.setItem('sword_currentUser_v3', JSON.stringify(currentUser)); }

// Toast Notification
function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${message}`;
    toast.style.display = 'flex';
    toast.style.alignItems = 'center';
    toast.style.gap = '0.5rem';
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Router
const sections = {
    home: document.getElementById('section-home'),
    productDetail: document.getElementById('section-product-detail'),
    login: document.getElementById('section-login'),
    register: document.getElementById('section-register'),
    cart: document.getElementById('section-cart'),
    wishlist: document.getElementById('section-wishlist'),
    orders: document.getElementById('section-orders'),
    checkout: document.getElementById('section-checkout'),
    profile: document.getElementById('section-profile')
};

function navigateTo(sectionId) {
    document.getElementById('search-input').value = '';
    currentSearch = '';

    Object.values(sections).forEach(sec => sec.classList.add('hidden'));
    sections[sectionId].classList.remove('hidden');
    window.scrollTo(0, 0);

    document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
    const navIdMap = {
        'home': 'nav-home',
        'wishlist': 'nav-wishlist',
        'cart': 'nav-cart',
        'orders': 'nav-orders'
    };
    if (navIdMap[sectionId]) {
        const activeLink = document.getElementById(navIdMap[sectionId]);
        if (activeLink) activeLink.classList.add('active');
    }

    if (sectionId === 'home') renderProducts();
    if (sectionId === 'cart') renderCart();
    if (sectionId === 'wishlist') renderWishlist();
    if (sectionId === 'orders') renderOrders();
    if (sectionId === 'checkout') renderCheckout();
    if (sectionId === 'profile') renderProfile();
}

// Navigation Listeners
document.getElementById('nav-brand').addEventListener('click', (e) => { e.preventDefault(); navigateTo('home'); });
document.getElementById('nav-home').addEventListener('click', (e) => { e.preventDefault(); navigateTo('home'); });
document.getElementById('btn-show-login').addEventListener('click', () => navigateTo('login'));
document.getElementById('btn-show-register').addEventListener('click', () => navigateTo('register'));
document.getElementById('link-login').addEventListener('click', (e) => { e.preventDefault(); navigateTo('login'); });
document.getElementById('link-register').addEventListener('click', (e) => { e.preventDefault(); navigateTo('register'); });

// Protected Routes
document.getElementById('nav-cart').addEventListener('click', (e) => {
    e.preventDefault();
    if (!currentUser) return showToast('Please login to view your cart');
    navigateTo('cart');
});
document.getElementById('nav-wishlist').addEventListener('click', (e) => {
    e.preventDefault();
    if (!currentUser) return showToast('Please login to view wishlist');
    navigateTo('wishlist');
});
document.getElementById('nav-orders').addEventListener('click', (e) => {
    e.preventDefault();
    if (!currentUser) return showToast('Please login to view your orders');
    navigateTo('orders');
});
document.getElementById('nav-profile').addEventListener('click', (e) => {
    e.preventDefault();
    if (!currentUser) return showToast('Please login to view profile'); 
    navigateTo('profile');
});

// Update UI based on Auth
function updateAuthUI() {
    const authButtons = document.getElementById('auth-buttons');
    const userMenu = document.getElementById('user-menu');
    const greeting = document.getElementById('user-greeting');
    const ordersNav = document.getElementById('nav-orders');

    const cartBadge = document.getElementById('cart-badge');
    const wishlistBadge = document.getElementById('wishlist-badge');

    if (currentUser) {
        authButtons.classList.add('hidden');
        userMenu.classList.remove('hidden');
        ordersNav.classList.remove('hidden');
        greeting.innerText = `Hello, ${currentUser.name.split(' ')[0]}`;

        // Cart Badge represents total QTY of all items
        const totalQty = currentUser.cart.reduce((s, c) => s + c.qty, 0);
        cartBadge.innerText = totalQty;
        wishlistBadge.innerText = currentUser.wishlist.length;

        if (totalQty > 0) cartBadge.classList.remove('hidden');
        else cartBadge.classList.add('hidden');

        if (currentUser.wishlist.length > 0) wishlistBadge.classList.remove('hidden');
        else wishlistBadge.classList.add('hidden');
    } else {
        authButtons.classList.remove('hidden');
        userMenu.classList.add('hidden');
        ordersNav.classList.add('hidden');
        cartBadge.classList.add('hidden');
        wishlistBadge.classList.add('hidden');
    }
}

// Auth Forms
document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    if (users.find(u => u.email === email)) {
        return showToast('Email already registered');
    }

    const newUser = { id: Date.now(), name, email, password, cart: [], wishlist: [], orders: [] };
    users.push(newUser);
    saveUsers();

    currentUser = newUser;
    saveCurrentUser();
    showToast('Registration successful!');
    updateAuthUI();
    navigateTo('home');
    e.target.reset();
});

document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
        return showToast('Invalid email or password');
    }

    currentUser = user;
    saveCurrentUser();
    showToast('Logged in successfully!');
    updateAuthUI();
    navigateTo('home');
    e.target.reset();
});

document.getElementById('btn-logout').addEventListener('click', () => {
    performLogout();
});

document.getElementById('btn-profile-logout').addEventListener('click', () => {
    performLogout();
});

function performLogout() {
    syncDb();
    currentUser = null;
    saveCurrentUser();
    showToast('Logged out securely');
    updateAuthUI();
    navigateTo('home');
}

// Sync Current User DB Helper
function syncDb() {
    if (!currentUser) return;
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    if (userIndex > -1) {
        users[userIndex] = currentUser;
        saveUsers();
        saveCurrentUser();
        updateAuthUI();
    }
}

// Generate Star Icons
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (rating >= i) stars += '<i class="fa-solid fa-star"></i>';
        else if (rating >= i - 0.5) stars += '<i class="fa-solid fa-star-half-stroke"></i>';
        else stars += '<i class="fa-regular fa-star"></i>';
    }
    return stars;
}


// Products Rendering
function renderProducts() {
    const container = document.getElementById('products-container');
    container.innerHTML = '';

    let filtered = products;

    if (currentCategory !== 'all') {
        filtered = filtered.filter(p => p.category === currentCategory);
    }

    if (currentSearch.trim() !== '') {
        const q = currentSearch.toLowerCase();
        filtered = filtered.filter(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
    }

    document.getElementById('search-result-count').innerText = `${filtered.length} result(s)`;

    if (filtered.length === 0) {
        container.innerHTML = '<div class="empty-state" style="grid-column: 1/-1;"><h3>No products found</h3><p>Try adjusting your filters or search terms.</p></div>';
        return;
    }

    filtered.forEach(p => {
        let inWishlist = false;
        if (currentUser) {
            inWishlist = currentUser.wishlist.some(w => w === p.id);
        }

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
      <div class="product-image-container">
        <img src="${p.image}" alt="${p.name}" class="product-image" onclick="showProductDetails(${p.id})">
      </div>
      <div class="product-info">
        <h3 class="product-title" onclick="showProductDetails(${p.id})">${p.name}</h3>
        <div class="product-rating">
          ${generateStars(p.rating)} <span>${p.rating} (${p.reviews})</span>
        </div>
        <p class="product-price">₹${p.price.toFixed(2)}</p>
        <div class="product-actions" style="margin-top: 0.5rem;">
          <button class="btn btn-amazon btn-cart" onclick="addToCart(${p.id}, 'M', 1)"><i class="fa-solid fa-cart-plus"></i> Quick Add (M)</button>
          <button class="btn-icon" onclick="toggleWishlist(${p.id})">
            <i class="${inWishlist ? 'fa-solid' : 'fa-regular'} fa-heart" style="${inWishlist ? 'color: var(--accent-color)' : ''}"></i>
          </button>
        </div>
      </div>
    `;
        container.appendChild(card);
    });
}

// Category & Search Logic
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentCategory = e.target.getAttribute('data-category');
        navigateTo('home');
    });
});

document.getElementById('search-input').addEventListener('keyup', (e) => {
    currentSearch = e.target.value;
    if (!sections.home.classList.contains('hidden') || sections.home.classList.contains('hidden')) {
        if (sections.home.classList.contains('hidden')) {
            navigateTo('home');
            currentSearch = e.target.value;
            document.getElementById('search-input').value = currentSearch;
        }
        renderProducts();
    }
});
document.getElementById('btn-search').addEventListener('click', () => {
    if (sections.home.classList.contains('hidden')) {
        currentSearch = document.getElementById('search-input').value;
        navigateTo('home');
        document.getElementById('search-input').value = currentSearch;
        renderProducts();
    }
});

// Product Details Page (PDP)
window.showProductDetails = function (id) {
    const p = products.find(x => x.id === id);
    if (!p) return;

    selectedSize = 'M'; // Reset size on new PDP load

    const container = document.getElementById('product-detail-container');

    const sizesHTML = ALLOWED_SIZES.map(s =>
        `<button class="size-btn ${s === selectedSize ? 'active' : ''}" onclick="selectSize('${s}')">${s}</button>`
    ).join('');

    const thumbnailsHTML = (p.images || [p.image]).map((img, index) => 
        `<div class="thumb-wrapper ${index === 0 ? 'active' : ''}" onclick="changePDPImage('${img}', this)">
            <img src="${img}" alt="${p.name} view ${index + 1}">
        </div>`
    ).join('');

    container.innerHTML = `
    <div class="pdp-gallery-container">
        <div class="pdp-thumbnails">
            ${thumbnailsHTML}
        </div>
        <div class="product-detail-img-wrapper" id="zoom-wrapper">
          <img src="${p.image}" alt="${p.name}" class="product-detail-img" id="zoom-img">
          <div class="zoom-hint">Double click to toggle 2x zoom</div>
        </div>
    </div>
    <div class="product-detail-info">
      <h2 style="font-weight: 800">${p.name}</h2>
      <div class="rating">
        ${generateStars(p.rating)} <span style="color: var(--primary-color)">${p.rating} out of 5 stars</span> <span>(${p.reviews} ratings)</span>
      </div>
      <hr style="border: 0; height: 1px; background: var(--border-color); margin-bottom: 1.5rem;">
      <div class="product-detail-price">₹${p.price.toFixed(2)}</div>
      
      <div class="size-selector">
        <h4>Select Size: <span id="pdp-display-size" style="font-weight: bold; color: var(--text-primary);">${selectedSize}</span></h4>
        <div class="size-options" id="pdp-sizes">
          ${sizesHTML}
        </div>
      </div>

      <p class="product-detail-desc">${p.desc}</p>
      
      <div class="qty-selector">
        <label>Quantity:</label>
        <button class="qty-btn" onclick="document.getElementById('pdp-qty').value = Math.max(1, parseInt(document.getElementById('pdp-qty').value) - 1)">-</button>
        <input type="number" id="pdp-qty" class="qty-input" value="1" min="1">
        <button class="qty-btn" onclick="document.getElementById('pdp-qty').value = parseInt(document.getElementById('pdp-qty').value) + 1">+</button>
      </div>

      <div style="display: flex; gap: 1rem; margin-bottom: 2rem;">
        <button class="btn btn-amazon" onclick="window.addToCartFromPDP(${p.id})" style="flex: 1; padding: 1rem; font-size: 1.1rem; border-radius: 20px;"><i class="fa-solid fa-cart-plus"></i> Add to Cart</button>
        <button class="btn btn-amazon-dark" onclick="window.buyNow(${p.id})" style="flex: 1; padding: 1rem; font-size: 1.1rem; border-radius: 20px;"><i class="fa-solid fa-bolt"></i> Buy Now</button>
      </div>
      
      <div style="color: var(--text-secondary); font-size: 0.9rem; background: var(--surface-hover); padding: 1rem; border-radius: 8px;">
        <p style="margin-bottom: 0.5rem;"><i class="fa-solid fa-truck" style="color: var(--primary-color)"></i> Free Prime Delivery on this item.</p>
        <p style="margin-bottom: 0.5rem;"><i class="fa-solid fa-rotate-left" style="color: var(--primary-color)"></i> 30-Day Money-Back Guarantee.</p>
        <p><i class="fa-solid fa-shield-halved" style="color: var(--primary-color)"></i> Secure transaction by SWORD.</p>
      </div>
    </div>
  `;

    navigateTo('productDetail');

    // Attach Zoom Logic
    const zoomWrapper = document.getElementById('zoom-wrapper');
    const zoomImg = document.getElementById('zoom-img');
    let isDoubleZoom = false;

    zoomWrapper.addEventListener('mousemove', function (e) {
        if (isDoubleZoom) return; // Ignore hover zoom if double zoom is active
        const rect = zoomWrapper.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;

        zoomImg.style.transformOrigin = `${xPercent}% ${yPercent}%`;
        zoomImg.style.transform = 'scale(1.5)';
    });

    zoomWrapper.addEventListener('mouseleave', function () {
        if (isDoubleZoom) return;
        zoomImg.style.transformOrigin = 'center center';
        zoomImg.style.transform = 'scale(1)';
    });

    zoomWrapper.addEventListener('dblclick', function(e) {
        isDoubleZoom = !isDoubleZoom;
        if (isDoubleZoom) {
            zoomImg.style.transform = 'scale(2.5)';
            zoomImg.classList.add('zoomed-cursor');
            showToast('2.5x Zoom Active');
        } else {
            zoomImg.style.transform = 'scale(1)';
            zoomImg.classList.remove('zoomed-cursor');
        }
    });

    window.changePDPImage = function(src, el) {
        zoomImg.src = src;
        document.querySelectorAll('.thumb-wrapper').forEach(t => t.classList.remove('active'));
        el.classList.add('active');
        isDoubleZoom = false;
        zoomImg.style.transform = 'scale(1)';
    };
}

window.selectSize = function (size) {
    selectedSize = size;
    document.getElementById('pdp-display-size').innerText = size;
    document.getElementById('pdp-sizes').innerHTML = ALLOWED_SIZES.map(s =>
        `<button class="size-btn ${s === selectedSize ? 'active' : ''}" onclick="selectSize('${s}')">${s}</button>`
    ).join('');
}

window.addToCartFromPDP = function (id) {
    const qty = parseInt(document.getElementById('pdp-qty').value);
    addToCart(id, selectedSize, qty);
}
window.buyNow = function (id) {
    const qty = parseInt(document.getElementById('pdp-qty').value);
    addToCart(id, selectedSize, qty);
    navigateTo('cart');
}


// Shopping Logic Integration
window.addToCart = function (productId, size, qty) {
    if (!currentUser) return showToast('Please login to add to cart');
    const p = products.find(x => x.id === productId);

    // Find item by ID AND Size
    const existingItem = currentUser.cart.find(c => c.productId === productId && c.size === size);
    if (existingItem) {
        existingItem.qty += qty;
    } else {
        currentUser.cart.push({ productId, size, qty });
    }

    syncDb();
    showToast(`${qty}x ${p.name} (Size: ${size}) added to cart!`);
};

window.updateCartQty = function (index, delta) {
    if (!currentUser || !currentUser.cart[index]) return;

    currentUser.cart[index].qty += delta;

    if (currentUser.cart[index].qty <= 0) {
        currentUser.cart.splice(index, 1);
        showToast(`Removed from cart`);
    }

    syncDb();
    renderCart();
}

window.removeFromCart = function (index) {
    if (!currentUser) return;
    currentUser.cart.splice(index, 1);
    syncDb();
    showToast(`Removed from cart`);
    renderCart();
};

window.toggleWishlist = function (productId) {
    if (!currentUser) return showToast('Please login to use wishlist');
    const p = products.find(x => x.id === productId);

    const wIndex = currentUser.wishlist.indexOf(productId);
    if (wIndex > -1) {
        currentUser.wishlist.splice(wIndex, 1);
        showToast(`${p.name} removed from wishlist`);
    } else {
        currentUser.wishlist.push(productId);
        showToast(`${p.name} added to wishlist`);
    }
    syncDb();

    if (!sections.home.classList.contains('hidden')) renderProducts();
    if (!sections.wishlist.classList.contains('hidden')) renderWishlist();
    if (!sections.productDetail.classList.contains('hidden')) {
        // optional re-render if we want heart on PDP
    }
};


// Render Cart View
function renderCart() {
    const container = document.getElementById('cart-container');
    const summaryBox = document.getElementById('cart-summary');
    const sectionTitle = document.querySelector('#section-cart h2');

    container.innerHTML = '';

    if (!currentUser || currentUser.cart.length === 0) {
        sectionTitle.innerText = "Your SWORD Cart is empty";
        container.innerHTML = `
      <div class="empty-state" style="background: var(--surface-color); border-radius: 12px; border: 1px solid var(--border-color);">
        <i class="fa-solid fa-cart-shopping" style="font-size: 4rem; color: var(--border-color); margin-bottom: 1rem;"></i>
        <h3>Your cart is completely empty</h3>
        <p style="margin-bottom: 2rem;">Check out today's deals and continue shopping.</p>
        <button class="btn btn-amazon" onclick="navigateTo('home')">Continue Shopping</button>
      </div>`;
        summaryBox.classList.add('hidden');
        return;
    }

    sectionTitle.innerText = "Shopping Cart";
    summaryBox.classList.remove('hidden');
    let total = 0;
    let itemCount = 0;

    currentUser.cart.forEach((cartItem, index) => {
        const p = products.find(x => x.id === cartItem.productId);
        if (!p) return;

        total += (p.price * cartItem.qty);
        itemCount += cartItem.qty;

        const div = document.createElement('div');
        div.className = 'list-item';
        div.innerHTML = `
      <img src="${p.image}" alt="${p.name}" class="list-img" onclick="showProductDetails(${p.id})" style="cursor: pointer;">
      <div class="list-details">
        <h4 class="list-title" onclick="showProductDetails(${p.id})" style="cursor: pointer;">${p.name}</h4>
        <div style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 0.2rem;">Size: <span style="color: var(--text-primary); font-weight: bold;">${cartItem.size}</span></div>
        <p style="color: #10b981; font-size: 0.9rem; margin-bottom: 0.5rem;">In Stock</p>
        <div class="qty-selector" style="margin-bottom: 0;">
          <button class="qty-btn" style="width: 30px; height: 30px;" onclick="updateCartQty(${index}, -1)">-</button>
          <input type="text" class="qty-input" value="${cartItem.qty}" readonly style="width: 40px; border: none; background: transparent; color: white;">
          <button class="qty-btn" style="width: 30px; height: 30px;" onclick="updateCartQty(${index}, 1)">+</button>
          <span style="color: var(--primary-color); margin-left: 1rem; cursor: pointer;" onclick="removeFromCart(${index})"><i class="fa-solid fa-trash"></i> Delete</span>
        </div>
      </div>
      <div class="list-actions" style="flex-direction: column; align-items: flex-end;">
        <p class="list-price">₹${(p.price * cartItem.qty).toFixed(2)}</p>
        <p style="color: var(--text-secondary); font-size: 0.8rem;">₹${p.price.toFixed(2)} each</p>
      </div>
    `;
        container.appendChild(div);
    });

    document.getElementById('cart-subtotal').innerText = `₹${total.toFixed(2)}`;
    document.getElementById('cart-item-count').innerText = itemCount;
    document.getElementById('cart-total-price').innerText = `₹${total.toFixed(2)}`;
}


// Checkout Routing & UI
document.getElementById('btn-proceed-checkout').addEventListener('click', () => {
    if (!currentUser || currentUser.cart.length === 0) return;
    navigateTo('checkout');
});

function renderCheckout() {
    const listContainer = document.getElementById('checkout-items-preview');
    let total = 0;

    listContainer.innerHTML = '';

    // Render Preview
    currentUser.cart.forEach((c) => {
        const p = products.find(x => x.id === c.productId);
        if (!p) return;
        total += p.price * c.qty;

        listContainer.innerHTML += `
        <div style="display: flex; gap: 1rem; margin-bottom: 1rem; align-items: center;">
            <img src="${p.image}" style="width: 50px; height: 50px; border-radius: 4px; object-fit: cover;">
            <div style="flex: 1;">
                <div style="font-weight: 600; font-size: 0.9rem;">${p.name} (Size: ${c.size})</div>
                <div style="color: var(--text-secondary); font-size: 0.8rem;">Qty: ${c.qty}</div>
            </div>
            <div style="font-weight: bold;">₹${(p.price * c.qty).toFixed(2)}</div>
        </div>
        `;
    });

    document.getElementById('checkout-subtotal').innerText = `₹${total.toFixed(2)}`;
    document.getElementById('checkout-final-total').innerText = `₹${total.toFixed(2)}`;

    // Clear all previously entered data in checkout form
    document.getElementById('checkout-form').reset();
}

// Payment Radio Toggle
document.querySelectorAll('input[name="payment_method"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        const upiDetails = document.getElementById('upi-payment-details');
        if (e.target.value === 'upi') {
            upiDetails.style.display = 'block';
        } else {
            upiDetails.style.display = 'none';
        }
    });
});

// Final Checkout Submit
document.getElementById('checkout-form').addEventListener('submit', (e) => {
    e.preventDefault();

    if (!currentUser || currentUser.cart.length === 0) return;

    let total = 0;
    const itemsLog = currentUser.cart.map(c => {
        const p = products.find(x => x.id === c.productId);
        total += p.price * c.qty;
        return { name: p.name, price: p.price, qty: c.qty, size: c.size, image: p.image };
    });

    const method = document.querySelector('input[name="payment_method"]:checked').value;
    let paymentText = method === 'upi' ? 'UPI' : 'Cash on Delivery (COD)';

    const name = document.getElementById('checkout-name').value;
    const email = document.getElementById('checkout-email').value;
    const phone = document.getElementById('checkout-phone').value;
    const address = `${document.getElementById('checkout-street').value}, ${document.getElementById('checkout-city').value}, ${document.getElementById('checkout-state').value} ${document.getElementById('checkout-pin').value}`;

    const orderId = 'AMZ-SWORD-' + Math.floor(Math.random() * 10000000);

    const order = {
        id: orderId,
        date: new Date().toLocaleDateString(),
        items: itemsLog,
        total: total,
        method: paymentText,
        address: address,
        customerName: name,
        customerEmail: email,
        customerPhone: phone,
        status: 'Active'
    };

    currentUser.orders.unshift(order);
    currentUser.cart = []; // clear cart completely natively
    syncDb();


    showToast(`Order Placed! Thank you for choosing SWORD.`);
    navigateTo('orders');
    e.target.reset(); // clear form
});


// Render Wishlist
function renderWishlist() {
    const container = document.getElementById('wishlist-container');
    container.innerHTML = '';

    if (!currentUser || currentUser.wishlist.length === 0) {
        container.innerHTML = '<div class="empty-state" style="grid-column: 1/-1;"><h3>Your wishlist is empty</h3></div>';
        return;
    }

    currentUser.wishlist.forEach(productId => {
        const p = products.find(x => x.id === productId);
        if (!p) return;

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
      <div class="product-image-container">
        <img src="${p.image}" alt="${p.name}" class="product-image" onclick="showProductDetails(${p.id})">
      </div>
      <div class="product-info">
        <h3 class="product-title" onclick="showProductDetails(${p.id})">${p.name}</h3>
        <p class="product-price">₹${p.price.toFixed(2)}</p>
        <div class="product-actions" style="margin-top: 0.5rem">
          <button class="btn btn-amazon btn-cart" onclick="addToCart(${p.id}, 'M', 1)">Add to Cart</button>
          <button class="btn-icon" onclick="toggleWishlist(${p.id})" style="color: var(--accent-color)">
            <i class="fa-solid fa-heart"></i>
          </button>
        </div>
      </div>
    `;
        container.appendChild(card);
    });
}

// Render Orders
function renderOrders() {
    const container = document.getElementById('orders-container');
    container.innerHTML = '';

    if (!currentUser || currentUser.orders.length === 0) {
        container.innerHTML = '<div class="empty-state" style="background: var(--surface-color); border-radius: 12px;"><h3>You have not placed any orders yet.</h3></div>';
        return;
    }

    currentUser.orders.forEach(order => {
        const list = document.createElement('div');
        list.style.background = 'var(--surface-color)';
        list.style.border = '1px solid var(--border-color)';
        list.style.borderRadius = '12px';
        list.style.padding = '1.5rem';
        list.style.marginBottom = '2rem';

        let itemsHTML = order.items.map(item => `
      <div style="display: flex; align-items: center; margin-top: 1rem; border-top: 1px dashed var(--border-color); padding-top: 1rem;">
        <img src="${item.image}" style="width: 60px; height: 60px; border-radius: 8px; object-fit: cover; margin-right: 1.5rem;">
        <div style="flex: 1;">
          <div style="font-weight: bold; font-size: 1.1rem; color: var(--text-primary);">${item.name}</div>
          <div style="color: var(--text-secondary); font-size: 0.9rem;">
             Size <span style="font-weight:bold; color:var(--text-primary);">${item.size}</span> &bull; Qty: ${item.qty}
          </div>
        </div>
        <div style="font-weight: bold; color: var(--amazon-orange); font-size: 1.1rem;">
          ₹${(item.price * item.qty).toFixed(2)}
        </div>
      </div>
    `).join('');

        list.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; background: var(--surface-hover); padding: 1rem; border-radius: 8px; margin-bottom: 1rem; flex-wrap: wrap; gap: 1rem;">
        <div style="display: flex; gap: 3rem; flex-wrap: wrap;">
          <div>
            <div style="color: var(--text-secondary); font-size: 0.8rem; text-transform: uppercase;">Order Placed</div>
            <div style="font-weight: bold;">${order.date}</div>
          </div>
          <div>
            <div style="color: var(--text-secondary); font-size: 0.8rem; text-transform: uppercase;">Total</div>
            <div style="font-weight: bold; color: var(--text-primary);">₹${order.total.toFixed(2)}</div>
          </div>
          <div>
            <div style="color: var(--text-secondary); font-size: 0.8rem; text-transform: uppercase;">Shipping To</div>
            <div style="font-weight: bold; color: var(--primary-color); font-size: 0.9rem; max-width: 250px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${order.address}">${order.address}</div>
          </div>
        </div>
        <div style="text-align: right;">
          <div style="color: var(--text-secondary); font-size: 0.8rem; text-transform: uppercase;">Order ID # ${order.id}</div>
          <div style="font-weight: bold; color: ${order.status === 'Cancelled' ? 'var(--accent-color)' : '#10b981'};">${order.status === 'Cancelled' ? 'Cancelled' : order.method}</div>
          ${order.status === 'Cancelled' && order.cancelReason ? `<div style="color: var(--text-secondary); font-size: 0.8rem; margin-top: 0.5rem; max-width: 15rem; text-align: right; margin-left: auto;">Cancel Reason: ${order.cancelReason}</div>` : ''}
        </div>
      </div>
      <div>
        ${itemsHTML}
      </div>
      ${order.status !== 'Cancelled' ? `<div style="margin-top: 1.5rem; text-align: right; border-top: 1px solid var(--border-color); padding-top: 1rem;"><button class="btn btn-outline" style="color: var(--accent-color); border-color: var(--accent-color);" onclick="cancelOrder('${order.id}')">Cancel Order</button></div>` : ''}
    `;

        container.appendChild(list);
    });
}

let orderToCancelId = null;

window.cancelOrder = function (orderId) {
    if (!currentUser) return;
    const modal = document.getElementById('cancel-modal');
    modal.style.display = 'flex';
    modal.classList.remove('hidden');
    document.getElementById('cancel-reason').value = '';
    orderToCancelId = orderId;
}

window.closeCancelModal = function () {
    const modal = document.getElementById('cancel-modal');
    modal.style.display = 'none';
    modal.classList.add('hidden');
    orderToCancelId = null;
}

window.confirmCancelOrder = function () {
    if (!currentUser || !orderToCancelId) return;

    const reason = document.getElementById('cancel-reason').value;
    if (!reason) {
        return showToast('Please select a reason for cancellation.');
    }

    const orderIndex = currentUser.orders.findIndex(o => o.id === orderToCancelId);
    if (orderIndex > -1) {
        currentUser.orders[orderIndex].status = 'Cancelled';
        currentUser.orders[orderIndex].cancelReason = reason;
        syncDb();
        showToast('Order cancelled successfully.');
        renderOrders();
        closeCancelModal();
    }
}

// Render Profile
function renderProfile() {
    if (!currentUser) return;
    document.getElementById('profile-name').value = currentUser.name;
    document.getElementById('profile-email').value = currentUser.email;
    document.getElementById('profile-password').value = ''; // Do NOT display password securely, prompt to leave blank instead
}

document.getElementById('profile-form').addEventListener('submit', (e) => {
    e.preventDefault();
    if (!currentUser) return;

    const newName = document.getElementById('profile-name').value;
    const newPassword = document.getElementById('profile-password').value;

    currentUser.name = newName;
    if (newPassword.trim().length > 0) {
        currentUser.password = newPassword;
    }

    syncDb();
    showToast('Profile updated successfully!');
    // Update Greeting in UI if name changed
    updateAuthUI();
});

// Init
updateAuthUI();
renderProducts();
