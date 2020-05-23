import React from 'react';
import {createPortal} from 'react-dom';
import Card from '@material-ui/core/Card/Card';
import {useApolloClient, useQuery} from '@apollo/react-hooks';
import styles from './NotificationContainer.module.scss';
import {IS_NOTIFICATION_MODAL_OPEN} from '../../../../apollo/queries';

const NotificationContainer = props => {
	const client = useApolloClient();

	const closeNotificationModal = () => {
		client.writeData({data: {isNotificationModalOpen: false}});
	};

	const {data} = useQuery(IS_NOTIFICATION_MODAL_OPEN);

	// Render Component inside the portal

	const domElement = document.getElementById('portal');
	return data.isNotificationModalOpen ? createPortal(
		<div
			className={styles.NotificationContainer}
			onClick={closeNotificationModal}>
			<Card
				className='d-flex flex-column p-3 align-items-center'
				onClick={e => {
					e.stopPropagation();
				}}
			>
				{props.children}
			</Card>
		</div>,
		domElement
	) : null;
};

export default NotificationContainer;