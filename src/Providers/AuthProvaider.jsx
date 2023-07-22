import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from './../Firebase/firebase_config';


export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [Loading, setLoading] = useState(true)

    console.log(user);
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const SignInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(email, password)
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
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;