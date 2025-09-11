import { useContext, useState, useEffect } from "react";
import { LayoutContext } from "./context/layoutcontext";
import { MenuProvider } from "./context/menucontext";
import Cookies from "js-cookie";
import Link from "next/link";

const AppMenu = () => {
  const { layoutConfig } = useContext(LayoutContext);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const roleFromCookies = Cookies.get("role");
    setUserRole(roleFromCookies);
  }, []);

  if (!userRole) return null; // Menunggu role tersedia, tidak tampilkan menu

  // Hanya menampilkan menu untuk Dashboard Siswa
  const model = [
    {
      label: "",
      items: [
        { label: "Dashboard Siswa", icon: "pi pi-fw pi-chart-bar", to: "/dashboard_siswa" }, // Selalu tampil
      ],
    },
  ];

  return (
    <MenuProvider>
      <ul className="layout-menu">
        {model.map((item, i) => (
          !item.seperator ? (
            <li key={i}>
              <h3>{item.label}</h3>
              <ul>
                {item.items.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link href={subItem.to}>
                      <a>
                        <i className={subItem.icon}></i>
                        <span>{subItem.label}</span>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li className="menu-separator" key={`separator-${i}`}></li>
          )
        ))}
      </ul>
    </MenuProvider>
  );
};

export default AppMenu;
