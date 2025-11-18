import React, { useState } from "react";
import { FaChevronDown, FaChevronRight, FaReact } from "react-icons/fa";
import { Link } from "react-router";
import { IoLogoJavascript } from "react-icons/io";


const Sidebar = () => {
  // State to track open menus
  const [openMenus, setOpenMenus] = useState<{ parent?: string; child?: string }>({
    parent: "",
    child: "",
  });

  // Toggle main section (collapses others)
  const toggleParent = (menuTitle: string) => {
    setOpenMenus((prev) => ({
      parent: prev.parent === menuTitle ? "" : menuTitle,
      child: "", // close any open child when parent changes
    }));
  };

  // Toggle child section (collapses others inside same parent)
  const toggleChild = (childTitle: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      child: prev.child === childTitle ? "" : childTitle,
    }));
  };

  // Sidebar menu data
  const menu = [
    {
      title: "Javascript",
      icon: <IoLogoJavascript />,
      items: [
        { name: "Introduction", path: "/docs/js" },
        { name: "Installation", path: "/docs/install" },
        { name: "Quick Start", path: "/docs/start" },
      ],
    },
    {
      title: "React",
      icon: <FaReact />,
      items: [
        { name: "Introduction", path: "/docs/react" },
        { name: "Hooks", path: "/docs/react/hooks" },
        { name: "Quick Start", path: "/docs/start" },
      ],
    },
    {
      title: "Core Concepts",
      icon: <FaReact />,
      items: [
        { name: "JSX & Components", path: "/docs/jsx" },
        {
          name: "Hooks",
          children: [
            { name: "useState", path: "/docs/hooks/usestate" },
            { name: "useEffect", path: "/docs/hooks/useeffect" },
            { name: "useContext", path: "/docs/hooks/usecontext" },
          ],
        },
      ],
    },
    {
      title: "Advanced Topics",
      icon: <FaReact />,
      items: [
        { name: "Performance", path: "/docs/performance" },
        { name: "Optimization", path: "/docs/optimization" },
      ],
    },
  ];

  return (
    <aside className="bg-gradient-to-r from-[#0b276f] to-black min-w-[220px] text-white w-64 h-[100vh] p-4 overflow-y-auto shadow-md">
      {/* <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <FaReact className="text-cyan-400 animate-spin-slow" /> React Docs
      </h2> */}

      <ul className="space-y-2 ">
        {menu.map((section, i) => (
          <li key={i}>
            {/* Parent Section */}
            <button
              onClick={() => toggleParent(section.title)}
              className=" cursor-pointer flex items-center justify-between w-full text-left py-2 px-3 rounded hover:bg-blue-800 transition"
            >
              <span className="flex items-center gap-2">
                {section.icon}
                {section.title}
              </span>
              {openMenus.parent === section.title ? (
                <FaChevronDown />
              ) : (
                <FaChevronRight />
              )}
            </button>

            {/* Submenu Level 1 */}
            <ul
              className={`pl-5 mt-1 overflow-hidden transition-all duration-300 ${
                openMenus.parent === section.title ? "max-h-96" : "max-h-0"
              }`}
            >
              {section.items.map((item, j) =>
                item.children ? (
                  <li key={j} className="mt-1 ">
                    {/* Child Section */}
                    <button
                      onClick={() => toggleChild(item.name)}
                      className="  flex items-center justify-between w-full text-left py-2 px-2 rounded hover:bg-blue-800 transition"
                    >
                      {item.name}
                      {openMenus.child === item.name ? (
                        <FaChevronDown size={14} />
                      ) : (
                        <FaChevronRight size={14} />
                      )}
                    </button>

                    {/* Submenu Level 2 */}
                    <ul
                      className={`pl-4 mt-1 overflow-hidden transition-all duration-300 ${
                        openMenus.child === item.name ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      {item.children.map((subItem, k) => (
                        <li key={k}>
                          <Link
                            to={subItem.path}
                            className="block py-1 px-2 rounded hover:bg-blue-700 transition"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={j}>
                    <Link
                      to={item.path}
                      className="block py-2 px-3 rounded hover:bg-blue-800 transition"
                    >
                      {item.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
