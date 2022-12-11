import React, { useState } from 'react';
import s from './AffiliatesTable.module.css';

const AffiliatesTable = ({ affiliates }) => {
	let affiliatesElements = affiliates.map(a => {
		return (
			<div className={s.row}>
				<div>{a.name}</div>
				<div>{a.address}</div>
				<div>
					<a href={a.url}>{a.url}</a>
				</div>
			</div>
		);
	});

	return (
		<div className={s.container}>
			<div className={s.header}>
				<p>Назва ({affiliates.length})</p>
				<p>Адреса</p>
				<p>URL</p>
			</div>
			<div className={s.main}>{affiliatesElements}</div>
		</div>
	);
};

export default AffiliatesTable;
