import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ServicesContext } from '../../../index';

import Popups from './Popups/Popups';
import GCalendar from '../../../Components/GlobalCalendar/GCalendar';

import s from './Cabinet.module.css';

import Qr from '../image/qrcode.png';

// import 'react-calendar/dist/Calendar.css';

const Cabinet = () => {
	const Services = useContext(ServicesContext);

	return (
		<div className={s.container}>
			<p className={s.cabinetTitle}>ОСОБИСТИЙ КАБІНЕТ</p>
			<div className={s.block}>
				<div className={s.qrAndEdit}>
					<div className={s.qrBlock}>
						<p>Особисттий QR-код</p>ы
						<div className={s.qrCode}>
							<img src={Qr} alt='Qr-code' />
						</div>
					</div>
					<div className={s.editBlock}>
						<p>Pashchenko Ivan</p>
						<div className={s.buttonBlock}>
							<Popups />
							<Link
								to='/'
								className={s.link}
								onClick={() => {
									Services.AuthService.Logout();
									return this.forceUpdate();
								}}
							>
								Вийти з системи
							</Link>
						</div>
					</div>
				</div>
				<GCalendar />
			</div>
		</div>
	);
};
export default Cabinet;
