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
					психологической помощи, психологического консультирования. Психокон
					("психея", греч - душа, "кон" древнерусское - изначальная истина, свод
					неписаных внутренних правил, основанных на совести) - законы души.
					Психокон - сообщество психологов, объединённых общей философией и
					подходом: эмоционально-образной терапией. Эмоционально-образная
					терапия (ЭОТ) – это отечественный метод, который вобрал в себя лучшее
					из мировых достижений в психологии. В ЭОТ вы решите свою проблему
					быстрее, чем в другом направлении, и результат останется с вами
					навсегда. В ходе терапии мы анализируем вместе с клиентом его
					проблему, находим ее психологические причины, те эмоциональные
					состояния, которые вступили в противоречие, и корректируем их через
					образы этих состояний. Как следствие, клиент начинает видеть ситуацию
					шире и оценивать неприятные события в жизни не как проблему, а как
					задачу, которую он может решить и получить ценный опыт.
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
