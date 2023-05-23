import { firestore } from "../app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

export default async function addData(collection, id, data) {
  let dataResult = null;
  let dataError = null;

  await setDoc(doc(firestore, collection, id), data, {
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
