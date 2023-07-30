import Image from "next/image";
import React from "react";
import s from "./Main.module.css";
import blot1 from "@/assets/blots/blot1.png"
import blot2 from "@/assets/blots/blot2.png"
import blot3 from "@/assets/blots/blot3.png"

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
					<strong>Психокон</strong> - проект психологического
					консультирования. Отечественный метод созданный на модальности
					Эмоционально-образной терапии. Данный метод обращается напрямую к
					подсознанию человека, посредством выражения состояния самоощущения
					через образы. Образы анализируются. Через такую работу выясняются
					причины состояний, и проводится психодинамическая транзакция истинного
					состояния индивида: гнев трансформируется, уходит годами копившаяся
					обида, снимается напряжение, отступает боль. ЭОТ позволяет быстро
					выйти из апатичных и депрессивных состояний. Помогает пережить боль от
					утраты, потери, расставания, а также наладить отношения с семьёй и
					привести в порядок рабочие отношения. Научит понимать себя и поможет
					выйти из состояния растерянности и "отсутствия почвы под ногами".
				</p>
				<div>
					<Image className={s.blotBlue1} src={blot1} alt="blot1" />
				</div>
				<div>
					<Image className={s.blotRed2} src={blot2} alt="blot1" />
				</div>
				<div>
					<Image className={s.blotBurgundy3} src={blot3} alt="blot1" />
				</div>
				<div>
					<Image className={s.blotBurgundy4} src={blot3} alt="blot1" />
				</div>
				<div>
					<Image className={s.blotBlue5} src={blot1} alt="blot1" />
				</div>
				<div>
					<Image className={s.blotRed6} src={blot2} alt="blot1" />
				</div>
			</div>

			{/* <div className={s.mainTwo}>
				<p className={s.paragraph}>
					<span className={s.span}>Философия проекта</span>: Вера в свой
					потенциал. Мы считаем, что для органичного самоощущения в любой
					ситуации необходимо увидеть и убрать препятствия которые появляются в
					нас в процессе жизни. Если мы избавляемся от внутренних препятствий то
					всё прекрасно заработает. Каждый человек имеет внутренний потенциал,
					который будет раскрываться, если ему ничего не будет мешать. Вера в
					потенциал: "быть в порядке" - крайне важна. Именно возможность дать
					человеку освободиться от препятствий тем самым изменив своё
					эмоциональное состояние. Каждый может раскрыть потенциал данный ему
					природой - это находится в корне философии проекта "Психокон". Какие
					варианты работы (услуги): Онлайн консультации из любой точки мира.
					Офлайн консультации в городах: Пермь, Краснодар, (Пусть пока будет МСК
					третьим) Интервизии со специалистами Групповые и личные занятия со
					спортсменами и тренерами в области психологической подготовки, а также
					социального взаимодействия.
				</p>
			</div>
			<div className={s.mainThree}>
				<p className={s.paragraph}>
					<span className={s.span}>Определение понятий</span> (его переделывали)
					Психокон - проект психологического консультирования. Созданный на
					Отечественном методе и модальности Эмоционально-образной терапии.
					Помогает пережить боль от утраты, потери, расставания, а также
					наладить отношения с семьёй и привести в порядок рабочие отношения.
					Научит понимать себя и поможет выйти из состояния растерянности и
					"отсутствия почвы под ногами". Эмоционально-образная терапия (ЭОТ):
					Данный метод обращается напрямую к подсознанию человека, посредством
					выражения состояния самоощущения через образы. Образы анализируются.
					Через такую работу выясняются причины состояний, и проводится
					психодинамическая транзакция истинного состояния индивида: гнев
					трансформируется, уходит годами копившаяся обида, снимается
					напряжение, отступает боль. ЭОТ позволяет быстро выйти из апатичных и
					депрессивных состояний. (скорее всего, будет добавлено, ещё несколько
					методов, но там сложные названия, я не вывезу на клаветелефона их
					набирать на слух)
				</p>
			</div> */}
		</div>
	);
};

export default Main;
