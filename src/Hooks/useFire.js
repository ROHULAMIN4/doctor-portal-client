import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";

import initialAuthenticaton from "../Pages/Login/Firebase/Firebase.init";
import { LocationOn, Password } from "@mui/icons-material";

initialAuthenticaton();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const auth = getAuth();
  const Googleprovider = new GoogleAuthProvider();

  const SignInUsingPassord = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // for name property save in firebase
        const newUser = { email, displayName: name };
        setUser(newUser);
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});

        // end save fireabase name property

        // const user = userCredential.user;
        setAuthError("");
        // redirec for  creat new regiter
        history.replace("/");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    setAuthError("");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setAuthError("");

        // auth redirect ar jonno login and ai khan a cahnage korte hoy
        const destionation = location?.state?.from || "/";
        history.replace(destionation);
        // ...
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // sing in google
  const singInGoogle = (location, history) => {
    signInWithPopup(auth, Googleprovider)
      .then((result) => {
        setIsLoading(true);
        setAuthError("");
        // history.replace("/");
        const destionation = location?.state?.from || "/";
        history.replace(destionation);
        const user = result.user;
        setUser(user);
        // ...
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  //   observed the state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // ...
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  return {
    user,
    isLoading,
    SignInUsingPassord,
    loginUser,
    logOut,
    singInGoogle,
    authError,
  };
};
export default useFirebase;
