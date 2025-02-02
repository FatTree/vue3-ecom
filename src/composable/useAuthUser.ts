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



export const useAuthUser = () => {
    const auth = getAuth();
    const router = useRouter();
    
    const errorMsg = ref();
    const isLogin = ref(false);
    const email = 'athem.lin0@test.com'
    const psw = 'aaaa123'

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

    // const db = getFirestore(firebaseApp);
    // const userInfo = ref();

    const checkUser = () => {
        console.log('checkUser()')
        onAuthStateChanged(auth, async(user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                console.log('signed in: ',user)
                // try {
                //     const userDoc = doc(db, 'UserInfo', user.uid); // 指定集合和 Document ID
                //     const userSnapshot = await getDoc(userDoc);

                //     if (userSnapshot.exists()) {
                //         userInfo.value = userSnapshot.data(); // 將數據存入 userInfo
                //         console.log('userInfo value');
                        
                //         console.log(userInfo.value);
                        
                //     } else {
                //     console.error('No such document!');
                //     }
                // } catch(err) {
                //     console.log(err);
                // }
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
        isLogin,
    }

}
