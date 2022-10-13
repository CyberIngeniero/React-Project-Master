import BoltIcon from "@mui/icons-material/Bolt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Navbar() {
  return (
    <nav className="navbar" style={{ backgroundColor: "#e3f2fd" }}>
      <div className="container-fluid">
        <a className="navbar-brand" href={0} style={{fontWeight:"bold"}}>
          <BoltIcon style={{ paddingRight: "3px" }} />
          Three Pics
        </a>
        <div className="avatar" style={{ float: "right" }}>
          <AccountCircleIcon fontSize="large"/>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
