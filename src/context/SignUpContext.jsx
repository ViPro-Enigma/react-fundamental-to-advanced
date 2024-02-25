import React, { useState } from "react";

export const SignUpContext = React.createContext({
  title: "",
  setTitle: () => {},
});

export const SignUpContextProvider = (props) => {
  const [stateTitle, setStateTitle] = useState("Hello World");

  return (
    <SignUpContext.Provider
      value={{ title: stateTitle, setTitle: setStateTitle }}
    >
      {props.children}
    </SignUpContext.Provider>
  );
};

export const SignUpContextConsumer = SignUpContext.Consumer;
