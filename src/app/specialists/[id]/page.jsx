"use client";

import React, { useState } from "react";
import s from "./specialist.module.css";
import Link from "next/link";
import { SPECIALISTS_DATA } from "@/moks/specialistsData"


export const getServerSideProps = (pageId) => SPECIALISTS_DATA.find(({ id }) => id === pageId)

const SpecialistPage = ({ params }) => {

    const pageData = getServerSideProps(params.id)
    console.log(pageData)

    console.log(params, "params")
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

    const [isOpen, setIsOpen] = useState(false);
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
                        </div>
                    </div>
                    <div className={s.rightItem}>
                        <div className={s.nameInfo}>
                            <p className={s.nameFirst}>{pageData.firstname}</p>
                            <p className={s.nameLast}></p>
                        </div>
                        <br />
                        <div className={s.profession}>
                            <p></p>
                        </div>
                        <div className={s.experience}>
                            <p></p>
                        </div>
                        <div className={s.btn}>
                            <button className={s.btnPortfolioBy}>Записаться</button>
                        </div>
                    </div>
                </div>
                {/* )
				)} */}
            </div>
            <div className={s.otherInfo}>
                <div className={s.esse}>
                    <div className={s.header}>
                        {/* <Link href={`/portfolio/${portfolio.lastname}`}>
							{portfolio.lastname}{" "}
						</Link> */}
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
                    {isOpen && (
                        <p className={s.essep}>
                            <span className={s.cheroz}> Мой путь</span> в психологию начался
                            около 30 лет назад. Тогда в попытках
                            <span className={s.cheroz}> понять и разрешить проблемы</span>,
                            возникшие между мной и партнером, я сама впервые обратилась к
                            психологу. Так сложилось, что в поиске ответов на свои вопросы я
                            получила высшее образование в одном из ведущих психологических
                            вузов страны и открыла для себя долгий путь совершенствования как
                            специалист в области психологического консультирования.
                            <br />
                            За время учебы и работы я видела много перемен в жизни клиентов и
                            своей собственной, поэтому я точно знаю - ЭОТ работает. <br />
                            Предпочитаю сотрудничество между клиентом и психологом, в
                            результате которого Вы научитесь слышать себя, ориентироваться на
                            своё истинное «Я», узнаете приемы, с помощью которых сможете
                            помогать себе сами.
                            <br />
                            Метод, по которому я работаю, позволяет решать проблемы в
                            максимально короткие сроки. Применяя Эмоционально-образную
                            терапию, я проведу Вас мягко и бережно и помогу решить следующие
                            типы проблем: Эмоциональная сфера: «Страхи, фобии, обиды, гнев,
                            стыд, вина, тревожность, сниженное настроение, навязчивые мысли».
                            <br />
                            Разрешим любые проблемы во взаимоотношениях с людьми. Это могут
                            быть: проблемы с партнером, с детьми, родственниками, коллегами
                            или друзьями.
                            <br />
                            Кроме того, придя к своему истинному «Я» мы разрешим все проблемы
                            личностного характера, такие как: неуверенность в себе,
                            хроническая неуспешность, отсутствие смысла жизни.
                            <br />А также, я помогу разобраться с психологическими травмами:
                            разводом, расставанием, утратой.
                        </p>
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
                        <p className={s.educationp}>
                            <span className={s.cheroz}>
                                В профессиональной психологии нахожусь с 2003 года.
                            </span>
                            Прошла долгосрочное обучение в Московском Гештальт Институте.
                            Обучалась НЛП, Эриксоновскому гипнозу, Нарративному подходу,
                            Расстановкам, работе с Метафорическими Картами. В 2019 году я
                            познакомилась с Эмоционально-Образной Терапией. Влюбилась в этот
                            метод, и он стал основным в моей работе.
                        </p>
                    )}
                </div>
                <div className={s.sertficate}>
                    <div className={s.header}>
                        <p className={s.sertficateheader}>
                            <span className={s.cheroz}>Сертификаты </span>
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
                    {isOpen3 && (
                        <p className={s.sertficatep}>
                            "Работа с психологическими травмами с использованием метода
                            эмоционально - образной терапии" (1, 2, 3 ступень)
                            <br />
                            "Все грани эмоционально-образной терапии"
                            <br />
                            "Эмоционально-образная терапия 3-я ступень обучения"
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SpecialistPage;
