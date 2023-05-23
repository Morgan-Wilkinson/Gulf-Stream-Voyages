import { db } from "../app";
import { doc, getDoc } from "firebase/firestore";

export default async function getData(collection, id) {
  const docSnap = await getDoc(doc(db, collection, id));
  var resultData;
  if (docSnap.exists()) {
    resultData = docSnap.data();
    console.log("Document data:", resultData);
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }

  return resultData;
}
