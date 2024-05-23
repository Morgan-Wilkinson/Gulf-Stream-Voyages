import { db } from "../app";
import { doc, getDoc } from "firebase/firestore";

export default async function getData(collection, id) {
  var resultData = localStorage.getItem(collection);
  if (resultData == null) {
    const docSnap = await getDoc(doc(db, collection, id));

    if (docSnap.exists()) {
      localStorage.setItem(collection, JSON.stringify(docSnap.data()));
      resultData = localStorage.getItem(collection);
    } else {
      console.log("No such document!");
    }
  }
  return resultData;
}
