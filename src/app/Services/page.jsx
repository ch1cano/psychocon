import React from "react";
import s from "./Services.module.css";

const services = [
	{
		id: 1,
		nameServ: "Психолог",
		service:
			"Многие эмоциональные и психологические проблемы могут быть решены специалистами — психологами.",
	},
	{
		id: 2,
		nameServ: "Консультация психотерапевта",
		service:
			"Базовый процесс в коррекции и лечении абсолютного большинства психических нарушений и расстройств.",
	},
	{
		id: 3,
		nameServ: "Групповая психотерапия",
		service:
			"Экономически доступный вид психологической помощи, эффективный при отсутствии острой симптоматики.",
	},
];

const ServicesPage = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.header}>
				<p className={s.headerText}>Услуги и консультации</p>
			</div>
			<div>
				<div className={s.servicesCards}>
					{services.map(({ id, nameServ, service }) => (
						<div key={id} className={s.servicesCard}>
							<div className={s.infoService}>
								<p className={s.serviceName}>{nameServ}</p>
								<p className={s.service}>{service}</p>
							</div>
							<div className={s.arrow}>
								<div className={s.arrowTop}></div>
								<div className={s.arrowBottom}></div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ServicesPage;
