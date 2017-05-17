import * as React from 'react';

export interface Props {
	name: string;
	level?: number;
}

function Hello( { name, level = 1}: Props) {
	if (level <= 0) {
		throw new Error('You could be a little more enthusiastic. :D');
	}
	return (
		<div className="hello">
			<div className="greeting">
				Hello {name + getExclamationMarks(level)}
			</div>
		</div>
		);
	}

export default Hello;

function getExclamationMarks(level: number) {
	return Array(level + 1).join('!');
}