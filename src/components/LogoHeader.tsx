import logo from "../assets/logo.svg";

const LogoHeader = () => {
  return (
    <div
      style={{
        backgroundColor: "#1A237E",
        minHeight: "109px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={logo} alt="logo" />
    </div>
  );
};

export default LogoHeader;
