import api from '@/utils/api';
import { ref } from 'vue';
import type { Ref } from 'vue';
import { useErrorStore } from '@/stores/errorStore';
import { type AxiosError, type AxiosRequestConfig } from 'axios';

export enum HttpMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

export default function useData<T>() {
    const errorStore = useErrorStore();
    const { addToErrorList } = errorStore;
    const isReady: Ref<boolean> = ref(true);
    const isError: Ref<boolean> = ref(false);
    let data: Ref<T | undefined> = ref();

    const fetchedData = async(
        url: string,
        method: HttpMethod = HttpMethod.GET,
        data: Record<string, any> = {},
        config: AxiosRequestConfig = {}
    ): Promise<T> => {
        isReady.value = true;
        try {
            const response = await api.request<T>({
                url,
                method,
                data: method !== HttpMethod.GET ? data : undefined,
                params: method === HttpMethod.GET ? data : undefined,
                ...config,
            });
            data.value = response;
        } catch (error) {
            isError.value = true;
            console.error('API Error:', (error as AxiosError).message);console.log(error)
            const AErr = error as AxiosError;
            addToErrorList(AErr.message, AErr.status?.toString());
        } finally {
            isReady.value = false;
            return data.value as T;
        }
    };

    return {
        fetchedData,
        isReady,
        isError
    }
}