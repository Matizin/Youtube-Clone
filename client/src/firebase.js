import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyC6x1JfgNvmnFSWD1-8hiHbb9MGDxHEl_8",
  authDomain: "video-app-48c76.firebaseapp.com",
  projectId: "video-app-48c76",
  storageBucket: "video-app-48c76.appspot.com",
  messagingSenderId: "856095161959",
  appId: "1:856095161959:web:155c12f4d318085bcedec2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;