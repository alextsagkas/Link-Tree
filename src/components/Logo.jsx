import IapsLogo from "/images/iaps-logo.png";

function Logo() {
  return (
    <section>
      <img
        className="block w-20 h-13 mx-auto mt-8 mb-3"
        src="/images/iaps-logo.png"
        alt={IapsLogo}
      />
      <div className="block mx-5 text-textColor text-lg font-bold text-center">
        International Association of Physics Students
      </div>
    </section>
  );
}

export default Logo;
