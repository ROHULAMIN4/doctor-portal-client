import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.con";

const initialAuthenticaton = () => {
  initializeApp(firebaseConfig);
};
export default initialAuthenticaton;
