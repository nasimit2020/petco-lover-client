import { getUserInfo, removeUser } from "@/utils/authService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const AuthButton = () => {
  const userInfo = getUserInfo();
  const router = useRouter();
  // console.log(userInfo);

  const handleLogout = () => {
    removeUser();
    toast.success("User Logout Successfully!!!");
    router.push("/login");
  };

  return (
    <>
      {userInfo ? (
        <>
          <Link href="/dashboard" className="btn btn-accent mr-2">
            {userInfo?.name}
          </Link>

          <button onClick={handleLogout} className="btn btn-error">
            Logout
          </button>
        </>
      ) : (
        <Link href="/login" className="btn btn-accent">
          Login
        </Link>
      )}
    </>
  );
};

export default AuthButton;
