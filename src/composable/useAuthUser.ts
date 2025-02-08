import {
        getAuth, 
        createUserWithEmailAndPassword,    
        getRedirectResult,
        signInWithRedirect,
        signOut,
        type UserCredential,
        signInWithEmailAndPassword,
        onAuthStateChanged,
        type User,
    } from 'firebase/auth'

import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { getDoc, getFirestore, doc } from 'firebase/firestore';
import { firebaseApp } from '@/plugins/firebase';
import { getCurrentUser } from 'vuefire';
import { useInfoStore } from '@/stores/infoStore';
import { InfoEnum } from '@/models/viewModel';
import { i18n } from '@/i18n';



export const useAuthUser = () => {
    const auth = getAuth();
    const router = useRouter();

    const db = getFirestore(firebaseApp);
    const userInfo = ref();

    const {
        t
    } = i18n.global;

    const {
        addToInfoList
    } = useInfoStore();
    
    const errorMsg = ref();
    const isLogin = ref(false);
    const email = 'athem.lin0@test.com'
    const psw = 'aaaa123'

    const routerAction = () => {
        const redirect = router.currentRoute.value.query.redirect as string || '/';
        router.push(redirect);
    }

    const getUserInfo = async() => {
        const user = await getCurrentUser();
          if(user) {
            try {
              const userDoc = doc(db, 'UserInfo', user.uid);
              const userSnapshot = await getDoc(userDoc);
      
              if (userSnapshot.exists()) {
                userInfo.value = userSnapshot.data();
              } else {
                addToInfoList(InfoEnum.ERROR, t('info.userInfoError'));
              }
            } catch(err) {
              addToInfoList(InfoEnum.ERROR, t('info.userLoginError'), 'STATUS');
            }
          }
      }

    const signUp = (e: string, p: string) => {
        createUserWithEmailAndPassword(auth, e, p)
            .then( (userCre: UserCredential) => {
                const user = userCre.user;
                routerAction();
            }).catch( (err: Error) => {
                errorMsg.value = err;
                addToInfoList(InfoEnum.ERROR, err.message, 'STATUS');
            })
    }

    const signIn = (e: string, p: string) => {
        signInWithEmailAndPassword(auth, e, p)
            .then((userCredential) => {
                const username = userCredential.user?.displayName ? userCredential.user.displayName : userCredential.user?.email;
                addToInfoList(InfoEnum.INFO, `Hi! ( ^_^ ) ${username}`, 'STATUS');
                routerAction();
            })
            .catch((err) => {
                errorMsg.value = err;
                addToInfoList(InfoEnum.ERROR, err.message, 'STATUS');
            });
    }

    const checkUser = async () => {
        onAuthStateChanged(auth, async(user) => {
            if (user) {
                await getUserInfo()
            }
            isLogin.value = !!user;
        });
    }

    const userSignOut = async() => {
        await signOut(auth);
        routerAction();
        addToInfoList(InfoEnum.INFO, t('info.logout'), 'STATUS');
    }

    return {
        signUp,
        signIn,
        checkUser,
        userSignOut,
        getUserInfo,
        userInfo,
        errorMsg,
        isLogin,
    }

}
