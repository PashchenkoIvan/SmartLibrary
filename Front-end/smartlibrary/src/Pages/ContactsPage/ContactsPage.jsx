import s from './ContactsPage.module.css';
import Iframe from 'react-iframe';
import Luda from './images/luda.jpeg';
import { useEffect } from 'react';

const Contacts = props => {
	useEffect(() => {
		document.title = 'Контакти';
	}, []);
	props.setHeader(false);
	return (
		<div className={s.container}>
			<div className={s.block}>
				<Iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3205.0581719266543!2d35.03029361582813!3d48.38728994171444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbfb13c13f5433%3A0x3937755b663960b6!2z0LLRg9C7LiDQndCw0YPQutC-0LLQsCwgMjAsINCU0L7RgdC70ZbQtNC90LUsINCU0L3RltC_0YDQvtC_0LXRgtGA0L7QstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA1MjA3MQ!5e1!3m2!1sru!2sua!4v1670498886716!5m2!1sru!2sua'
					width='390'
					height='390'
					style='border:0;'
					allowfullscreen=''
					loading='lazy'
					referrerpolicy='no-referrer-when-downgrade'
				/>
				<div className={s.constact}>
					<div className={s.infoBlock}>
						<div className={s.title}>
							<h2>Адреса</h2>
						</div>
						<div className={s.mainPart}>
							<p>
								Дніпропетровська область Дніпровський район Селище Дослідне,
								вулиця Наукова 20 приміщення сільського клубу
							</p>
						</div>
					</div>
					<div className={s.infoBlock}>
						<div className={s.title}>
							<h2>Адреса електронної пошти</h2>
						</div>
						<div className={s.mainPart}>
							<a>artyukh.lyudmila@gmail.com</a>
						</div>
					</div>
				</div>
				<div className={s.personal}>
					<div className={s.title}>
						<h2>Вас обслуговує</h2>
					</div>
					<div className={s.mainPart}>
						<img src={Luda} alt='' />
					</div>
				</div>
			</div>
		</div>
	);
};
export default Contacts;
