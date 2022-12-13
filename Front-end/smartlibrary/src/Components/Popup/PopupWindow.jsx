import { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';

import s from './popUps.css';
import sp from './popUps.module.css';
import { qrCode, QrIcon } from '../Panel/img'



const PopupWindow = props => {
	const [title, setTitle] = useState(props.title);
	const [trigger, setTrigger] = useState(props.trigger)

	return (
		<Popup
			trigger={
				<div className={sp.trigger}>
					{trigger}
				</div>
			}
			modal
		>
			{close => (
				<>
					<div className={sp.header}>
						<span>{title}</span>
						<button className={sp.closeBtn} onClick={close}>
							×
						</button>
					</div>
					<div className={sp.content}>
						{props.content(props.url, props.el)}
					</div>
				</>
			)}
		</Popup>
	);
};

export default PopupWindow;
