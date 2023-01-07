import { useState } from 'react';

import ActivitiesForm from '../ActivitiesForm/ActivitiesForm';

import sp from '../../../../../assets/styles/popUp.module.css';

const CreateEvent = props => {
	const [event, setEvent] = useState({
		name: '',
		smallDescription: '',
		bigDescription: '',
		category: '',
		dateTime: '',
	});
	
	return (
		<div className={sp.container}>
			<div className={sp.header}>
				<span>Створення нового заходу</span>
				<button className={sp.closeBtn} onClick={props.close}>
					×
				</button>
			</div>
			<div className={sp.content}>
				<ActivitiesForm activity={event} />
			</div>
		</div>
	);
};

export default CreateEvent;
