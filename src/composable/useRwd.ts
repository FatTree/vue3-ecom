import { debounce } from '@/utils/util';
import { ref, onMounted, onUnmounted } from 'vue';

export default function useApi() {
    const isMobile = ref(window.innerWidth < 768);

    const updateIsMobile = () => {
        isMobile.value = window.innerWidth < 768;
    };
    const debounceUpdate = debounce(updateIsMobile, 1000);

    onMounted(async () => {
        window.addEventListener('resize', debounceUpdate);
    })

    onUnmounted(() => {
        window.removeEventListener('resize', debounceUpdate);
    });

    return {
        isMobile
    }
}