import {doc, getDoc, updateDoc, arrayUnion, addDoc } from '@firebase/firestore';
import { firestore } from "../auth/firebase";  
import { collection } from '@firebase/firestore';


export const addTaskToAlbum = async (userId, newTask) => {
    const userRef = doc(firestore, "test_user", userId);

    try {
        await updateDoc(userRef, {
            "tasks": arrayUnion(newTask)
        });
        console.log("Task added:", newTask);
        const updatedUserSnap = await getDoc(userRef);
        if (updatedUserSnap.exists()) {
            const updatedUserData = updatedUserSnap.data();
            console.log("Updated user data:", updatedUserData);
        } else {
            console.log("No such user!");
        }
    } catch (error) {
        console.error("Error:", error);
    }
};


export const ping_database = async () => {
    const ref = collection(firestore, "messages");
    try {
        await addDoc(ref, { message: 'i am testing 15.10' });
        console.log("Ping added successfully.");
    } catch (error) {
        console.error("Error adding ping:", error);
    }
};