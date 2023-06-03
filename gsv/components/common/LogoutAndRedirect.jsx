import Image from "next/image";
import { useRouter } from "next/navigation";
import { Logout } from "../../firebase/app";
import { useContext } from "react";
import { UserContext } from "../../pages/_app";

export default function LogoutAndRedirect() {
  const router = useRouter();
  const userContext = useContext(UserContext);

  return (
    <button
      type="submit"
      onClick={() => {
        userContext.updateUser({});
        router.push("/");
        Logout();
      }}
      className="button px-30 fw-400 text-14 -blue-1 bg-blue-1 h-50 text-white"
    >
      Logout
    </button>
  );
}
