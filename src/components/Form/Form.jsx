"use client";
import React, { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Input from "react-phone-number-input/input";
import s from "./Form.module.css";
import emailjs from "@emailjs/browser";

const Form = () => {
	const [isSubmit, setIsSubmit] = useState(false);
	const formRef = useRef();

	const sendEmail = (e) => {
		emailjs
			.sendForm(
				"service_1",
				"template_wv4nz5h",
				formRef.current,
				"LusvWydXUgt_5TJIF"
			)
			.then(
				(result) => {
					console.log(result);
					reset();
					setIsSubmit(true);
				},
				(error) => {
					error(alert("Ошибка отпрвки данных"));
				}
			);
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control,
	} = useForm({ mode: "onBlur" });

	function onSubmit(data) {
		console.log(data);
		reset();
	}

	return (
		<div className={s.formContiner}>
			<div className={s.descriptions}>
				<div className={s.divBunner}>
					<p className={s.buner}>Запись онлайн</p>
				</div>
				<div className={s.divBunerDesc}>
					<p className={s.bunerDesc}>
						Администратор центра сориентирует вас по специфике услуг и врачей и
						запишет к нужному специалисту.
					</p>
				</div>
			</div>
			{isSubmit && <div className={s.alert}>Заявка отправлена!</div>}
			<form ref={formRef} className={s.form} onSubmit={handleSubmit(sendEmail)}>
				<div className={s.formMain}>
					<div className={s.descriptionInput}>Услуга</div>
					<select
						className={s.select}
						name="usluga"
						{...register("usluga", { required: "Выберите услугу" })}>
						<option value="" hidden>
							-- Выберите услугу --
						</option>
						<option>Консультация</option>
						<option>Интервенция</option>
					</select>
					<br />
					{errors.usluga && (
						<span className={s.errorsSpan}>{errors.usluga.message}</span>
					)}
					<div className={s.descriptionInput}>Выбрать дату</div>
					<input
						name="data"
						className={s.formInput}
						type="text"
						{...register("data", {
							required: "Введите время приема",
							minLength: { value: 3, message: "Введите дату полностью" },
							maxLength: { value: 30, message: "Слшиком длинная дата" },
						})}
					/>
					<br />
					{errors.data && (
						<span className={s.errorsSpan}>{errors.data.message}</span>
					)}
					<div className={s.descriptionInput}>Специалист</div>
					<select
						className={s.select}
						name="specialist"
						{...register("specialist", { required: "Выберите специалиста" })}>
						<option value="" hidden>
							-- Выберите специалиста --
						</option>
						<option>Никитина Ольга Владимировна</option>
						<option>Петрова Светлана Анатольевна</option>
						<option>Попова Юлия Констанитиновна</option>
					</select>
					<br />
					{errors.specialist && (
						<span className={s.errorsSpan}>{errors.specialist.message}</span>
					)}
					<div className={s.descriptionInput}>Контактное лицо</div>
					<input
						name="name"
						className={s.formInput}
						type="text"
						placeholder="Ваше имя"
						{...register("name", {
							required: "Введите ваше имя",
							minLength: { value: 2, message: "Введите имя полностью" },
							maxLength: {
								value: 30,
								message: "Ошибка",
							},
						})}
					/>
					<br />
					{errors.name && (
						<span className={s.errorsSpan}>{errors.name.message}</span>
					)}
					<div className={s.descriptionInput}>Телефон контактного лица</div>
					<Controller
						control={control}
						name="tel"
						rules={{
							required: "Введите ваш номер телефона",
							minLength: { value: 12, message: "Номер введен не полностю" },
							maxLength: { value: 12, message: "Слишком много цифр" },
						}}
						render={({ field }) => (
							<Input
								{...field}
								className={s.formInput}
								country="RU"
								international
								withCountryCallingCode
								defaultCountry="RU"
								onChange={(value) => field.onChange(value)}
							/>
						)}
					/>
					<br />
					{errors.tel && (
						<span className={s.errorsSpan}>{errors.tel.message}</span>
					)}
					<div className={s.descriptionInput}>
						Комментарий к записи &#40;не обязательно&#41;
					</div>
					<input
						name="comment"
						className={s.formInput}
						type="text"
						{...register("comment")}
					/>
				</div>
				<button className={s.formBtn} type="submit">
					Отправить
				</button>
			</form>
		</div>
	);
};

export default Form;
