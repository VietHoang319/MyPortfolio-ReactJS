import React, { useState } from "react";

function Header() {
  const homeLink = "#";
  const [openNav, setOpenNav] = useState(false);
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

  return (
    <header className="header">
      <nav className="nav container">
        <a href={homeLink} className="nav-logo">
          Ngô Việt Hoàng
        </a>

        <div className={`nav-menu ${openNav ? "show-menu" : ""}`}>
          <ul className="nav-list grid">
            {listNavItem.map((item) => {
              return (
                <li className="nav-item" key={item.id}>
                  <a href={`#${item.link}`} className="nav-link active-link">
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
          <i className="uil uil-moon change-theme" id="themeButton"></i>

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
