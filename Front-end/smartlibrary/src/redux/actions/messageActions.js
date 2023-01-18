export const SetMessage = (text, type) => {
	switch (type) {
		case 'success': {
			return {
				type: 'SHOW_MESSAGE',
				payload: {
					text: text,
					color: '#69C398',
					textColor: '#fff',
				},
			};
		}
		case 'warning': {
			return {
				type: 'SHOW_MESSAGE',
				payload: {
					text: text,
					color: '#FFFB76',
					textColor: '#000',
				},
			};
		}
		case 'error': {
			return {
				type: 'SHOW_MESSAGE',
				payload: {
					text: text,
					color: 'rgb(248, 126, 115)',
					textColor: '#fff',
				},
			};
		}
		default: {
			return {
				type: 'SHOW_MESSAGE',
				payload: {
					text: text,
					color: '#FFFB76',
					textColor: '#000',
				},
			};
		}
	}
};
