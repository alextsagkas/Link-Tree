import { createContext, useState } from "react";

import LinkList from "./components/LinkList";
import SocialMediaList from "./components/SocialMediaList";
import ErrorMessage from "./components/ErrorMessage";
import Logo from "./components/Logo";

export const errorContext = createContext({
  errorMessage: "",
  errorMessageHandler: (text) => {},
});

function App() {
  const [errorMessage, errorMessageHandler] = useState("");

  const errorCtx = {
    errorMessage: errorMessage,
    errorMessageHandler: errorMessageHandler,
  };

  return (
    <errorContext.Provider value={errorCtx}>
      <div className="bg-bgColor m-0 p-0 h-full min-w-[270px]">
        <ErrorMessage />
        <Logo />
        <LinkList />
        <SocialMediaList />
      </div>
    </errorContext.Provider>
  );
}

export default App;
