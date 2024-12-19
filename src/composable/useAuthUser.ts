import { useUserStore } from '@/stores/userStore';
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

import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

import { getCurrentUser, useDocument } from 'vuefire';
import { collection, doc, getFirestore } from 'firebase/firestore';
import { firebaseApp } from '@/plugins/firebase';



export const useAuthUser = () => {
    const auth = getAuth();
    const router = useRouter();
    
    const errorMsg = ref();
    const isLogin = ref(false);
    const email = 'athem.lin0@test.com'
    const psw = 'aaaa123'

    const db = getFirestore(firebaseApp);
    const UserInfoCollec = collection(db, 'UserInfo');

    const routerAction = () => {
        const redirect = router.currentRoute.value.query.redirect as string || '/';
        router.push(redirect);
    }

    const signUp = (e: string, p: string) => {
        createUserWithEmailAndPassword(auth, e, p)
            .then( (userCre: UserCredential) => {
                const user = userCre.user;
                console.log(`user`, user);
                routerAction();
            }).catch( (err: Error) => {
                console.log(err)
                errorMsg.value = err;
            })
    }

    const signIn = (e: string, p: string) => {
        console.log('sign in')
        signInWithEmailAndPassword(auth, e, p)
            .then((userCredential) => {
                // const user = userCredential.user;
                // currentUser.value = userCredential.user;
                routerAction();
            })
            .catch((err) => {
                console.log(err)
                errorMsg.value = err;
            });
    }

    const checkUser = () => {
        onAuthStateChanged(auth, async(user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                console.log('signed in: ',user)
            } else {
                console.log('user is signout')
            }
            isLogin.value = !!user;
        });
    }

    const userSignOut = async() => {
        await signOut(auth);
        routerAction();
        console.log('signout');
    }

    return {
        signUp,
        signIn,
        checkUser,
        userSignOut,
        errorMsg,
        isLogin
    }

}
