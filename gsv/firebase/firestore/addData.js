import firebase_app from "../config";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore(firebase_app);
export default async function addData(collection, id, data) {
  let dataResult = null;
  let dataError = null;

  await setDoc(doc(db, collection, id), data, {
    merge: true,
  })
    .then(() => {
      dataResult = "Successful";
    })
    .catch((error) => {
      dataError = `Unsuccessful returned error ${error}`;
    });

  return { dataResult, dataError };
}
