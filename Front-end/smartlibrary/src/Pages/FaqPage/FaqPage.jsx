import { Routes, Route, NavLink } from 'react-router-dom';
import s from './FaqPage.module.css';

const FaqPage = props => {
	props.setHeader(false);
	return (
		<div className={s.container}>
			<div className={s.inner}>
				<div className={s.videos}>
					<Routes>
						<Route
							path='making-orders'
							element={
								<iframe
									width='100%'
									height='100%'
									src='https://www.youtube.com/embed/2EdET7zspP0'
									title='YouTube video player'
									frameborder='0'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowfullscreen
								></iframe>
							}
						/>
						<Route
							path='account-options'
							element={
								<iframe
									width='100%'
									height='100%'
									src='https://www.youtube.com/embed/reFCVu3nTVQ'
									title='YouTube video player'
									frameborder='0'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowfullscreen
								></iframe>
							}
						/>
						<Route
							path='personal-messages'
							element={
								<iframe
									width='100%'
									height='100%'
									src='https://www.youtube.com/embed/epzpf3s3yvc'
									title='YouTube video player'
									frameborder='0'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowfullscreen
								></iframe>
							}
						/>
						<Route
							path='activities-in-library'
							element={
								<iframe
									width='100%'
									height='100%'
									src='https://www.youtube.com/embed/ZLnaQ9G1jZI'
									title='YouTube video player'
									frameborder='0'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowfullscreen
								></iframe>
							}
						/>
						<Route
							path='on-the-main-page'
							element={
								<iframe
									width='100%'
									height='100%'
									src='https://www.youtube.com/embed/UI8ptRvedV8'
									title='YouTube video player'
									frameborder='0'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowfullscreen
								></iframe>
							}
						/>
						<Route
							path='new-receipts'
							element={
								<iframe
									width='100%'
									height='100%'
									src='https://www.youtube.com/embed/KePWWFzd4Nc'
									title='YouTube video player'
									frameborder='0'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowfullscreen
								></iframe>
							}
						/>
					</Routes>
				</div>
				<div className={s.navigation}>
					<NavLink
						className={navData =>
							(navData.isActive ? s.isActive : s.notActive) + ' ' + s.item
						}
						to='making-orders'
					>
						Як замовити книжку?
					</NavLink>
					<NavLink
						className={navData =>
							(navData.isActive ? s.isActive : s.notActive) + ' ' + s.item
						}
						to='account-options'
					>
						Опції особистого кабінету. Як це працює?
					</NavLink>
					<NavLink
						className={navData =>
							(navData.isActive ? s.isActive : s.notActive) + ' ' + s.item
						}
						to='personal-messages'
					>
						Особисті повідомлення. Як зв'язатися с бібліотекарем?
					</NavLink>
					<NavLink
						className={navData =>
							(navData.isActive ? s.isActive : s.notActive) + ' ' + s.item
						}
						to='activities-in-library'
					>
						Події в бібліотеці. Що це?
					</NavLink>
					<NavLink
						className={navData =>
							(navData.isActive ? s.isActive : s.notActive) + ' ' + s.item
						}
						to='on-the-main-page'
					>
						Що є на головній сторінці?
					</NavLink>
					<NavLink
						className={navData =>
							(navData.isActive ? s.isActive : s.notActive) + ' ' + s.item
						}
						to='new-receipts'
					>
						Як я дізнаюсь про нові надходження?
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default FaqPage;
