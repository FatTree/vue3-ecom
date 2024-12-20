import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { collection, getDoc, getFirestore, doc } from 'firebase/firestore';
import { getCurrentUser, useDocument } from 'vuefire';
import { firebaseApp } from '@/plugins/firebase';




export const useUserStore = defineStore('user', () => {
    const db = getFirestore(firebaseApp);
    const userInfo = ref();

    const getUserInfo = async() => {
        const user = await getCurrentUser();
            if(user) {
                try {
                    const userDoc = doc(db, 'UserInfo', user.uid); // 指定集合和 Document ID
                    const userSnapshot = await getDoc(userDoc);

                    if (userSnapshot.exists()) {
                        userInfo.value = userSnapshot.data(); // 將數據存入 userInfo
                    } else {
                        console.error('No such document!');
                    }
                } catch(err) {
                    console.log(err);
                }
        }
    }
    return {
        userInfo,
        getUserInfo
    }
})
