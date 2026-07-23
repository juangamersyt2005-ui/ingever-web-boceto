import logo from "../assets/logo/logo.png";

function Logo() {
  return (
    <img
      src={logo}
      alt="Ingever Asociados"
      className="h-11 w-auto transition-transform duration-300 hover:scale-[1.03] sm:h-12 lg:h-14"
    />
  );
}

export default Logo;
