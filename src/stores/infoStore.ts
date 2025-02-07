import { ref } from 'vue'
import { defineStore } from 'pinia'
import { type InfoViewModel, InfoEnum } from '@/models/viewModel';

export const useInfoStore = defineStore('info', () => {
    const infoList = ref<InfoViewModel[]>([]);

    const addToInfoList = (type: InfoEnum, message: string, code?: string) => {
        const id = (Math.random() + new Date().getTime()).toString(32).slice(0,8);
        infoList.value.push({id, type, code, message});
    }

    const removeFromInfoList = (id: string) => {
        const index = infoList.value.findIndex( (e: InfoViewModel) => e.id === id );
        if (index !== -1) {
            infoList.value.splice(index, 1);
        }
    }
    return { 
        infoList,
        addToInfoList,
        removeFromInfoList
    }
})
