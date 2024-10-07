import React, { useEffect, useRef } from 'react';

function ClickOutsideHandler(props) {
	const { outsideFunction, className } = props;
	const wrapperRef = useRef();

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
				if(outsideFunction) outsideFunction();
			}
		};
		document.addEventListener('click', handleClickOutside, true);
		return () =>
			document.removeEventListener('click', handleClickOutside, true);
	}, [outsideFunction]);
	return <div ref={wrapperRef} className={`${className}`}>{props.children}</div>;
}

export default ClickOutsideHandler;