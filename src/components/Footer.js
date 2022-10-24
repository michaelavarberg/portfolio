import { useState } from "react";
function Footer() {
  const [navClick, setNavClick] = useState("about-me");
  const [activeKey, setActiveKey] = useState("about-me");
  const handleClick = (e) => {
    setNavClick(e.target.id);
    setActiveKey(e.target.id);
  };
  return <div className="d-flex justify-content-center footer"></div>;
}

export default Footer;
