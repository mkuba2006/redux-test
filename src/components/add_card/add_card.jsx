import { Link } from "react-router-dom";
import {useSelector } from "react-redux";
import { useEffect } from "react";
import { addTaskToAlbum, ping_database } from "./functions";

const Add_CART = () => {
    const isLogged = useSelector(state => state.auth.isLogged);

    useEffect(() => {
        console.log("Stan isLogged:", isLogged);
    }, [isLogged]);

    const handleAddTask = () => {
        const userId = "user1";
        const newTask = {
            taskName: "task5",
            completed: false
        };
        addTaskToAlbum(userId, newTask);
    };

    return (
        <div id='space'>
            <Link to="/items" onClick={ping_database}>Create Folder</Link>
            <button onClick={handleAddTask}>zobacz</button>
        </div>
    );
}

export default Add_CART;
