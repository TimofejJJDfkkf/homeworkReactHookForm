export const FormInput = ({ register, name, placeholder, validation, error }) => {
	return (
		<div>
			<input
				{...register(name, validation)}
				placeholder={placeholder}
			/>
			{error && <p>{error.message}</p>}
		</div>
	);
};