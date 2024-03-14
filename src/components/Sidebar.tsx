import React from "react";
import DashboardIcon from "../assets/DashboardIcon";

const sidebarData = [
  {
    id: 1,
    heading: "",
    items: [
      { id: 1.1, name: "Dashboard", icon: <DashboardIcon />, active: true },
    ],
  },
  {
    id: 2,
    heading: "Analytics",
    items: [
      {
        id: 2.1,
        name: "Performance",
        icon: <DashboardIcon />,
        active: false,
      },
      { id: 2.2, name: "Hotjar", icon: <DashboardIcon />, active: false },
    ],
  },
  {
    id: 3,
    heading: "Support",
    items: [
      { id: 3.1, name: "Tickets", icon: <DashboardIcon />, active: false },
      { id: 3.2, name: "Agents", icon: <DashboardIcon />, active: false },
      { id: 3.3, name: "Customers", icon: <DashboardIcon />, active: false },
    ],
  },
  {
    id: 4,
    heading: "Shop",
    items: [
      { id: 4.1, name: "Products", icon: <DashboardIcon />, active: false },
      { id: 4.2, name: "Orders", icon: <DashboardIcon />, active: false },
      { id: 4.3, name: "Reports", icon: <DashboardIcon />, active: false },
    ],
  },
  {
    id: 5,
    heading: "Settings",
    items: [
      {
        id: 5.1,
        name: "Account Settings",
        icon: <DashboardIcon />,
        active: false,
      },
    ],
  },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="h-screen sticky top-0 p-6  overflow-y-auto max-w-[20%]">
      <div className="mb-10">
        <button className="bg-[#4F46E5] hover:bg-[#4F46E5] text-white text-xs font-bold py-2 px-3 rounded">
          + Connect New Account
        </button>
      </div>
      {sidebarData.map((section) => (
        <SidebarSection key={section.id} section={section} />
      ))}
    </aside>
  );
};

const SidebarSection: React.FC<{
  section: {
    id: number;
    heading: string;
    items: Array<{
      id: number;
      name: string;
      icon: JSX.Element;
      active: boolean;
    }>;
  };
}> = ({ section }) => {
  return (
    <div className="mb-6">
      <h3 className="text-gray-500 uppercase tracking-wider text-xs font-semibold">
        {section.heading}
      </h3>
      {section.items.map((item) => (
        <NavItem
          key={item.id}
          icon={item.icon}
          title={item.name}
          active={item.active}
        />
      ))}
    </div>
  );
};

const NavItem: React.FC<{
  icon: JSX.Element;
  title: string;
  active: boolean;
}> = ({ icon, title, active }) => {
  return (
    <div
      className={
        "flex items-center p-2 my-1 text-sm hover:text-[#4F46E5] cursor-pointer"
      }
    >
      <span className="mr-3">{icon}</span>
      <span className="flex-1">{title}</span>
    </div>
  );
};

export default Sidebar;
