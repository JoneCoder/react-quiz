import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
  } from "firebase/auth";

import React, {useContext, useState, useEffect} from "react";
import '../firebase';

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}){
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();


    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          setCurrentUser(user);
          setLoading(false);
        });
    
        return unsubscribe;
      }, []);


    async function signup(email, password, username){
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password);

        //update profile
        const user = auth.currentUser;
        await updateProfile(user, {displayName: username});
        setCurrentUser({...user});
    }

   // login function
  function login(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  }

   // logout function
  function logout() {
    const auth = getAuth();
    return signOut(auth);
  }
    
    const value = {currentUser, signup, login, logout};
    
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}