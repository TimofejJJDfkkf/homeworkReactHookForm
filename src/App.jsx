import { useForm } from "react-hook-form";
import { FormInput } from "./components/FormInput";
import { GenderSelect } from "./components/GenderSelect";

export default function App() {
	const { register, handleSubmit, formState: { errors } } = useForm({
		defaultValues: {
			firstName: "",
			secondName: "",
			sex: "",
			email: "",
			password: "",
			phone: ""
		}
	});

	const onSubmit = (data) => console.log(data);

	return (
		<>
			<h1>Вход</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				
				<FormInput
					register={register}
					name="firstName"
					placeholder="Имя"
					validation={{
						required: "Заполните имя",
						pattern: {
							value: /^[A-Za-zА-Яа-яЁё]+$/,
							message: "Имя должно содержать только буквы"
						}
					}}
					error={errors.firstName}
				/>

				<FormInput
					register={register}
					name="secondName"
					placeholder="Фамилия"
					validation={{
						required: "Заполните фамилию",
						pattern: {
							value: /^[A-Za-zА-Яа-яЁё]+$/,
							message: "Фамилия должна содержать только буквы"
						}
					}}
					error={errors.secondName}
				/>

				<GenderSelect register={register} />

				<FormInput
					register={register}
					name="email"
					placeholder="Почта"
					validation={{
						required: "Заполните email",
						pattern: {
							value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
							message: "Некорректный email"
						}
					}}
					error={errors.email}
				/>

				<FormInput
					register={register}
					name="password"
					placeholder="пароль"
					validation={{
						required: "Заполните пароль",
						pattern: {
							value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
							message: "Некорректный пароль"
						}
					}}
					error={errors.password}
				/>

				<FormInput
					register={register}
					name="phone"
					placeholder="Номер телефона"
					validation={{
						required: "Заполните номер",
						pattern: {
							value: /^\+?[1-9]\d{9,14}$/,
							message: "Некорректный номер телефона"
						}
					}}
					error={errors.phone}
				/>

				<input type="submit" />
			</form>
		</>
	);
}