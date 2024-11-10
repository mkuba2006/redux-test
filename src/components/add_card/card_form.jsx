import { Input, Button, Box } from "@chakra-ui/react";
import { useState } from "react";
import { addDoc, collection, doc, setDoc } from '@firebase/firestore';
import { firestore } from "../auth/firebase";
import './list.css';

const Form_card = () => {
    const [listName, setListName] = useState(""); 
    const [deadline, setDeadline] = useState(""); 

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        
        const taskName = listName.trim();
        if (taskName === "") return; // Prevent creating an empty task list
        
        try {
            // Create or update the document for the task list with taskName
            const taskRef = doc(firestore, "task_list", taskName); // Document with the task name
            const newTask = {
                deadline: deadline,
                createdAt: new Date()
            };
            
            // Set the document with the task data
            await setDoc(taskRef, newTask); 
            console.log("Added task:", newTask);

        } catch (error) {
            console.error("Error adding document:", error);
        }
    };

    return (
        <div id="form_box">
            <form id="form_list" onSubmit={handleFormSubmit}>
                <h1>Compete Data</h1>
                <Input 
                    placeholder="List Name" 
                    value={listName} 
                    onChange={(e) => setListName(e.target.value)} 
                />
                <Box borderRadius="md" borderWidth="1.5px" id="box">
                    <label htmlFor="date">Deadline:</label>
                    <input 
                        type="date" 
                        id="date" 
                        name="date" 
                        value={deadline} 
                        onChange={(e) => setDeadline(e.target.value)} 
                    />
                </Box>
                <Button variant="outline" type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default Form_card;
