import { auth } from '../config/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export const handleSignup = async (email, password, onSuccess) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        //await saveUserDataInAsyncStorage(user);
        console.log("user registered");

        // Apelează callback-ul de succes și furnizează utilizatorul
        onSuccess(user);
    } catch (error) {
        console.log(error);
        throw error;
        // Apelează callback-ul de eroare și furnizează eroarea
    }
}

export const handleLogin = async (email, password, onSuccess) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        //await saveUserDataInAsyncStorage(user);
        console.log("User signed in ");
        onSuccess(user);
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}