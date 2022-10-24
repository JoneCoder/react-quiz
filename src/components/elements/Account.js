import '../../assets/css/Account.modules.css';
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function Account(){
  const {currentUser, logout} = useAuth();

    return (
    <div className="account">
      {currentUser? (
    <>
        <span className="material-icons-outlined" title="Account">account_circle</span>
        <span>{currentUser.displayName}</span>
        <span class="material-icons-outlined" onClick={logout} title="Logout"> logout </span>
    </>
      ) : (
        <>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        </>
      )}
  </div>
  );
}