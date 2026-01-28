/* eslint-disable */
import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();
const initailState = {
  user: null,
  isAuthentication: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: action.payload,
        isAuthentication: true,
      };
    case "logout":
      return {
        ...state,
        user: null,
        isAuthentication: false,
      };

    default:
      break;
  }
}
const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function AuthProvider({ children }) {
  const [{ user, isAuthentication }, dispatch] = useReducer(
    reducer,
    initailState
  );

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: "login", payload: FAKE_USER });
  }
  function logout() {
    dispatch({ type: "logout" });
  }
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}
function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("Something went wromg");
  return context;
}
export { AuthProvider, useAuth };
