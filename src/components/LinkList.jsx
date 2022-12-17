import LinkItem from "./LinkItem";

function LinkList() {
  return (
    <section
      title="Link List Section"
      className="max-w-2xl min-w-xs block w-0.95 my-7 mx-auto"
    >
      <LinkItem
        link="https://cloud.iaps.info/s/FZW87xHtCofxZiY"
        text="jIAPS 2022"
        icon="fa-solid fa-note-sticky"
      />
      <LinkItem
        link="https://www.iaps.info/events/physics4peace/"
        text="Physics4Peace Campaign"
        icon="fa-solid fa-universal-access"
      />
      <LinkItem
        link="https://docs.google.com/forms/d/e/1FAIpQLSf6vZsVB1PNt2nff-LxGvQQ4gCNnFm8H-dLfTJ8jG6k1WgKVA/viewform"
        text="Alumni Program"
        icon="fa-solid fa-person-half-dress"
      />
      <LinkItem
        link="https://www.iaps.info"
        text="IAPS Website"
        icon="fa-solid fa-window-maximize"
      />
      <LinkItem
        link="https://newsletter.iaps.info/?p=subscribe&id=1"
        text="Sign Up to Our Newsletter"
        icon="fa-solid fa-newspaper"
      />
      <LinkItem
        link="https://iaps-3.creator-spring.com"
        text="Get Some Merch"
        icon="fa-solid fa-cart-shopping"
      />
      <LinkItem
        link="https://discord.gg/m8MyYQvb"
        text="IAPS Discord Server"
        icon="fa-brands fa-discord"
      />
    </section>
  );
}

export default LinkList;
