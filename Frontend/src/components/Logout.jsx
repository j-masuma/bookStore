import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

function Logout() {
    const [authUser, setAuthUser] = useAuth();
    const handleLogout=()=>{
        try {
            setAuthUser({
                ...authUser,
                user :  null
            });
            localStorage.removeItem("user");
            toast.success("Logged out successfully!!!");
            setTimeout(()=>{
                window.location.reload();
            },2000)
           
            
        } catch (error) {
            toast.error("Error Logout : " + error.message);
            setTimeout(()=>{},2000);
        }
    }
  return (
    <div>
      <button 
      className="btn btn-sm btn-error"
      onClick={handleLogout}
      >Logout</button>
    </div>
  )
}

export default Logout
