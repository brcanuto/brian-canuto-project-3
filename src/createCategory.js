import { FirebaseApp } from "@firebase/app";
import { getDatabase, set, ref, onValue, set } from "@firebase/database";

const createCategory = (paramter) => {
    const db = getDatabase(FirebaseApp);
    set(ref(db, "data/" +parameter), 0)
};

export {createCategory}