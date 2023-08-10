"use client";
import Image from "next/image";
import React, { useState } from "react";
import s from "./specialist.module.css";
import useModal from "@/hooks/UseModal";
import Modal from "@/components/Modal/Modal";
import Form from "@/components/Form/Form";
import { getServerSideProps } from "@/moks/specialistsData";

const SpecialistPage = ({ params }) => {
	const { isOpen, openModal, closeModal } = useModal();

	const pageData = getServerSideProps(params.id);
	const [isFlipped, setIsFlipped] = useState(false);
	const handleClick = () => {
		setIsFlipped(!isFlipped);
	};
	const [isFlipped2, setIsFlipped2] = useState(false);
	const handleClick2 = () => {
		setIsFlipped2(!isFlipped2);
	};
	const [isFlipped3, setIsFlipped3] = useState(false);
	const handleClick3 = () => {
		setIsFlipped3(!isFlipped3);
	};
	const [isOpen1, setIsOpen] = useState(false);
	const toggleDropdown = () => {
		setIsOpen((prevState) => !prevState);
	};
	const [isOpen2, setIsOpen2] = useState(false);
	const toggleDropdown2 = () => {
		setIsOpen2((prevState) => !prevState);
	};
	const [isOpen3, setIsOpen3] = useState(false);
	const toggleDropdown3 = () => {
		setIsOpen3((prevState) => !prevState);
	};
	return (
		<div className={s.wrapper}>
			<div className={s.portfolioCards}>
				<div className={s.portfolioCard}>
					<div className={s.leftItem}>
						<div className={s.imageBlock}>
							<Image
								src={pageData.img}
								alt="pageData"
								style={{ borderRadius: 5 }}
								width={240}
								height={360}
							/>
						</div>
					</div>
					<div className={s.rightItem}>
						<div className={s.nameInfo}>
							<p className={s.nameFirst}>{pageData.firstname}</p>
							<p className={s.nameLast}>{pageData.lastname}</p>
						</div>
						<br />
						<div className={s.profession}>
							<p>{pageData.special}</p>
						</div>
						<div className={s.experience}>
							<p>{pageData.experience}</p>
						</div>
						<div className={s.btn}>
							<button onClick={openModal} className={s.btnPortfolioBy}>
								Записаться
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className={s.otherInfo}>
				<div className={s.esse}>
					<div className={s.header}>
						<p className={s.headeresse}>
							<span className={s.cheroz}>Обо мне</span>
						</p>
						<div className={s.btnDiv} onClick={handleClick}>
							<button className={s.btnUp} onClick={toggleDropdown}>
								<img
									className={`${s.flipComponent} ${isFlipped ? s.flipped : ""}`}
									src="../svg/arrow.svg"
									alt="arrow"
									width={26}
								/>
							</button>
						</div>
					</div>
					{isOpen1 && (
						<div className={s.div}>
							<p className={s.essep}>{pageData.esse}</p>
							<p className={s.essep}>{pageData.esse2}</p>
							<p className={s.essep}>{pageData.esse3}</p>
							<p className={s.essep}>{pageData.esse4}</p>
							<p className={s.essep}>{pageData.esse5}</p>
							<p className={s.essep}>{pageData.esse6}</p>
							<p className={s.essep}>{pageData.esse7}</p>
							<p className={s.essep}>{pageData.esse8}</p>
						</div>
					)}
				</div>
				<div className={s.education}>
					<div className={s.header}>
						<p className={s.educationheader}>
							<span className={s.cheroz}>Образование</span>
						</p>
						<div className={s.btnDiv} onClick={handleClick2}>
							<button onClick={toggleDropdown2} className={s.btnUp}>
								<img
									className={`${s.flipComponent} ${
										isFlipped2 ? s.flipped : ""
									}`}
									src="../svg/arrow.svg"
									alt="arrow"
									width={26}
								/>
							</button>
						</div>
					</div>
					{isOpen2 && (
						<div className={s.div}>
							<p className={s.educationp}>{pageData.education}</p>
							<p className={s.educationp}>{pageData.education2}</p>
							<p className={s.educationp}>{pageData.education3}</p>
							<p className={s.educationp}>{pageData.education4}</p>
							<p className={s.educationp}>{pageData.education5}</p>
						</div>
					)}
				</div>
				<div className={s.sertficate}>
					<div className={s.header}>
						<p className={s.sertficateheader}>
							<span className={s.cheroz}>Направление работы</span>
						</p>
						<div className={s.btnDiv} onClick={handleClick3}>
							<button onClick={toggleDropdown3} className={s.btnUp}>
								<img
									className={`${s.flipComponent} ${
										isFlipped3 ? s.flipped : ""
									}`}
									src="../svg/arrow.svg"
									alt="arrow"
									width={26}
								/>
							</button>
						</div>
					</div>
					{isOpen3 && (
						<div className={s.div}>
							<p className={s.sertficatep}>{pageData.workside}</p>
							<p className={s.sertficatep}>{pageData.workside2}</p>
							<p className={s.sertficatep}>{pageData.workside3}</p>
							<p className={s.sertficatep}>{pageData.workside4}</p>
							<p className={s.sertficatep}>{pageData.workside5}</p>
						</div>
					)}
				</div>
			</div>
			<Modal isOpen={isOpen} onClose={closeModal}>
				<Form />
			</Modal>
		</div>
	);
};

export default SpecialistPage;
