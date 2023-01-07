import { useContext } from 'react';

import s from './sideBar.module.css';
import { AddToPrefer, SideSignIn, RecBook } from '.';
import { ServicesContext } from '../../../../index';

const SideBar = props => {
	// const recBooksAdd = props.books.map(
	//   b =>
	//     b.category[0] === props.category[0] ?
	//       <div className={s.recBookContainer}>
	//         <Link to={`/${b.title}`} className={s.link} onClick={() => {this.forceUpdate()}}>
	//           <RecBook title={b.title}
	//                   cover_img_path={b.cover_img_path} />
	//         </Link>
	//         <span className={s.recBookGanre}>{b.category[0]}</span>
	//       </div>
	//       : ''
	//   )
	const Services = useContext(ServicesContext);

	return (
		<div className={s.sideBar}>
			{props.status !== 'anonym' ? <AddToPrefer /> : <SideSignIn />}
			{/* {recBooksAdd} */}
		</div>
	);
};

export default SideBar;
