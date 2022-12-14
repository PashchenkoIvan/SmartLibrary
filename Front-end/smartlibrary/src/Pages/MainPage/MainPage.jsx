import s from './MainPage.module.css';
import { PopularBooks } from '../../Components';
// import Calendar from 'react-calendar';
import GCalendar from '../../Components/GlobalCalendar/GCalendar';
// import { useState } from 'react';

const MainPage = props => {
	props.setHeader(true);
	return (
		<div className={s.container}>
			<div className={s.zahodi}>
				<div className={s.infoBlock}>
					<p>З нами цікавіше</p>
					<h1>ЗАХОДИ БІБЛІОТЕКИ</h1>
				</div>
				<div className={s.bottomBlock}>
					<GCalendar/>
					<div className={s.editBlock}>
						<p>Андрюх Людмила</p>
						<div className={s.buttonBlock}></div>
					</div>
					<div className={s.editBlock}>
						<p>Карпенко Тарас</p>
						<div className={s.buttonBlock}></div>
					</div>
				</div>
			</div>
			<PopularBooks data={props.data} />
		</div>
	);
};
export default MainPage;
