import { Input, Button, Box } from "@chakra-ui/react";
import { useState } from "react";
import { doc, setDoc } from '@firebase/firestore';
import { firestore } from "../auth/firebase";
import { Link,useNavigate  } from "react-router-dom";
import './list.css';

const Form_card = () => {
    const [listName, setListName] = useState(""); 
    const [deadline, setDeadline] = useState(""); 
    const navigate = useNavigate();
    
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        
        const taskName = listName.trim();
        if (taskName === "") return; 
        
        try {
            const taskRef = doc(firestore, "task_list", taskName);
            const deadlineDate = new Date(deadline);
            const newTask = {
                name: listName,
                day: deadlineDate.getDate(),
                month: deadlineDate.getMonth() + 1, 
                year: deadlineDate.getFullYear(),
                tasks: []
            };
            await setDoc(taskRef, newTask); 
            console.log("Added task:", newTask);
            console.log( "Day of the month:", deadlineDate.getDate(),  "Month:", deadlineDate.getMonth() + 1,  "Year:", deadlineDate.getFullYear() );
            navigate('/items')
        } catch (error) {
            console.error("Error adding document:", error);
        }
    };
    

    return (
        <div id="form_box">
            <form id="form_list" onSubmit={handleFormSubmit}>
                <h1>Compete Data</h1>
                <Input placeholder="List Name" value={listName} onChange={(e) => setListName(e.target.value)} />
                <Box borderRadius="md" borderWidth="1.5px" id="box">
                    <label htmlFor="date">Deadline:</label>
                    <input  type="date" id="date" name="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
                </Box>
                <Button variant="outline" type="submit" >Submit</Button>
            </form>
        </div>
    );
};

export default Form_card;
