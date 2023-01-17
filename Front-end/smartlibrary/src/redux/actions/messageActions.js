export const SetMessage = (text, color, textColor) => ({
	type: 'SHOW_MESSAGE',
	payload: {
		text: text,
		color: color,
		textColor: textColor,
	},
});
