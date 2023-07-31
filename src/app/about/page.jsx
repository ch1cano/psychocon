"use client"

import React from "react";
import s from "./About.module.css";
import Head from "next/head";

import { BsTelegram } from "react-icons/bs"
import { BiLogoWhatsappSquare } from "react-icons/bi"
import { MdAlternateEmail } from "react-icons/md"
import vkLogo from "../../assets/icons8-vk.svg"
import Image from "next/image";

const AboutPage = () => {

	<Head>
		<title>О нас</title>
	</Head>

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
						Вера в свой потенциал. Мы считаем, что для органичного самоощущения
						в любой ситуации необходимо увидеть и убрать препятствия которые
						появляются в нас в процессе жизни. Если мы избавляемся от <strong>внутренних
							препятствий</strong> то всё прекрасно заработает. Каждый человек имеет
						внутренний потенциал, который будет раскрываться, если ему ничего не
						будет мешать. Вера в потенциал: "быть в порядке" - крайне важна.
						Именно возможность дать человеку освободиться от препятствий тем
						самым изменив своё <strong>эмоциональное состояние</strong>. Каждый может раскрыть
						потенциал данный ему природой - это находится в корне философии
						проекта <strong>"Психокон"</strong>. Какие варианты работы (услуги): Онлайн
						консультации из любой точки мира. Офлайн консультации в городах:
						Пермь, Краснодар, (Пусть пока будет МСК третьим) Интервизии со
						специалистами Групповые и личные занятия со спортсменами и тренерами
						в области психологической подготовки, а также социального
						взаимодействия.
					</p>
					<h1 className={s.aboutHeader}>Определение понятий</h1>
					<p className={s.paragraph}>
						<strong>Психокон</strong> - проект психологического консультирования. Созданный на
						Отечественном методе и модальности Эмоционально-образной терапии.
						Помогает пережить боль от утраты, потери, расставания, а также
						наладить отношения с семьёй и привести в порядок рабочие отношения.
						Научит понимать себя и поможет выйти из состояния растерянности и
						"отсутствия почвы под ногами". <strong>Эмоционально-образная терапия (ЭОТ)</strong>:
						Данный метод обращается напрямую к подсознанию человека, посредством
						выражения состояния самоощущения через образы. Образы анализируются.
						Через такую работу выясняются причины состояний, и проводится
						<strong> психодинамическая транзакция</strong> истинного состояния индивида: гнев
						трансформируется, уходит годами копившаяся обида, снимается
						напряжение, отступает боль. ЭОТ позволяет быстро выйти из апатичных
						и депрессивных состояний.
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
						<a className={s.mailIcn} href="https://vk.com/psihokon" target="blank">
							<Image src={vkLogo} width={60} alt="vk" className={s.Icn} />
							<p>ВКонтакте</p>
						</a>
					</div>
					<div className={s.aboutMail}>
						<a className={s.mailIcn} href="https://t.me/Psychoc0n" target="blank">
							<BsTelegram size={50} className={s.Icn} />
							<p>Telegram</p>
						</a>
					</div>
					<div className={s.aboutMail}>
						<a className={s.mailIcn} href="https://wa.me/79604766926" target="blank">
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
