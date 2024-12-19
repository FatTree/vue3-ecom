import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { collection, doc, getFirestore } from 'firebase/firestore';
import { getCurrentUser, useDocument } from 'vuefire';
import { firebaseApp } from '@/plugins/firebase';
import type { User } from 'firebase/auth';
import type { ShippingInfoViewModel } from '@/models/viewModel';

export const useUserStore = defineStore('user', () => {
    const db = getFirestore(firebaseApp);
    const userUid = ref<string>('');
    const UserInfoCollec = collection(db, 'UserInfo');
    const info = ref();
    // const getInfo = async (uid: string) => {
    //     const userInfo = await useDocument(doc(UserInfoCollec, uid))
    //     console.log('userInfo: ');
    //     console.log(userInfo);
        
    //     info.value = userInfo;
    // }
    // const info = computed(async () => {
    //     const res = await useDocument(doc(UserInfoCollec, userUid.value))
    //     if(res) {
    //         return res;
    //     }
    // });
    // hDbCAKT1a4ZZF1Kcf547nGVL1Zy2
    
    
    
    return {
        info
    }
})
