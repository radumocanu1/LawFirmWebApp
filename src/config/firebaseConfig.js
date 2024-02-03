import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";




const firebaseConfig = {
    apiKey: "AIzaSyDp_orYIVzLMVi-ArqgGuFgBw5m4FZbvMU",
    authDomain: "lawfirm-b6f3c.firebaseapp.com",
    projectId: "lawfirm-b6f3c",
    storageBucket: "lawfirm-b6f3c.appspot.com",
    messagingSenderId: "644948142660",
    appId: "1:644948142660:web:a6f1074623a1358214aa11"
};

const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

const auth = getAuth(app);

export { db,app, auth};
