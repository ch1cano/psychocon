import React from "react";
import s from "./Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.footerLeftInfo}>
        <div className={s.footerLogo}>
          <Image
            className={s.logoSvg}
            alt="#"
            src="/image/mainLogoD.svg"
            width={80}
            height={80}
          />
        </div>
        <div className={s.footerName}>
          <p>Психокон<span>/</span> </p><p className={s.footerNameEng}>Psychocon</p>
        </div>
      </div>
      <div className={s.footerRightInfo}>
        <div className={s.footerRightInfoAddress}>
          <div className={s.footerAddress}>
            <div>
              <p>Адрес в Краснодаре:</p>
              <p>телефон для связи:</p>
            </div>
            <div>
              <p>ул. Горького 64 </p>
              <p>+7-960-476-69-26</p>
            </div>
          </div>
          <div className={s.footerAddress}>
            <div>
              <p>Адрес в Перми:</p>
              <p>телефон для связи:</p>
            </div>
            <div>
              <p> ул. Советская, д. 47Б </p>
              <p>+7-902-833-73-09</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
