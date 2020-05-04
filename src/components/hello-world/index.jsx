import React from 'react';
import PropTypes from 'prop-types';
import style from './hello-world.scss';

const HelloWorld = ({ title }) => (
	<div>
		<div className={style['hello-world']}>{title}</div>
		<p className="d-flex w-100">Hello</p>
	</div>
);

HelloWorld.propTypes = {
	title: PropTypes.string,
};

export default HelloWorld;
