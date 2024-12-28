import { collection, getDocs } from '@firebase/firestore';
import { firestore } from "../auth/firebase";
import { doc, getDoc, updateDoc } from '@firebase/firestore';

export const CheckList = async () => {
    const list = []
    const kolekcja = collection(firestore, "task_list");
    
    try {
        const dane = await getDocs(kolekcja);
        dane.forEach(doc => {
            list.push([doc.id, doc.data()])
        });
        return list
    } catch (error) {
        console.error("Error:", error);
        return []
    }
};



export const printItem = async (x) => {
    const kolekcja = doc(firestore, "task_list", x); 
    
    try {
        const docSnap = await getDoc(kolekcja);
        if (docSnap.exists()) {
            const itemData = docSnap.data();
            const updatedLista = Array.isArray(itemData.tasks) ? [...itemData.tasks, 'x'] : ['x']; 
            await updateDoc(kolekcja, { tasks: updatedLista });
            console.log("Item updated successfully:", itemData);
        } else {
            console.log("Item not found");
        }
    } catch (error) {
        console.error("Error:", error);
    }
};