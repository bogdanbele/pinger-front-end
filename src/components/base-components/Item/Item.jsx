import React from 'react';
import PropTypes from 'prop-types';
import styles from './Item.module.scss';

export default function Item(props) {
	const { children, className } = props;
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<div {...props} className={`${styles.Item} ${className}`}>
			{children}
		</div>
	);
}

Item.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
