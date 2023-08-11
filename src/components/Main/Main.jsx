import Image from "next/image";
import React from "react";
import s from "./Main.module.css";
import blot1 from "@/assets/blots/blot1.png";
import blot2 from "@/assets/blots/blot2.png";
import blot3 from "@/assets/blots/blot3.png";

const Main = () => {
	return (
		<div className={s.main}>
			<Image
				className={s.image}
				src="/image/mainPage.jpg"
				width={1280}
				height={482}
				alt="mainPage"
			/>

			<div className={s.mainFirst}>
				<p className={s.paragraph}>
					<span className={s.paragraphm}>Психокон</span> - проект
					психологической помощи, психологического консультирования.
				</p>
				<p className={s.paragraph}>
					<span className={s.paragraphm}>Психокон</span>- сообщество психологов,
					объединённых общей философией и подходом: эмоционально-образной
					терапией
				</p>
				<p className={s.paragraph}>
					<span className={s.paragraphm}>Психокон</span>– для нас это, о законах
					души, о природной целостности человека. «Психо» - Психея - богиня из
					греческой мифологии, олицетворяющая Душу. «Кон» древнерусское слово -
					изначальная истина, свод неписаных внутренних правил, основанных на
					совести.
				</p>
				<p className={s.paragraph}>
					<span className={s.paragraphm}>
						Эмоционально-образная терапия (ЭОТ)
					</span>
					– это отечественный метод, который вобрал в себя лучшее из мировых
					достижений в психологии.
					<br />В ходе терапии мы вместе с клиентом:
					<br />
					1.Анализируем проблему;
					<br />
					2.Находим ее психологические причины;
					<br />
					3.Эмоциональные состояния, связанные с проблемой, корректируем через
					образы этих состояний. <br />
					Как следствие, клиент начинает видеть ситуацию шире и оценивать
					неприятные события в жизни не как проблему, а как задачу, которую он
					может решить и получить ценный опыт. Происходит «расклейка» клиента и
					проблемы, тем самым проблема решается быстро, результат сохраняется,
					энергия, потраченная на прежние состояния, возвращается в виде ресурса
					и опыта.
				</p>
				<div>
					<Image className={s.blotBlue1} src={blot1} alt="blot1" />
				</div>
				<div>
					<Image className={s.blotRed2} src={blot2} alt="blot2" />
				</div>
				<div>
					<Image className={s.blotBurgundy3} src={blot3} alt="blot3" />
				</div>
				<div>
					<Image className={s.blotBurgundy4} src={blot3} alt="blot4" />
				</div>
				<div>
					<Image className={s.blotBlue5} src={blot1} alt="blot5" />
				</div>
				<div>
					<Image className={s.blotRed6} src={blot2} alt="blot6" />
				</div>
			</div>
		</div>
	);
};

export default Main;
