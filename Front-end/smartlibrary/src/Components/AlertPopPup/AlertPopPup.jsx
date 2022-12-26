import { useRef } from 'react';
import { useEffect } from 'react';
import s from './AlertPopPup.module.css';

const AlertPopPup = ({ message }) => {
	const window = useRef();
	useEffect(() => {
		if (message != '') {
			window.current.classList.remove(s.hidden);
			window.current.classList.add(s.showed);
			setTimeout(() => {
				window.current.classList.remove(s.showed);
				window.current.classList.add(s.hidden);
			}, 2000);
		}
	}, [message]);
	return (
		<div ref={window} className={s.container}>
			<p>{message}</p>
			<div className={s.icon}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
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
