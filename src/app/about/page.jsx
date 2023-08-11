"use client";

import React from "react";
import s from "./About.module.css";
import Head from "next/head";

import { BsTelegram } from "react-icons/bs";
import { BiLogoWhatsappSquare } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";
import vkLogo from "../../assets/icons8-vk.svg";
import Image from "next/image";

const AboutPage = () => {
	<Head>
		<title>О нас</title>
	</Head>;

	return (
		<div className={s.wrapper}>
			<div className={s.header}>
				<div className={s.headerText}>
					Главное, что нужно знать о «Психокон»
				</div>
			</div>
			<div className={s.aboutMe}>
				<div className={s.aboutMeInfo}>
					<h1 className={s.aboutHeader}>Философия нашего проекта</h1>
					<p className={s.paragraph}>
						Каждый из нас приходит в этот мир изначально целостным,
						самодостаточным, и обладает всеми необходимыми ресурсами для
						счастливой жизни и самореализации. Каждый из нас, как отдельная
						Вселенная. Мы приходим в мир для того, чтобы проявляться, творить,
						радоваться. Однако сталкиваясь с жизненными трудностями, мы не
						всегда можем справиться с ними. Так, например, жестокость глубоко
						ранит, чужие правила ограничивают, долженствования тяжёлым грузом
						ложатся на плечи, навязанные представления других о нас могут лишить
						нас индивидуальности. И мы можем потерять контакт с собой настоящим.
					</p>
					<h1 className={s.aboutHeader}>Определение понятий</h1>
					<p className={s.paragraph}>
						<span className={s.aboutmis}>Миссия проекта Психокон</span> — помочь
						человеку выйти из травмы, помочь вернуть свой потенциал и ресурсы. А
						значит стать более счастливым и творческим.
					</p>
				</div>
				<div></div>
			</div>
			<div className={s.adoutArticles}></div>
			<div className={s.aboutNetworks}>
				<div className={s.aboutNetworksInfo}>
					<h3>Наши контакты</h3>
					<div className={s.aboutGmail}>
						<p className={s.emailP}>Почта для связи:</p>
						<a className={s.mailIcn} href="mailto:psyc4ocon@gmail.com">
							psyc4ocon@gmail.com
						</a>
					</div>
				</div>
				<div className={s.aboutNetworksInfoCont}>
					<div className={s.aboutMail_vk}>
						<a
							className={s.mailIcn}
							href="https://vk.com/psihokon"
							target="blank">
							<Image src={vkLogo} width={60} alt="vk" className={s.Icn} />
							<p>ВКонтакте</p>
						</a>
					</div>
					<div className={s.aboutMail}>
						<a
							className={s.mailIcn}
							href="https://t.me/Psychoc0n"
							target="blank">
							<BsTelegram size={50} className={s.Icn} />
							<p>Telegram</p>
						</a>
					</div>
					<div className={s.aboutMail}>
						<a
							className={s.mailIcn}
							href="https://wa.me/79604766926"
							target="blank">
							<BiLogoWhatsappSquare size={60} className={s.Icn} />
							<p>WhatsApp</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
