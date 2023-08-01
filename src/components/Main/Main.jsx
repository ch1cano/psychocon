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
					психологического консультирования. Отечественный метод созданный на
					модальности Эмоционально-образной терапии. Данный метод обращается
					напрямую к подсознанию человека, посредством выражения состояния
					самоощущения через образы. Образы анализируются. Через такую работу
					выясняются причины состояний, и проводится психодинамическая
					транзакция истинного состояния индивида: гнев трансформируется, уходит
					годами копившаяся обида, снимается напряжение, отступает боль. ЭОТ
					позволяет быстро выйти из апатичных и депрессивных состояний. Помогает
					пережить боль от утраты, потери, расставания, а также наладить
					отношения с семьёй и привести в порядок рабочие отношения. Научит
					понимать себя и поможет выйти из состояния растерянности и "отсутствия
					почвы под ногами".
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
