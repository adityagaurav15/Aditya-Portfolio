import { useState } from "react";
import "./components.css";

const navItems = [
  { id: 1, icon: "fa-house-chimney", text: "Home", href:'#top' },
  { id: 2, icon: "fa-user", text: "Profile", href: "#about" },
  { id: 3, icon: "fa-comments", text: "Messages", href: "#about"  },
  { id: 4, icon: "fa-camera", text: "Photos", href: "#about"  },
  { id: 5, icon: "fa-gear", text: "Settings", href: "#about"  },
];

export default function MagicNav() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="navigation w-full fixed z-40 flex items-center justify-center">
      <ul className="flex bg-[#2f2f2f] relative z-50 p-[1px]">
        {navItems.map((item, index) => (
          <li
            key={item.id}
            className={`list ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <a href={item.href}>
              <span className="icon">
                <i className={`fa-solid ${item.icon}`}></i>
              </span>
              <span className="text">{item.text}</span>
            </a>
          </li>
        ))}
        <div className="indicator" style={{ transform: `translateX(${activeIndex * 80}px)` }}></div>
      </ul>
    </div>
  );
}
