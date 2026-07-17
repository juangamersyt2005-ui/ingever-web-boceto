import logo from "../assets/logo/logo.png";

function Logo() {
  return (
    <img
      src={logo}
      alt="Ingever Asociados"
      className="h-18 transition-transform duration-500 hover:scale-105"
    />
  );
}

export default Logo;