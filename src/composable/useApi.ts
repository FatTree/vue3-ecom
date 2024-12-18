import { ref, inject } from 'vue';
import type { Ref } from 'vue';

export default function useApi() {
    const axios: any = inject('axios')  // inject axios

    const isLoading: Ref<boolean> = ref(false);
    const fetchData: Ref<any> = ref();

    const callApi = async (url: string) => {
        isLoading.value = true;
        try {
            console.log('call: '+url);
            const response = await axios.get(url);
            fetchData.value = response.data;
            console.log('assign data')
        } catch (error) {
            console.log(error)
        } finally {
            isLoading.value = false;
        }
        // axios
        //     .get(url)
        //     .then((response: any) => {
        //         fetchData.value = response.data;
        //     })
        //     .catch( (err: Error) => {
        //         console.log(err)
        //     })
        //     .finally(() => {
        //         isLoading.value = false;
        //     });
    }

    return {
        fetchData,
        isLoading,
        callApi,
    }
}