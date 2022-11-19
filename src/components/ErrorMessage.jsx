import { useContext, useEffect } from "react";

import { errorContext } from "../App";

function ErrorMessage() {
  const { errorMessage, errorMessageHandler } = useContext(errorContext);

  useEffect(() => {
    if (errorMessage != "") {
      const timer = setTimeout(() => {
        errorMessageHandler("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  return errorMessage != "" ? (
    <section
      title="Error Section"
      className="mb-2 h-7 fixed z-10 top-0 left-0 right-0 opacity-90
            animate-slideInFromTop"
    >
      <div className="bg-slate-200 px-2  flex-wrap text-center whitespace-normal ">
        {errorMessage}
      </div>
    </section>
  ) : null;
}

export default ErrorMessage;
