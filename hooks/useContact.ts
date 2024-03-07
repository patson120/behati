import { database } from "@/config/firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

import { ContactType } from "@/types";
import moment from "moment";


const useContact = () => {

    const save = async (contact: ContactType) => {
        // Add a new document in collection CONTACT
        const myContact = collection(database, 'CONTACT');

        // Add the document to the CONTACT collection
        const newDocRef = await addDoc(myContact, contact);
        contact.id = `${newDocRef.id}`;
        contact.createdAt = moment().format()
        contact.updatedAt = moment().format()
        await setDoc(doc(database, 'CONTACT', `${contact.id}`), { ...contact });
        return contact
    }
    return { save }
}

export default useContact