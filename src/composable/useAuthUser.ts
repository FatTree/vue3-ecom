import {
        getAuth, 
        createUserWithEmailAndPassword,    
        getRedirectResult,
        signInWithRedirect,
        signOut,
        type UserCredential,
        signInWithEmailAndPassword,
        onAuthStateChanged,
    } from 'firebase/auth'


export const useAuthUser = () => {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    const email = 'athem.lin0@test.com'
    const psw = 'aaaa123'
    const signUp = () => {
        createUserWithEmailAndPassword(auth, email, psw)
            .then( (userCre: UserCredential) => {
                const user = userCre.user;
                console.log(`user`, user);
            }).catch( (err: Error) => {
                console.log(err)
            })
    }

    const signIn = () => {
        console.log('sign in')
        signInWithEmailAndPassword(auth, email, psw)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
            })
            .catch((err) => {
                console.log(err)
            });
    }

    const checkUser = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;
                console.log('signed in: ',user)
            } else {
              // User is signed out
              // ...
                console.log('user is signout')
            }
        });
    }

    const userSignOut = () => {
        signOut(auth)
        console.log('signout')
    }

    return {
        signUp,
        signIn,
        checkUser,
        userSignOut
    }

}
