import React from 'react'
import { useTranslation } from "react-i18next";
interface menuLinkType{
    id:number,
    text: string,
    target:string
}
const NavBar = () => {
  const {i18n} = useTranslation()
    const menuLink: menuLinkType[] = [
      {
        id: 1,
        text: "About",
        target: "/",
      },
      {
        id: 1,
        text: "Gallery",
        target: "/",
      },
      {
        id: 1,
        text: "Services",
        target: "/",
      },
      {
        id: 1,
        text: "Facilities",
        target: "/",
      },
    ];
    const handleChange=()=>{
      i18n.changeLanguage("en")
    }
  return (
    <div className="flex justify-between items-center px-4 sticky top-0 bg-orange-100 rounded-xl   h-20">
      <div className="brand-secion w-fit flex space-x-2 items-center">
        <div className="brand-logo">
          <img
            className="flex justify-center "
            src="/images/brand/brand_logo.png"
            alt=""
            width={30}
          />
        </div>
        <div className="flex-col text-left">
          <div className="brand-name font-medium">Kailash Banquet Hall</div>
          <div className="brand-name text-xs uppercase">
            From the family of Utsav
          </div>
        </div>
      </div>

      <div className="nav-menu flex space-x-4 ">
        {menuLink.map((link, index) => {
          return (
            <a key={`ml-${index}`} href={link.target} className="menu-link-item">
              {link.text}
            </a>
          );
        })}
      </div>
      <div className="nav-right space-x-4">
        <button onClick={handleChange}>EN</button>
        <a href={"tel:+918869969818"} className="menu-link-item h-16 rounded-full p-2 ring-1">
          {"Contact"}
        </a>
      </div>
    </div>
  );
}

export default NavBar