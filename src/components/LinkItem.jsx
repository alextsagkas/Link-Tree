function LinkItem({ link, text, icon }) {
  return (
    <a
      className="relative block mt-0 mb-3 mx-3 p-4 bg-accentColor text-bgColor 
      border-none rounded-lg text-base min-w-[240px]
      hover:bg-hoverColor hover:animate-bounceIn hover:scale-105"
      href={link}
      target="_blank"
    >
      <ul className="list-none p-0 m-0 flex justify-between items-center">
        <li className="inline whitespace-nowrap">
          <i className={`fa-2xl ${icon}`} />
        </li>
        <li className="inline font-medium text-center max-w-[65%]">{text}</li>
        <li className="inline whitespace-nowrap">
          <i className="fa-xl fa-solid fa-arrow-up-from-bracket"></i>
        </li>
      </ul>
    </a>
  );
}

export default LinkItem;
