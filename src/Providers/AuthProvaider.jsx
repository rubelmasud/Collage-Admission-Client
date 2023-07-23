import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from './../Firebase/firebase_config';


export const AuthContext = createContext(null)
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [Loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const SignInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const signInGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const signInGithub = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }


    const LogOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const resetPassword = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log('Logged in user:', currentUser);
                setUser(currentUser);
            } else {
                console.log('User is not logged in.');
                setUser(null);
            }
            setLoading(false);
        });

        return () => {
            unSubscribe();
        };
    }, []);



    const authInfo = {
        user,
        Loading,
        createUser,
        SignInUser,
        LogOut,
        updateUserProfile,
        resetPassword,
        signInGoogle,
        signInGithub
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;