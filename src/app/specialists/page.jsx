import React from "react";
import s from "./Specialists.module.css";
import Link from "next/link";
import { SPECIALISTS_DATA } from "@/moks/specialistsData"

export async function getServerSideProps(context) {
	const { params } = context;
	const { id } = params;

	const item = SPECIALISTS_DATA.filter((item) => item.id === id)

	return item

}


export const PortfolioPage = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.header}>
				<p className={s.headerText}>Наши специалисты</p>
			</div>
			<div className={s.portfolioCards}>
				{SPECIALISTS_DATA.map(({ id, img, firstname, lastname, fastinfo }) => (
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
						<Link href={`specialists/${id}`}>
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
