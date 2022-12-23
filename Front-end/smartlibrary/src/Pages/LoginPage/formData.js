const formData = () => {
	return (
		[
			{
				label: "Email",
				type: "email",
				value: "",
				name: "email",
			},
			{
				label: "Пароль",
				type: "password",
				value: "",
				name: "password",
			},
		]
	);
};

export default formData;