import React from "react";
import { Login } from "./login";
import { ProfileProps } from "./profile";

type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>;
};

export const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name="Abdulxoliq" />;
  } else {
    return <Login />;
  }
};
