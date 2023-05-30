import Image from "next/image";
import { useRouter } from "next/navigation";
import { auth, logout } from "../../../firebase/app";

const Sidebar = () => {
  const router = useRouter();

  function logoutAndRedirect() {
    logout();
    router.push("/");
  }
  const sidebarData = [
    {
      icon: "/img/dashboard/sidebar/canoe.svg",
      title: "Manage Cruise",
      links: [
        {
          title: "Add a Boat",
          href: "#",
        },
        {
          title: "Add Cruise",
          href: "#",
        },
        {
          title: "Recovery",
          href: "#",
        },
      ],
    },
  ];

  return (
    <>
      <div className="sidebar -dashboard" id="vendorSidebarMenu">
        <div className="sidebar__item ">
          <a
            href="#"
            className="sidebar__button d-flex items-center text-15 lh-1 fw-500"
          >
            <Image
              width={20}
              height={20}
              src="/img/dashboard/sidebar/booking.svg"
              alt="image"
              className="mr-15"
            />
            Booking Manager
          </a>
        </div>
        {/* End accordion__item */}

        <div className="sidebar__item ">
          <a
            href="/vendor-dashboard/add-a-boat"
            className="sidebar__button d-flex items-center text-15 lh-1 fw-500"
          >
            <Image
              width={20}
              height={20}
              src="/img/dashboard/sidebar/canoe.svg"
              alt="image"
              className="mr-15"
            />
            Add a Boat
          </a>
        </div>
        {/* End accordion__item */}

        <div className="sidebar__item ">
          <button
            type="submit"
            onClick={logoutAndRedirect}
            className="sidebar__button d-flex items-center text-15 lh-1 fw-500"
          >
            <Image
              width={20}
              height={20}
              src="/img/dashboard/sidebar/log-out.svg"
              alt="image"
              className="mr-15"
            />
            Logout
          </button>
        </div>
        {/* End accordion__item */}
      </div>
    </>
  );
};

export default Sidebar;
