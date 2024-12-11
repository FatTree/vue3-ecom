import { ref, inject } from 'vue';
import type { Ref } from 'vue';

export default function useApi() {
    const axios: any = inject('axios')  // inject axios

    const isLoading: Ref<boolean> = ref(false);
    const fetchData: Ref<any> = ref();

    const callApi = (url: string) => {
        isLoading.value = true;
        axios
            .get(url)
            .then((response: any) => {
                fetchData.value = response.data;
            })
            .catch( (err: Error) => {
                console.log(err)
            })
            .finally(() => {
                isLoading.value = false;
            });
    }

    return {
        fetchData,
        isLoading,
        callApi,
    }
}