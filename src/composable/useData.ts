import api from '@/utils/api';
import { ref, inject } from 'vue';
import type { Ref } from 'vue';
import { useErrorStore } from '@/stores/errorStore';
import { type AxiosError, type AxiosRequestConfig } from 'axios';

export enum HttpMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

type ResponseModel<T> = {
    data: T
    isError: boolean
}

export default function useData<T>() {
    const errorStore = useErrorStore();
    const { addToErrorList } = errorStore;
    const isDone: Ref<boolean> = ref(true);
    const isLoading: Ref<boolean> = ref(false);
    const isError: Ref<boolean> = ref(false);
    const data: Ref<T | undefined> = ref();

    const fetchedData = async(
        url: string,
        method: HttpMethod = HttpMethod.GET,
        data: Record<string, any> = {},
        config: AxiosRequestConfig = {}
    ): Promise<T> => {
        isLoading.value = true;
        isDone.value = false;
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
            console.error('API Error:', (error as AxiosError).message);console.log(error)
            const AErr = error as AxiosError;
            addToErrorList(AErr.message, AErr.status?.toString());
            isError.value = true;
        } finally {
            isLoading.value = false;
            isDone.value = true;
            return data.value;
        }
    };

    return {
        fetchedData,
        data,
        isDone,
        isLoading,
        isError
    }
}