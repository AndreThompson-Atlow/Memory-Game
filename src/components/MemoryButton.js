import React, { useContext } from 'react';
import Girl from '../components/Girl';
import { GlobalContext } from '../components/GlobalContext';

const MemoryButton = ({ num, size, id, active }) => {
	const [globals, setGlobals] = useContext(GlobalContext);
	const girl = <Girl num={num} size={size} />;
	const hidden = <Girl num='0' size={size} />;

	const flipCard = () => {
		//If card is already active, do nothing.
		if (active !== true) {
			//If two cards are already active, nothing should happen
			if (globals.active < 2) {
				setGlobals((globals) => ({
					active: globals.active + 1,
					score: globals.score,
					activeGirls: [...globals.activeGirls, id],
					allGirls: globals.allGirls,
				}));
				let tempGirls = [];
				let tempVal = globals.activeGirls[globals.activeGirls.length - 1];
				if (globals.activeGirls[globals.activeGirls.length - 1] > 16) {
					tempGirls.push(tempVal - 16);
				} else {
					tempGirls.push(tempVal);
				}
				if (id > 16) {
					tempGirls.push(id - 16);
				} else {
					tempGirls.push(id);
				}

				//If there are two active cards after the first step, we need to check the two cards against eachother.
				if (globals.active === 1) {
					//need to check if girls are equal and update state accordingly
					if (tempGirls[0] === tempGirls[1]) {
						//Girls are the same. Increase score and keep girls.
						setGlobals((globals) => ({
							active: 0,
							score: globals.score + 3,
							activeGirls: globals.activeGirls,
							allGirls: globals.allGirls,
						}));
					} else {
						//Girls are not the same. Decrease score and reset both girls.
						setTimeout(() => {
							setGlobals((globals) => ({
								active: 0,
								score: globals.score - 1,
								activeGirls: globals.activeGirls.slice(
									0,
									globals.activeGirls.length - 2
								),
								allGirls: globals.allGirls,
							}));
						}, 1000);
					}
				}
			}
		}
	};
	return (
		<div onClick={flipCard}>
			{active && girl}
			{!active && hidden}
		</div>
	);
};

export default MemoryButton;
