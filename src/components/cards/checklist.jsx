import { collection, getDocs } from '@firebase/firestore';
import { firestore } from "../auth/firebase";
import { doc, getDoc, updateDoc, deleteDoc } from '@firebase/firestore';

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



export const printItem = async (card) => {
    console.clear()
    console.log("Whole card object:");
    console.log(card.name);
    console.log(card.data);
    console.log(card.lista);

    const kolekcja = doc(firestore, "task_list", card.name); 
    
    try {
        const docSnap = await getDoc(kolekcja);
        if (docSnap.exists()) {
            const itemData = docSnap.data();
            const updatedLista = Array.isArray(itemData.tasks) ? [...itemData.tasks, 'x'] : ['x']; 
            await updateDoc(kolekcja, { tasks: updatedLista });
        } else {
            console.log("Item not found");
        }
    } catch (error) {
        console.error("Error:", error);
    }
};



export const DeleteItem = async (name) => {
    try {
        const itemRef = doc(firestore, "task_list", name);
        await deleteDoc(itemRef);
        console.log(`Usunięto ${name}`);
    } catch (error) {
        console.error("Próba nieudana:", error);
    }
};
