function ErrorMessage({ errorMessage }) {
  return (
    <div
      className="mb-2 h-7 fixed z-10 top-0 left-0 right-0 opacity-90
            animate-slideInFromTop"
    >
      <div className="bg-slate-200 px-2  flex-wrap text-center whitespace-normal ">
        {errorMessage}
      </div>
    </div>
  );
}

export default ErrorMessage;
