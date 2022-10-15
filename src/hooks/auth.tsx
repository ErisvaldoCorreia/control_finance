import React, { createContext, ReactNode, useContext } from "react";

interface Props {
  children: ReactNode;
}

type User = {
  id: string;
  name: string;
  email: string;
  photo?: string;
};

interface IAuth {
  user: User;
}

const AuthContext = createContext({} as IAuth);

export function AuthProvider({ children }: Props) {
  const user: User = {
    id: "123456",
    name: "Erisvaldo Correia",
    email: "erisvaldo@email.com",
  };

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
