export const GenderSelect = ({ register }) => {
	return (
		<select {...register("sex")}>
			<option value="female">Женщина</option>
			<option value="male">Мужчина</option>
			<option value="other">Другое</option>
		</select>
	);
};