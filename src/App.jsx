import { createContext, useEffect, useState } from "react";

import LinkList from "./components/LinkLists";
import SocialMediaList from "./components/SocialMediaList";
import ErrorMessage from "./components/ErrorMessage";
// import Logo from "./components/Logo";

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

  useEffect(() => {
    if (errorMessage != "") {
      const timer = setTimeout(() => {
        errorMessageHandler("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  return (
    <errorContext.Provider value={errorCtx}>
      <div className="bg-bgColor m-0 p-0 h-full min-w-[270px]">
        {errorMessage != "" ? (
          <ErrorMessage errorMessage={errorMessage} />
        ) : null}

        {/* <Logo /> */}
        <div className="block mx-5 text-textColor text-lg font-bold text-center">
          International Association of Physics Students
        </div>
        <div className="max-w-2xl min-w-xs block w-0.95 my-7 mx-auto">
          <LinkList />
        </div>
        <SocialMediaList />
      </div>
    </errorContext.Provider>
  );
}

export default App;
