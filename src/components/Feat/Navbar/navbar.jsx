import React, { useState, useEffect, useRef } from "react";
import NavItem from "./navbarItem";
import Link from "next/link";
import "./Navbar.css";

const links = [
	{ text: "Главная", href: "/" },
	{ text: "Специалисты", href: "/portfolio" },
	{ text: "О нас", href: "/about" },
];
const Navbar = () => {
	const [navActive, setNavActive] = useState(null);
	const [activeIdx, setActiveIdx] = useState(-1);

	useEffect(() => {
		const menu = document.querySelector(".nav__menu-bar");
		if (menu) {
			menu.addEventListener("click", () => {
				menu.classList.toggle("active");
				menu.classList.remove("no-animation");
			});
		}
	}, []);

	return (
		<header>
			<nav className="nav">
				<div
					onClick={() => setNavActive(!navActive)}
					className="nav__menu-bar z-100">
					<div className="small"></div>
					<div className="big"></div>
					<div className="small"></div>
				</div>
				<div className={`${navActive ? "active" : ""} nav__menu-list`}>
					{links.map((menu, idx) => (
						<div
							onClick={() => {
								setActiveIdx(idx);
								setNavActive(false);
							}}
							key={menu.text}>
							<NavItem active={activeIdx === idx} {...menu} />
						</div>
					))}
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
