import { db } from "../app";
import { collection, getDocs } from "firebase/firestore";

export default async function getAllData(item) {
  var resultData = localStorage.getItem(item);
  if (resultData == null) {
    const querySnapshot = await getDocs(collection(db, item));
    let tempArray = new Array();
    querySnapshot.forEach((doc) => {
      tempArray.push(doc.data());
    });

    if (tempArray.length > 0) {
      localStorage.setItem(item, JSON.stringify(tempArray));
      resultData = localStorage.getItem(item);
    } else {
      console.log("No such document!");
    }
  }
  return resultData;
}
