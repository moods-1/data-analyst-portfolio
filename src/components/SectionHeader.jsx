import React from 'react';

export default function SectionHeader({ subText, headText, subClass, headClass }) {
	return (
		<div>
			<p className={`section-sub-text ${subClass}`}>{subText}</p>
			<h3 className={`section-head-text ${headClass}`}>{headText}</h3>
		</div>
	);
}
