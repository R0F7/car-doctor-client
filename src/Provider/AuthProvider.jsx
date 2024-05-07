import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            const userEmail = currentUser?.email || user?.email;
            const loggedInUser = { email: userEmail };

            setUser(currentUser);
            setLoading(false)
            // console.log('currentUser', currentUser);

            //if user exists then issue a token
            if (currentUser) {
                axios.post('https://car-doctor-server-sandy-ten.vercel.app/jwt', loggedInUser, { withCredentials: true })
                    .then(res => {
                        // console.log('token response', res.data);
                    })
            } else {
                axios.post('https://car-doctor-server-sandy-ten.vercel.app/logout', loggedInUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
            }

        });
        return () => {
            return unsubscribe();
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;