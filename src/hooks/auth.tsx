import React, { createContext, ReactNode, useContext, useState } from "react";
import * as AuthSession from "expo-auth-session";

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
  signinWithGoogle(): Promise<void>;
}

interface IAuthorizationResponse {
  params: {
    access_token: string;
  };
  type: string;
}

const AuthContext = createContext({} as IAuth);

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User>({} as User);

  const signinWithGoogle = async () => {
    const CLIENT_ID =
      "350882021611-0q42tqrvkp0qe7k13epj7jg08dgacciu.apps.googleusercontent.com";
    const REDIRECT_ID = "https://auth.expo.io/@developerjunior/controlfinance";
    const RESPONSE_TYPE = "token";
    const SCOPE = encodeURI("profile email");
    const baseURL = "https://accounts.google.com/o/oauth2/v2/auth";

    const authUrl = `${baseURL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_ID}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

    try {
      const { type, params } = (await AuthSession.startAsync({
        authUrl,
      })) as IAuthorizationResponse;
      if (type === "success") {
        const response = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`
        );
        const userInfo = await response.json();

        //debug de desenvolvimento
        console.log({ userInfo });

        setUser({
          id: userInfo.id,
          email: userInfo.email,
          name: userInfo.given_name,
          photo: userInfo.picture,
        });
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signinWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
