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
						<p className={s.titleText}>Андрюх Людмила</p>
						<p className={s.underTitleText}>Найкращий бібліотекарь</p>
						<div className={s.buttonBlock}>
							<p>Додано 72 книжки</p>
							<img src="http://1.smart-library.in.ua/img/bestMarker.png" alt="" />
						</div>
					</div>
					<div className={s.editBlock}>
						<p className={s.titleText}>Карпенко Тарас</p>
						<p className={s.underTitleText}>Найкращий читач</p>
						<div className={s.buttonBlock}>
							<p>Прочитана 72 книжки</p>
							<img src="http://1.smart-library.in.ua/img/bestMarker.png" alt="" />
						</div>
					</div>
				</div>
			</div>
			<PopularBooks data={props.data} />
		</div>
	);
};
export default MainPage;
