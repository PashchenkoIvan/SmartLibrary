import { useState } from 'react';
import { Link } from 'react-router-dom';

import s from './table.module.css';
import { qrCode, QrIcon } from '../Panel/img'
import Popup from '../Popup/PopupWindow'

const Table = props => {
	const [keys, setKeys] = useState(props.keys);

	const keysMap = keys.map(k => {
		const style = {
			width: `${k.width}%`,
			textAlign: k.align === 'center' ? 'center' : (k.align === 'flex-end' ? 'right' : 'left'),
		}
		if (k.isCounter === true) {
			return(
				<div style={style}>{k.name} ({props.data.length})</div>
			)
		} else {
			return(
				<div style={style}>{k.name}</div>
			)
		}
	})

	const dataMap = props.data.map(el => {
		const propMap = (el) => {
			return keys.map(k => {
				const style = {
					width: `${k.width}%`,
					justifyContent: k.align === 'center' ? 'center' : (k.align === 'flex-end' ? 'flex-end' : 'flex-start'),
					backgroundColor: k.colors ? (["Немає боргів", "У бібліотеці", "Повернена"].includes(el[k.propertyTitle]) ? k.colors[0] : (["Не у бібліотеці", "Є борги", "Не повернена"].includes(el[k.propertyTitle])) ? k.colors[1] : (["Читається"].includes(el[k.propertyTitle])) ? k.colors[2] : k.colors[3]) : 'transparent'
				}
				if (k.isLink === true) {
					return (
						<div style={style}>
							<Link
								to={k.path + el.id}
								className={s.link}
								onClick={() => window.scrollTo(0, 0)}
							>
								{el[k.property]}
							</Link>
						</div>
					)
				} else if (k.property === "btns") {
					return (
						<div style={style} className={s.btnsContainer}>
							{
								(() => (
									k.btns.map(b => {
										const style = {
											backgroundColor: b.color
										}
										if (b.isLink) {
											return (
												<Link
													to={b.path + el.id}
													className={s.link}
													onClick={() => window.scrollTo(0, 0)}
												>
													<button style={style} className={s.btn}>{b.name}</button>
												</Link>
											)
										} else if (b.isPopup) {
											console.log(el);
											console.log(b.showPopUp);
											return (
												<Popup trigger={<button style={style} className={s.btn}>{b.name}</button>} title={b.popupTitle} el={el} url={el[k.urlProperty]} content={b.showPopUp} /> 
											)
										} else { }
									})
								))()
							}
						</div>
					)
				} else if (k.property === "phone") {
					return (
						<div style={style}>
							<a href={`tel:${el[k.property]}`}>{el[k.property]}</a>
						</div>
					)
				} else if (k.property === "email") {
					return (
						<div style={style}>
							<a href={`mailto:${el[k.property]}`}>{el[k.property]}</a>
						</div>
					)
				} else if (k.property === "status") {
					return (
						<div style={style} className={s.status}>
							{el[k.propertyTitle]}
						</div>
					)
				} else if (typeof(el[k.property]) === "boolean") {
					return (
						<div style={style}>
							{el[k.property] ? "+" : "—"}
						</div>
					)
				} else if (k.isPopup) {
					return (
						<div style={style}>
							<Popup trigger={<img src={qrCode} alt='' />} content={k.showPopUp} title={el[k.propertyTitle]} url={el[k.urlProperty]} />
						</div>
					)
				} else {
					return (
						<div style={style}>{el[k.property]}</div>
					)
				}
			})
		}

		return(
			<div className={s.tableEl}>
				{propMap(el)}
			</div>
		)
	})

	return (
		<div className={s.container}>
			<div className={s.keysBar}>
				{keysMap}
			</div>
			<div className={s.table}>
				{dataMap}
			</div>
		</div>
	);
};

export default Table;
