import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ErrorViewModel } from '@/models/viewModel';

export const useErrorStore = defineStore('error', () => {
    const errorList = ref<ErrorViewModel[]>([]);

    const addToErrorList = (message: string, code?: string) => {
        const id = (Math.random() + new Date().getTime()).toString(32).slice(0,8);
        errorList.value.push({id, code, message});
    }

    const removeFromErrorList = (id: string) => {
        const index = errorList.value.findIndex( (e: ErrorViewModel) => e.id === id );
        if (index !== -1) {
            errorList.value.splice(index, 1);
        }
    }
    return { 
        errorList,
        addToErrorList,
        removeFromErrorList
    }
})
