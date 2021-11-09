import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  getIdToken,
  onAuthStateChanged,
} from "firebase/auth";

import initialAuthenticaton from "../Pages/Login/Firebase/Firebase.init";
import { LocationOn, Password } from "@mui/icons-material";

initialAuthenticaton();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [token, setToken] = useState("");
  const [admin, setAdmin] = useState(false);
  const auth = getAuth();
  const Googleprovider = new GoogleAuthProvider();

  const SignInUsingPassord = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // for name property save in firebase
        const newUser = { email, displayName: name };
        setUser(newUser);
        saveUser(email, name, "POST");
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
        // securely post api

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
        // google sign in secure joto bar loginkorok akbar e database a set hbe
        saveUser(user.email, user.displayName, "PUT");
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
        getIdToken(user).then((idToken) => {
          setToken(idToken);
        });
        // ...
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);
  const saveUser = (email, displayName, method) => {
    const newUser = { email, displayName };
    fetch("http://localhost:5000/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    }).then();
  };
  // secure amdin data for special email
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  return {
    user,
    isLoading,
    token,
    SignInUsingPassord,
    loginUser,
    admin,
    logOut,
    singInGoogle,
    authError,
  };
};
export default useFirebase;
