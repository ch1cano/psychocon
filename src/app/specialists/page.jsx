import React from "react";
import s from "./Specialists.module.css";
import Link from "next/link";
export const portfolio = [
	{
		id: "1",
		img: "./image/portf-1.jpg",
		firstname: "Никитина",
		lastname: "Ольга Владимировна",
		fastinfo: "Психолог в сфере эмоционально-образной терапии",
		// profession: "Эмоционально-образовательная терапии",
		// special: "Специализация: Внутрисемейные отношения",
		// experience: "Стаж психологического консультирования: 20 лет",
		esse: "4534534",
	},
	{
		id: "2",
		img: "./image/portf-2.jpg",
		firstname: "Петрова",
		lastname: "Светлана Анатольевна",
		fastinfo: "Психолог в сфере эмоционально-образной терапии",
		// profession: "Эмоционально-образовательная терапииг",
		// special: "Специализация: Спортивная психология",
		// experience: "Стаж психологического консультирования: 5 лет",
		esse: "534534534",
	},
	{
		id: "3",
		img: "./image/portf-3.jpg",
		firstname: "Попова",
		lastname: "Юлия Констанитиновна",
		fastinfo: "Психолог в сфере эмоционально-образной терапии",
		// profession: "Эмоционально-образовательная терапии",
		// special: "Специализация: Психологические травмы насильственного типа",
		// experience: "Стаж психологического консультирования: 5 лет",
		esse: "235235",
	},
];

export const PortfolioPage = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.header}>
				<p className={s.headerText}>Наши специалисты</p>
			</div>
			<div className={s.portfolioCards}>
				{portfolio.map(({ id, img, firstname, lastname, fastinfo }) => (
					<div key={id} className={s.portfolioCard}>
						<div className={s.nameInfo}>
							<p className={s.nameFirst}>{firstname}</p>
							<p className={s.nameLast}>{lastname}</p>
						</div>
						<br />
						<div className={s.profession}>
							<p>{fastinfo}</p>
						</div>
						<div className={s.imageBlock}>
							<img
								alt="#"
								src={img}
								className={s.img}
								width={240}
								height={345}
							/>
						</div>
						<Link href={`${id}`}>
							<button className={s.btnPortfolio}>Портфолио</button>
						</Link>
						<button className={s.btnPortfolioBy}>Записаться</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default PortfolioPage;
