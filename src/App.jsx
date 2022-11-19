import LinkList from "./components/LinkLists";
import SocialMediaList from "./components/SocialMediaList";

function App() {
  return (
    <div className="bg-bgColor m-0 p-0 min-h-24 min-w-[270px]">
      <img
        className="block w-20 h-20 mt-1 mx-auto mb-3"
        src="./images/iaps-logo.png"
        alt="IAPS Logo"
      />
      <div className="block mx-5 text-textColor text-lg font-bold text-center">
        International Association of Physics Students
      </div>
      <div className="max-w-2xl min-w-xs block w-0.95 my-7 mx-auto">
        <LinkList />
      </div>
      <SocialMediaList />
    </div>
  );
}

export default App;
