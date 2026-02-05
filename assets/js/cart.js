// ============================================
// Shopping Cart Management System
// ============================================

class ShoppingCart {
    constructor() {
        this.storageKey = 'carStoreCart';
        this.cart = this.loadCart();
    }

    // Load cart from localStorage
    loadCart() {
        const saved = localStorage.getItem(this.storageKey);
        return saved ? JSON.parse(saved) : [];
    }

    // Save cart to localStorage
    saveCart() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.cart));
        this.updateCartCount();
    }

    // Add item to cart
    addItem(item) {
        // Check if item already exists
        const existingIndex = this.cart.findIndex(i => i.name === item.name);
        
        if (existingIndex !== -1) {
            // Item exists, increase quantity
            this.cart[existingIndex].quantity += 1;
        } else {
            // New item
            this.cart.push({
                ...item,
                quantity: 1,
                id: Date.now()
            });
        }
        
        this.saveCart();
        return existingIndex !== -1 ? 'updated' : 'added';
    }

    // Remove item from cart
    removeItem(id) {
        this.cart = this.cart.filter(item => item.id !== id);
        this.saveCart();
    }

    // Update item quantity
    updateQuantity(id, quantity) {
        if (quantity <= 0) {
            this.removeItem(id);
            return;
        }
        
        const item = this.cart.find(i => i.id === id);
        if (item) {
            item.quantity = quantity;
            this.saveCart();
        }
    }

    // Get cart items
    getItems() {
        return this.cart;
    }

    // Get cart count
    getCount() {
        return this.cart.reduce((total, item) => total + item.quantity, 0);
    }

    // Get cart total
    getTotal() {
        return this.cart.reduce((total, item) => {
            const price = parseFloat(item.price.replace(/[$,]/g, ''));
            return total + (price * item.quantity);
        }, 0);
    }

    // Clear cart
    clearCart() {
        this.cart = [];
        this.saveCart();
    }

    // Update cart count badge
    updateCartCount() {
        const count = this.getCount();
        const badge = document.querySelector('.cart-count-badge');
        if (badge) {
            badge.textContent = count;
            badge.style.display = count > 0 ? 'flex' : 'none';
        }
    }
}

// Initialize cart
const cart = new ShoppingCart();

// Show toast notification
function showToast(message, type = 'success') {
    // Remove existing toast
    const existing = document.querySelector('.cart-toast');
    if (existing) existing.remove();

    // Create toast
    const toast = document.createElement('div');
    toast.className = 'cart-toast';
    toast.innerHTML = `
        <div class="toast-content">
            <span class="material-symbols-outlined">${type === 'success' ? 'check_circle' : 'info'}</span>
            <span>${message}</span>
        </div>
    `;

    // Add styles
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: linear-gradient(135deg, #f4c025 0%, #d4a015 100%);
        color: #181611;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(244, 192, 37, 0.35);
        z-index: 99999;
        animation: slideIn 0.3s ease;
        font-family: "Space Grotesk", sans-serif;
        font-weight: 600;
    `;

    document.body.appendChild(toast);

    // Remove after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Add event listeners to Add to Cart buttons
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            const carName = button.dataset.carName;
            const carPrice = button.dataset.carPrice;
            const carYear = button.dataset.carYear;
            const carImage = button.dataset.carImage;
            
            if (!carName || !carPrice) {
                console.error('Missing car data');
                return;
            }
            
            const item = {
                name: carName,
                price: carPrice,
                year: carYear || '',
                image: carImage || ''
            };
            
            const result = cart.addItem(item);
            
            // Show feedback
            showToast(`${carName} added to cart!`);
            
            // Button animation
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = '';
            }, 200);
        });
    });
    
    // Update cart count on load
    cart.updateCartCount();
});

// Keyframe animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(400px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(400px);
        }
    }
    
    .toast-content {
        display: flex;
        align-items: center;
        gap: 12px;
    }
    
    .toast-content .material-symbols-outlined {
        font-size: 24px;
    }
`;
document.head.appendChild(style);

// Export for use in other pages
window.ShoppingCart = ShoppingCart;
window.cart = cart;
