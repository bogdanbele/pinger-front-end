import React from 'react';
import PropTypes from 'prop-types';
import styles from './Row.module.scss';

function Row(props) {
	const {className, children, holderClass} = props;
	return <div className={`${styles.RowHolder}${holderClass ? ` ${holderClass}` : ''}`}>
		<div className={`${styles.Row}${className ? ` ${className}` : ''}`}>
			{children}
		</div>
	</div>;
}

Row.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	holderClass: PropTypes.string
};

export default Row;
