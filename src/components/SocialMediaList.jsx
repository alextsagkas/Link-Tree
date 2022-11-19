import SocialMediaItem from "./SocialMediaItem";

function SocialMediaList() {
  return (
    <ul
      className="my-7 mx-auto p-0 w-[85%] 
      grid grid-rows-1 grid-flow-col gap-x-8 gap-y-2
     max-sm:grid-rows-2 max-sm:grid-flow-col max-sm:gap-x-8 max-sm:gap-y-2
      list-none justify-center flex-wrap"
    >
      <SocialMediaItem
        link={"https://www.facebook.com/iapsfb"}
        icon="fa-brands fa-facebook"
      />
      <SocialMediaItem
        link={"https://twitter.com/IAPS_physics"}
        icon="fa-brands fa-twitter"
      />
      <SocialMediaItem
        link={"https://www.instagram.com/iaps_physics/"}
        icon="fa-brands fa-instagram"
      />
      <SocialMediaItem
        link={"https://www.linkedin.com/company/iaps-physics/"}
        icon="fa-brands fa-linkedin"
      />
      <SocialMediaItem
        link={"mailto:pr@iaps.info"}
        icon="fa-solid fa-envelope icon"
      />
      <SocialMediaItem
        link={"https://www.youtube.com/channel/UCn1qbebAtgGFt5LzTH77LjA"}
        icon="fa-solid fa-brands fa-youtube icon"
      />
    </ul>
  );
}

export default SocialMediaList;
