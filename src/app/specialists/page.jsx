"use client"
import React from "react";
import s from "./Specialists.module.css";
import Link from "next/link";
import { SPECIALISTS_DATA } from "@/moks/specialistsData";
import Modal from "@/components/Modal/Modal";
import Form from "@/components/Form/Form";
import useModal from "@/hooks/UseModal";
import { getServerSideProps } from "@/moks/specialistsData";

getServerSideProps()

export const PortfolioPage = () => {

	const { isOpen, openModal, closeModal } = useModal();

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
						<div className={s.btnsPortfolio}>
							<Link href={`${id}`}>
								<button className={s.btnPortfolio}>Портфолио</button>
							</Link>
							<button onClick={openModal} className={s.btnPortfolioBy}>Записаться</button>
						</div>
					</div>
				))}
			</div>
			<Modal isOpen={isOpen} onClose={closeModal}>
				<Form />
			</Modal>
		</div>
	);
};

export default PortfolioPage;
