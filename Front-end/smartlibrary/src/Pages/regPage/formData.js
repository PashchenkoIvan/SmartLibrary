const formData = () => {
	return (
		[
			{
				label: "ПІБ",
				type: "text",
				value: "",
				name: "full_name",
			},
			{
				label: "Номер телефону",
				type: "text",
				value: "+380",
				name: "phone",
			},
			{
				label: "Email",
				type: "email",
				value: "",
				name: "email",
			},
		]
	);
};

export default formData;