"use client";

import { UserRole } from "@/types/common";
import { getUserInfo } from "@/utils/authService";
import { drawerItems } from "@/utils/drawerItems";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const DashboardDrawer = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const [userRole, setUserRole] = useState<UserRole | undefined>();

  useEffect(() => {
    const userInfo = getUserInfo();
    if (userInfo?.role) {
      setUserRole(userInfo.role as UserRole);
    }
  }, []);

  // console.log(userRole);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col p-12">
        {children}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          {/* <p>User</p> */}
          <Link href="/" className="p-4 text-3xl text-accent">
            PETCO LOVER
          </Link>
          {drawerItems(userRole as UserRole).map((item, index) => (
            <Link href={`/dashboard/${item.path}`} key={index}>
              <button
                className={`btn my-2 w-full ${
                  pathname === `/dashboard/${item.path}`
                    ? "btn-accent"
                    : "bg-gray-400"
                }`}
              >
                {item.title}
              </button>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardDrawer;
