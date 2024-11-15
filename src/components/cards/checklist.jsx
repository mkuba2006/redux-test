import { collection, getDocs } from '@firebase/firestore';
import { firestore } from "../auth/firebase";


export const CheckList = async () => {
    const list = []
    const kolekcja = collection(firestore, "task_list");
    try {
        const dane = await getDocs(kolekcja);
        console.clear()
        dane.forEach(doc => {
            console.log(doc.id, doc.data());
            list.push(doc.id)
        });
        console.log(list);
    } catch (error) {
        console.error("Error:", error);
    }
};