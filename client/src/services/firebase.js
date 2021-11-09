
import { collection, query, where, getDocs } from "firebase/firestore";

export const doesUsernameExist = async (username) => {
  const q = query(collection(db, "users"), where("username", "==", username));
  const querySnapshot = await getDocs(q);
  var AllUsersWithSameUsername = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    const user = doc.data();
    AllUsersWithSameUsername.push(user);
    console.log(AllUsersWithSameUsername);
    // console.log(doc.id, " => ", doc.data());
  });
  return AllUsersWithSameUsername;
};

export default doesUsernameExist;
