import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addDoc, collection, doc, getDoc, updateDoc, arrayUnion } from '@firebase/firestore';
import { firestore } from "../auth/firebase";

const Add_CART = () => {
    const ref = collection(firestore, "messages");
    const isLogged = useSelector(state => state.auth.isLogged);

    useEffect(() => {
        console.log("Stan isLogged:", isLogged);
    }, [isLogged]);

    const ping_database = async () => {
        try {
            await addDoc(ref, { message: 'i am testing 15.10' });
            console.log("Ping added successfully.");
        } catch (error) {
            console.error("Error adding ping:", error);
        }
    };





    const addTaskToAlbum = async (userId, newTask) => {
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
    
    const handleAddTask = () => {
        const userId = "user1";
        const newTask = {
            taskName: "task5",
            completed: false
        };
        addTaskToAlbum(userId, newTask);
    };











    

    return (
        <div>
            <Link to="/items" onClick={ping_database}>Create Folder</Link>
            <button onClick={handleAddTask}>zobacz</button>
        </div>
    );
}

export default Add_CART;
