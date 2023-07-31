"use client";
import Image from "next/image";
import React, { useState } from "react";
import s from "./specialist.module.css";
import Link from "next/link";
import { SPECIALISTS_DATA } from "@/moks/specialistsData";
import useModal from "@/hooks/UseModal";
import Modal from "@/components/Modal/Modal";
import Form from "@/components/Form/Form";

export const getServerSideProps = (pageId) =>
    SPECIALISTS_DATA.find(({ id }) => id === pageId);

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
                            <Image src={pageData.img} width={180} height={280} />
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
                            <button onClick={openModal} className={s.btnPortfolioBy}>Записаться</button>
                        </div>
                    </div>
                </div>
                {/* )
				)} */}
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
                    {isOpen1 && <p className={s.essep}>{pageData.esse}</p>}
                </div>
                <div className={s.education}>
                    <div className={s.header}>
                        <p className={s.educationheader}>
                            <span className={s.cheroz}>Образование</span>
                        </p>
                        <div className={s.btnDiv} onClick={handleClick2}>
                            <button onClick={toggleDropdown2} className={s.btnUp}>
                                <img
                                    className={`${s.flipComponent} ${isFlipped2 ? s.flipped : ""
                                        }`}
                                    src="../svg/arrow.svg"
                                    alt="arrow"
                                    width={26}
                                />
                            </button>
                        </div>
                    </div>
                    {isOpen2 && (
                        <>
                            <p className={s.educationp}>{pageData.education}</p>
                            <p className={s.sert}>
                                <span className={s.cheroz}>Сертификаты</span>
                            </p>
                            <p className={s.sertInfo}> {pageData.sertificfation}</p>
                        </>
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
                                    className={`${s.flipComponent} ${isFlipped3 ? s.flipped : ""
                                        }`}
                                    src="../svg/arrow.svg"
                                    alt="arrow"
                                    width={26}
                                />
                            </button>
                        </div>
                    </div>
                    {isOpen3 && <p className={s.sertficatep}>{pageData.workside}</p>}
                </div>
            </div>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <Form />
            </Modal>
        </div>
    );
};

export default SpecialistPage;
