import React, { useEffect, useState } from "react";

function Header(props) {
  const listNavItem = [
    {
      id: 1,
      name: "Trang chủ",
      icon: "uil-estate",
      link: "home",
    },
    {
      id: 2,
      name: "Giới thiệu",
      icon: "uil-user",
      link: "about",
    },
    {
      id: 3,
      name: "Kỹ năng",
      icon: "uil-file-alt",
      link: "skill",
    },
    {
      id: 4,
      name: "Tiến trình",
      icon: "uil-message",
      link: "qualification",
    },
    {
      id: 5,
      name: "Liên hệ",
      icon: "uil-message",
      link: "contact",
    },
  ];
  const [openNav, setOpenNav] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("isDarkMode") === "true"
      ? localStorage.getItem("isDarkMode")
      : false
  );

  useEffect(() => {
    document.body.classList[isDarkMode ? 'add' : 'remove']('dark-theme');
  }, [isDarkMode]);

  const handleChangleThemeMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("isDarkMode", !isDarkMode);
  }

  return (
    <header className={`header ${props.scrollHeader ? "scroll-header" : ""}`}>
      <nav className="nav container">
        <a href={props.homeLink} className="nav-logo">
          Ngô Việt Hoàng
        </a>

        <div className={`nav-menu ${openNav ? "show-menu" : ""}`}>
          <ul className="nav-list grid">
            {listNavItem.map((item) => {
              return (
                <li className="nav-item" key={item.id}>
                  <a
                    href={`#${item.link}`}
                    className={`nav-link ${
                      props.navLinkActive === item.link ? "active-link" : ""
                    }`}
                  >
                    <i className={`uil nav-icon ${item.icon}`}></i> {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <i
            className="uil uil-times nav-close"
            onClick={() => {
              setOpenNav(false);
            }}
          ></i>
        </div>

        <div className="nav-btns">
          <i
            className={`uil change-theme ${
              isDarkMode ? "uil-sun" : "uil-moon"
            }`}
            onClick={() => handleChangleThemeMode()}
          />

          <div
            className="nav-toggle"
            onClick={() => {
              setOpenNav(true);
            }}
          >
            <i className="uil uil-bars"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
