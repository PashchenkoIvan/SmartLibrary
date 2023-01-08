import Popup from 'reactjs-popup';

import s from './popUps.css';
import sp from '../../assets/styles/popUp.module.css';
import { qrCode, QrIcon } from '../Panel/img'



const PopupWindow = props => {
	return (
		<Popup
			trigger={
				<div className={sp.trigger}>
					{props.trigger}
				</div>
			}
			modal
		>
			{close => (
				<>
					<div className={sp.header}>
						<span>{props.title}</span>
						<button className={sp.closeBtn} onClick={close}>
							×
						</button>
					</div>
					<div className={sp.content}>
						{/* {console.log(props.url)} */}
						{props.content(props.url, props.el)}
					</div>
				</>
			)}
		</Popup>
	);
};

export default PopupWindow;
