import { useEffect, useContext } from 'react';

import s from './MainPage.module.css';
import { AuthContext } from '../../index';
import { PopularBooks, RecommendedBooks } from '../../Components';
import GCalendar from '../../Components/GlobalCalendar/GCalendar';
import MainVideoBlock from '../../Components/MainVideoBlock/MainVideoBlock';
import Medal from './images/medal.png';

const MainPage = props => {
	props.setHeader(true);

	const Auth = useContext(AuthContext);

	useEffect(() => {
		document.title = 'Головна';
	}, []);

	return (
		<div className={s.container}>
			<MainVideoBlock />
			<div className={s.zahodi}>
				<div className={s.infoBlock}>
					<p>З нами цікавіше</p>
					<h1>ЗАХОДИ БІБЛІОТЕКИ</h1>
				</div>
				<div className={s.bottomBlock}>
					<GCalendar />
					<div className={s.chartBlock}>
						<div className={s.editBlock}>
							<p className={s.titleText}>Андрюх Людмила</p>
							<p className={s.underTitleText}>Найкращий бібліотекарь</p>
							<div className={s.buttonBlock}>
								<p>Додано 72 книжки</p>
								<img src={Medal} alt='' />
							</div>
						</div>
						<div className={s.editBlock}>
							<p className={s.titleText}>Карпенко Тарас</p>
							<p className={s.underTitleText}>Найкращий читач</p>
							<div className={s.buttonBlock}>
								<p>Прочитана 72 книжки</p>
								<img src={Medal} alt='' />
							</div>
						</div>
					</div>
				</div>
			</div>

			{Auth.status === 'user' ? <RecommendedBooks books={props.books} /> : ''}
			<PopularBooks books={props.books} />
		</div>
	);
};
export default MainPage;
