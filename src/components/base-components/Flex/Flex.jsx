import React from 'react';
import PropTypes from 'prop-types';
import styles from './Flex.module.scss';

export default function Flex(props) {
	const { className, children } = props;
	return (
		<div className={`${styles.Flex} ${className ? ` ${className}` : ''}`}>
			{children}
		</div>
	);
}

Flex.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
