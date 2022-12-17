import { useContext } from "react";

import { errorContext } from "../App";

function LinkItem({ link, text, icon }) {
  const { errorMessageHandler } = useContext(errorContext);

  const shareHandler = async () => {
    if (navigator.share) {
      errorMessageHandler("");
      await navigator
        .share({
          title: text,
          text: text,
          url: link,
        })
        .catch(() => {
          errorMessageHandler("Failed to share, please try again");
        });
    } else {
      errorMessageHandler("The browser does not support the Web Share API");
    }
  };

  return (
    <ul
      className="mt-0 mb-3 mx-3 p-4 bg-accentColor text-bgColor
      border-none rounded-lg text-base min-w-[240px]
      hover:bg-hoverColor hover:animate-bounceIn hover:scale-105
      list-none m-0 flex justify-between items-center"
    >
      <a href={link} target="_blank">
        <li className="inline whitespace-nowrap">
          <i className={`fa-2xl ${icon}`} />
        </li>
      </a>
      <a href={link} target="_blank">
        <li className="mx-3 font-medium text-center">{text}</li>
      </a>
      <button
        onClick={shareHandler}
        className="inline whitespace-nowrap "
        type="button"
        title="Share Link"
      >
        <i className="fa-xl fa-solid fa-arrow-up-from-bracket"></i>
      </button>
    </ul>
  );
}

export default LinkItem;
