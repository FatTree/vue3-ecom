import { throttle } from "@/assets/util";
import { nextTick, onMounted, onUnmounted } from "vue";

export const useProdHL = (func: Function) => {
    // ====== product ======
    let throt_fun = throttle(async () => {
        await func();
    }, 1000);
    
    const handleScrollAction = async () => {
        // pageYOffset
        const scrollTop = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = window.innerHeight;
    
        if (scrollTop + clientHeight >= scrollHeight - 10) {
            throt_fun();
        }
    };
    
    onMounted(async() => {
        nextTick(() => {
            window.addEventListener('scroll', handleScrollAction);
        });
    });
    
    onUnmounted(() => {
        window.removeEventListener('scroll', handleScrollAction);
    });

    return {
        handleScrollAction,
    }
}