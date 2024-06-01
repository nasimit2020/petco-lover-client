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
          <Link href="/dashboard" className="btn btn-neutral">
            {userInfo?.name}
          </Link>

          <button onClick={handleLogout} className="btn btn-secondary">
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
