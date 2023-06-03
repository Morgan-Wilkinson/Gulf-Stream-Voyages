import Image from "next/image";
import Link from "next/link";
import LogoutAndRedirect from "../../../components/common/LogoutAndRedirect";

const Sidebar = () => {
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
          <Link
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
          </Link>
        </div>
        {/* End accordion__item */}

        <div className="sidebar__item ">
          <LogoutAndRedirect></LogoutAndRedirect>
        </div>
        {/* End accordion__item */}
      </div>
    </>
  );
};

export default Sidebar;
