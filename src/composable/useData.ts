import api from '@/utils/api';
import { ref } from 'vue';
import type { Ref } from 'vue';
import { useInfoStore } from '@/stores/infoStore';
import { type AxiosError, type AxiosRequestConfig } from 'axios';
import { InfoEnum } from '@/models/viewModel';
import { useI18n } from 'vue-i18n';

export enum HttpMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

export default function useData<T>() {
    const infoStore = useInfoStore();
    const { addToInfoList } = infoStore;
    const isReady: Ref<boolean> = ref(true);
    const isError: Ref<boolean> = ref(false);
    let data: Ref<T | undefined> = ref();
    const i18n = useI18n();
    const { t } = i18n;

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
            console.error('API Error:', (error as AxiosError).message);
            const AErr = error as AxiosError;
            addToInfoList(InfoEnum.ERROR, t('info.error') , AErr.status?.toString());
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