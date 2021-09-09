import React from "react";
import * as RiIcons from "react-icons/ri";

import * as IoIcons from "react-icons/io5";


export const SidebarItems = [
  {
    title: "Dashboard",
    path: "/",
    icon: <RiIcons.RiDashboardLine />,
    class: "nav-text",
  },
  {
    title: "Stores",
    path: "/stores",
    icon: <IoIcons.IoStorefrontOutline />,
    class: "nav-text",
  },
  {
    title: "Loyalty Members",
    path: "/members",
    icon: <IoIcons.IoPeopleOutline />,
    class: "nav-text",
  },
  {
    title: "Preferences",
    path: "/preferences",
    icon: <RiIcons.RiUserSettingsLine />,
    class: "nav-text",
  },
  
];
