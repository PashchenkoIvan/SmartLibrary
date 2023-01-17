import { useEffect, useContext } from 'react';

import s from './MainPage.module.css';
import { PopularBooks, RecommendedBooks } from '../../Components';
import GCalendar from '../../Components/GlobalCalendar/GCalendar';
import MainVideoBlock from '../../Components/MainVideoBlock/MainVideoBlock';
import Medal from './images/medal.png';
import { useSelector } from 'react-redux';

const MainPage = props => {
	props.setHeader(true);

	const books = useSelector(state => state.books.books);

	useEffect(() => {
		document.title = 'Головна';
	}, []);

	return (
		<div className={s.container}>
			<MainVideoBlock books={books} />
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

			{props.status === 'user' ? <RecommendedBooks books={books} /> : ''}
			<PopularBooks books={books} />
		</div>
	);
};
export default MainPage;
