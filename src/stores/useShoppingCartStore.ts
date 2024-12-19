import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { CartProductViewModel } from '@/models/viewModel';
const storeName = 'shoppingCart';
export const useShoppingCartStore = defineStore(storeName, () => {

    // 使用 ref 定義購物車
    const cart = ref<CartProductViewModel[]>([]);

    // 從 localStorage 加載購物車數據
    const loadCart = () => {
        const storedCart = localStorage.getItem(storeName);
        
        if (storedCart) {
            cart.value = JSON.parse(storedCart);
        }
    }


    // 保存購物車數據到 localStorage
    const saveCart = () => {
        localStorage.setItem(storeName, JSON.stringify(cart.value));
    }

    // 添加商品到購物車
    const addToCart = (product: CartProductViewModel) => {
        const item = cart.value.find(i => i.id === product.id);
        if (item) {
            if(item.quantity + product.quantity >= product.stock) {
                console.log('too much');
                return;
            }
            item.quantity = Number(product.quantity) + Number(item.quantity);
        } else {
            cart.value.push({ ...product, quantity: product.quantity });
        }
        saveCart();
    }

    // 從購物車中移除商品
    const removeFromCart = (productId: string) => {
        cart.value = cart.value.filter(item => item.id.toString() !== productId);
        saveCart();
    }

    // 清空購物車
    const clearCart = () => {
        cart.value = []
        saveCart();
    }

    const updateQuantity = (id: string, quantity: number) => {
        const product = cart.value.find(p => p.id.toString() === id);
        if (product && quantity <= product.stock) {
            product.quantity = quantity;
        }
    };

    const findItemQuantity = (id: string): number => {
        const item = cart.value.find(i => i.id.toString() === id);
        if(item) {
            return item.quantity;
        }
        return 0;
    }

    // 計算購物車中商品的總數量
    const totalQuantity = computed(() => {
        return cart.value.reduce((sum, item) => sum + item.quantity, 0)
    });

    // 計算購物車中的總金額
    const totalAmount = computed(() => {
        return Math.round(cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0));
    });

    return {
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        totalQuantity,
        totalAmount,
        loadCart,
        findItemQuantity,
        updateQuantity
    }
})
