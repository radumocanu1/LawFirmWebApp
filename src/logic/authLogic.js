import { auth } from '../config/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { db } from '../config/firebaseConfig';
import { collection, addDoc,getDocs, query, where } from 'firebase/firestore';


const getEmailFromFireStore = async (username) => {

        const usersCollection = collection(db, 'user');
        const q = query(usersCollection, where('username', '==', username));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.size > 0) {
            const email = querySnapshot.docs[0].data().email;
            return email;
        } else {
            return null;
        }

};
const  doesUsernameExist = async (username) => {
        const usersCollection = collection(db, 'user');
        const q = query(usersCollection, where('username', '==', username));
        const querySnapshot = await getDocs(q);
        return querySnapshot.size > 0;
    };
export const handleSignup = async (email, password, username, onSuccess) => {
        if (await doesUsernameExist(username)){
            throw Error("username already exists!")
        }
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await addDoc( collection(db, 'user'), {
            username: username,
            email: email,
        });
        const user = userCredential.user;
        onSuccess(user);
}

export const handleLogin = async (username, password, onSuccess) => {
        const email = await getEmailFromFireStore(username);
        if (email === null)
        {
            throw Error("username doesn't exist!");
        }
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        onSuccess(user);
        return email;

}


