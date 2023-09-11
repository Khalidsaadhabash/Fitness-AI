import { createContext, useState, useContext, useEffect } from "react"
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth";
import { auth } from "../firebase"

interface AuthContextProps {
  currentUser: any;
  setCurrentUser: (user: any) => void;
  signinWithGoogle: () => void;
  logout: () => void;
}

// create context
const AuthContext = createContext<AuthContextProps | null>(null);

// Provider Context
export const AuthProvider = ({children  }) => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // signin with google
  const signinWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider)
  }

  // signout
  const logout = () => signOut(auth);

  const value: AuthContextProps = {
    currentUser,
    setCurrentUser,
    signinWithGoogle,
    logout
  }

  // set currentUser
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(AuthContext)!;
}