export const FormInput = ({ register, name, placeholder, rules, error }) => {
	return (
		<div>
			<input
				{...register(name, rules)}
				placeholder={placeholder}
			/>
			{error && <p>{error.message}</p>}
		</div>
	);
};