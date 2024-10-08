import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


import { addDoc, collection, doc, getDoc , updateDoc, arrayUnion } from '@firebase/firestore';
import { firestore } from "../auth/firebase";



const Add_CART = () => {
    const ref = collection(firestore, "messages")
    const isLogged = useSelector(state => state.auth.isLogged)

    useEffect(() => {
        console.log("Stan isLogged:", isLogged);
    }, [isLogged]);



    const ping_database = async (e) =>{
        try {
            addDoc('ping', 'i am testing')
        } catch {
            console.log(e);
        }
    }



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
        } catch (e) {
            console.error("Error:", e);
        }
    };
    
    const handleAddTask = () => {
        const userId = "user1";
        const newTask = {
            taskName: "task3",
            completed: false
        };
        addTaskToAlbum(userId, newTask);
    };

    return(
        <div>
            <Link to="/items" onClick={ping_database}>Create Folder</Link>
            \
            <button to="/items" onClick={handleAddTask}>zobacz</button>
        </div>
    )
}

export default Add_CART;