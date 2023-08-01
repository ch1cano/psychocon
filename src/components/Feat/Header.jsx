"use client";
import React, { useEffect, useState } from "react";
import s from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import useModal from "@/hooks/UseModal";
import Modal from "../Modal/Modal";
import Form from "../Form/Form";
import NavItem from "./Navbar/navbarItem";

const links = [
	{ text: "Главная", href: "/" },
	{ text: "Специалисты", href: "/specialists" },
	{ text: "О нас", href: "/about" },
];

const Header = () => {
	const { isOpen, openModal, closeModal } = useModal();
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
		<header className={s.header}>
			<div className={s.containerLogo}>
				<Image
					className={s.logo}
					alt="#"
					src="/image/mainLogoD.svg"
					width={100}
					height={80}
				/>
				<Link className={s.nameLink} href="/">
					<p className={s.nameLogo}>Психокон</p>
					<p className={s.nameLogoDown}>Psychocon</p>
				</Link>
			</div>
			<nav className={`nav`}>
				<div
					onClick={() => setNavActive(!navActive)}
					className={`nav__menu-bar`}>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div className={`${navActive ? "active" : ""} nav__menu-list`}>
					{links.map((menu, idx) => (
						<div
							className={s.links}
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
			<button onClick={openModal} className={s.headerBtn}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="22"
					height="22"
					fill="currentColor"
					className={s.svgBtn}
					viewBox="0 0 17 16">
					<path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
				</svg>
				Записаться
			</button>
			<Modal isOpen={isOpen} onClose={closeModal}>
				<Form />
			</Modal>
		</header>
	);
};

export default Header;
