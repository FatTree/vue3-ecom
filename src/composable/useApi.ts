import api from '@/utils/api';
import { ref, inject } from 'vue';
import type { Ref } from 'vue';
import { useErrorStore } from '@/stores/errorStore';
import { type AxiosError, type AxiosRequestConfig } from 'axios';

enum HttpMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

export default function useApi() {
    // type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
    const axios: any = inject('axios')  // inject axios
    const errorStore = useErrorStore();
    const { addToErrorList } = errorStore;
    const isDone: Ref<boolean> = ref(false);
    const isLoading: Ref<boolean> = ref(false);
    const fetchData: Ref<any> = ref();

    const callApi = async <T>(
        url: string,
        method: HttpMethod = HttpMethod.GET,
        data: Record<string, any> = {},
        config: AxiosRequestConfig = {}
    ) => {
        isLoading.value = true;
        try {
            const response = await api.request<T>({
                url,
                method,
                data: method !== 'GET' ? data : undefined,
                params: method === 'GET' ? data : undefined,
                ...config,
            });
            fetchData.value = response;
        } catch (error) {
            console.error('API Error:', (error as AxiosError).message);console.log(error)
            const AErr = error as AxiosError;
            addToErrorList(AErr.message, AErr.status?.toString());
        } finally {
            isLoading.value = false;
        }
    };

    return {
        fetchData,
        isLoading,
        callApi,
    }
}