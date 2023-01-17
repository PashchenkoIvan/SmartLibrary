import { useRef } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import s from './AlertPopPup.module.css';

const AlertPopPup = () => {
	const window = useRef();
	const text = useRef();
	const icon = useRef();

	const message = useSelector(state => state.message);

	useEffect(() => {
		if (message.text != '') {
			window.current.classList.add(s.showed);
			window.current.style.background = message.color;
			text.current.style.color = message.textColor;
			icon.current.style.stroke = message.textColor;
			setTimeout(() => {
				window.current.classList.remove(s.showed);
				window.current.classList.add(s.hidden);
			}, 2000);
		} else {
			window.current.classList.add(s.hidden);
		}
	}, [message]);

	return (
		<div ref={window} className={s.container}>
			<p ref={text}>{message.text}</p>
			<div className={s.icon}>
				<svg
					ref={icon}
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.8}
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z'
					/>
				</svg>
			</div>
		</div>
	);
};

export default AlertPopPup;
