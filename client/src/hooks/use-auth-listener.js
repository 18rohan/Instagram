import { useState, useEffect, useContext } from "react";
import FirebaseContext from "../context/firebase.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const useAuthListener = (props) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    const listener = onAuthStateChanged((authUser) => {
      console.log("AUTH USER:->use-auth-listener-> ", authUser);
      // If user exists then, we will store the user in the localStorage
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        // We dont have an authuser, hence we cleared the localstorage
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });
    return () => listener();
  }, [firebase]);
  return { user };
};

export default useAuthListener;
