function SocialMediaItem({ link, icon }) {
  return (
    <li className="inline hover:scale-140 hover:ease-inOutCustom duration-300">
      <a href={link} target="_blank">
        <i className={`fa-xl ${icon} text-2xl text-textColor`} />
      </a>
    </li>
  );
}

export default SocialMediaItem;
