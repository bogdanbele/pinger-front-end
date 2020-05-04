import React from 'react';
import PropTypes from 'prop-types';
import styles from './Icon.module.scss';

//   <Icon><FaTwitter></Icon>

export default function Icon(props) {
	const {className, children} = props;
	return (
		<div className={`${styles.Icon}${className ? ` ${className}` : ''}`}>
			{children}
		</div>
	);
}

Icon.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
