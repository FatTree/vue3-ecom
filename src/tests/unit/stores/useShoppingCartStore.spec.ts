import { setActivePinia, createPinia } from 'pinia';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useShoppingCartStore } from '@/stores/useShoppingCartStore';
import type { CartProductViewModel } from '@/models/viewModel';

// 模擬 localStorage
const mockLocalStorage: Record<string, string> = {};
vi.stubGlobal('localStorage', {
    getItem: (key: string) => mockLocalStorage[key] || null,
    setItem: (key: string, value: string) => {
        mockLocalStorage[key] = value;
    },
    removeItem: (key: string) => {
        delete mockLocalStorage[key];
    },
    clear: () => {
        for (const key in mockLocalStorage) {
        delete mockLocalStorage[key];
        }
    },
});

describe('ShoppingCart Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
        localStorage.clear();
    });

    const createProduct = (overrides?: Partial<CartProductViewModel>): CartProductViewModel => ({
        id: 1,
        title: 'Test Product',
        price: 100,
        discountPercentage: 10,
        stock: 50,
        sku: 'SKU12345',
        thumbnail: 'test-thumbnail.jpg',
        quantity: 1,
        ...overrides,
    });

    it('should initialize with an empty cart', () => {
        const store = useShoppingCartStore();
        expect(store.cart).toEqual([]);
    });

    it('should load cart from localStorage', () => {
        const storedCart = JSON.stringify([createProduct()]);
        localStorage.setItem('shoppingCart', storedCart);

        const store = useShoppingCartStore();
        store.loadCart();

        expect(store.cart).toEqual(JSON.parse(storedCart));
    });

    it('should add product to the cart', () => {
        const store = useShoppingCartStore();
        const product = createProduct();

        store.addToCart(product);

        expect(store.cart).toEqual([product]);
        expect(localStorage.getItem('shoppingCart')).toEqual(JSON.stringify([product]));
    });

    it('should update quantity when adding the same product', () => {
        const store = useShoppingCartStore();
        const product = createProduct();

        store.addToCart(product);
        store.addToCart(createProduct({ quantity: 2 }));

        expect(store.cart).toEqual([
        { ...product, quantity: 3 },
        ]);
    });

    it('should not add more than stock quantity', () => {
        const store = useShoppingCartStore();
        const product = createProduct({ quantity: 25 });

        store.addToCart(product);
        store.addToCart(createProduct({ quantity: 30 }));

        expect(store.cart).toEqual([product]);
    });

    it('should remove a product from the cart', () => {
        const store = useShoppingCartStore();
        const product = createProduct();

        store.addToCart(product);
        store.removeFromCart('1');

        expect(store.cart).toEqual([]);
        expect(localStorage.getItem('shoppingCart')).toEqual(JSON.stringify([]));
    });

    it('should clear the cart', () => {
        const store = useShoppingCartStore();
        const product = createProduct();

        store.addToCart(product);
        store.clearCart();

        expect(store.cart).toEqual([]);
        expect(localStorage.getItem('shoppingCart')).toEqual(JSON.stringify([]));
    });

    it('should calculate total quantity and amount', () => {
        const store = useShoppingCartStore();
        const product1 = createProduct({ id: 1, quantity: 2 });
        const product2 = createProduct({ id: 2, quantity: 1, price: 200 });

        store.addToCart(product1);
        store.addToCart(product2);

        expect(store.totalQuantity).toBe(3);
        expect(store.totalAmount).toBe(400);
    });

    it('should update the quantity of a product', () => {
        const store = useShoppingCartStore();
        const product = createProduct();

        store.addToCart(product);
        store.updateQuantity('1', 5);

        expect(store.cart[0].quantity).toBe(5);
    });

    it('should find item quantity by ID', () => {
        const store = useShoppingCartStore();
        const product = createProduct({ id: 1, quantity: 2 });

        store.addToCart(product);

        expect(store.findItemQuantity('1')).toBe(2);
        expect(store.findItemQuantity('2')).toBe(0);
    });
});