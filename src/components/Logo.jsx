import logo from "../assets/logo/logo.png";

function Logo({ className = "" }) {
  return (
    <img
      src={logo}
      alt="Ingever Asociados"
      className={`w-auto transition-all duration-500 ease-out hover:scale-[1.03] ${className}`}
    />
  );
}

export default Logo;
