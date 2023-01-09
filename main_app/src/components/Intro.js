import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import './Intro.scss';

function Intro() {
	const pro = useRef();
	const introTitle = useRef();
	const explain = useRef();
	const refList = useRef([]);
	const typeList = useRef([]);
	let count = 0;
	let typeCount = 0;
	let isGo = true;
	let isType = true;
	let stop = false;

	useEffect(() => {}, []);

	let addActive = () => {
		setInterval(() => {
			if (isGo === true) {
				console.log('hi');
				activeFunc();
			} else {
				clearInterval(addActive);
			}
		}, 300);
	};

	let typeActive = () => {
		setInterval(() => {
			if (isType === true) {
				console.log('gogogoo');
				typeFunc();
			} else {
				clearInterval(typeActive);
			}
		}, 350);
	};

	function activeFunc() {
		refList.current[count].classList.add('active');
		count++;
		if (isGo && count >= refList.current.length) {
			isGo = false;
			count = 0;
			clearInterval(addActive);
		}
	}

	function typeFunc() {
		typeList.current[typeCount].classList.add('typeActive');
		typeCount++;
		if (isType && typeCount >= refList.current.length) {
			isType = false;
			typeCount = 0;
			clearInterval(typeActive);
		}
	}

	const scrollFunction = () => {
		
		addActive = setInterval(() => {
			if (isGo === true) {
				activeFunc();
			} else {
				count=0;
				clearInterval(addActive);
			}
		}, 300);

		typeActive = setInterval(() => {
			if (isType === true) {
				typeFunc();
			} else {
				typeCount = 0;
				clearInterval(typeActive);
			}
		}, 350);
		
	};
	

	window.addEventListener('scroll', () => {
		if (window.innerHeight > introTitle.current.getBoundingClientRect().top) {
			if (!stop) {
				isGo = true;
				isType = true;
				stop = true;
				scrollFunction();
				
			}
		} else {
			if (stop) {
				stop = false;
				isGo = false;
				isType = false;
				refList.current.forEach((el) => {
					el.classList.remove('active');
				});
				typeList.current.forEach((el) => {
					el.classList.remove('typeActive');
				});
			}
		}

		if (window.innerHeight > pro.current.getBoundingClientRect().top) {
			pro.current.classList.add('flip');
		} else {
			pro.current.classList.remove('flip');
			
		}

		if (window.innerHeight > explain.current.getBoundingClientRect().top) {
			console.log('gogo');
			explain.current.classList.add('flip');
			
		} else {
			explain.current.classList.remove('flip');
		}
	});

	
	
	return (
		<div className="intro">
			<StyledDiv>
				<div id="pro" ref={pro}>
					ROKN COMSUBFOR introduces to you
				</div>
				<div className="introTitle" ref={introTitle}>
					<StyledText>
					&nbsp;
					<div className="capital" ref={(id) => (refList.current[0] = id)}>
						I
					</div>
					&nbsp;&nbsp;&nbsp;&nbsp;
					<div className="typed-out" ref={(id) => (typeList.current[0] = id)}>
						nternational
					</div>
				</StyledText>
				<StyledText>
					<div className="capital" ref={(id) => (refList.current[1] = id)}>
						S
					</div>
					&nbsp;&nbsp;&nbsp;
					<div className="typed-out" ref={(id) => (typeList.current[1] = id)}>
						ubmarine
					</div>
				</StyledText>
				<StyledText>
					<div className="capital" ref={(id) => (refList.current[2] = id)}>
						E
					</div>
					&nbsp;&nbsp;&nbsp;
					<div className="typed-out" ref={(id) => (typeList.current[2] = id)}>
						ducation
					</div>
				</StyledText>
				<StyledText>
					<div className="capital" ref={(id) => (refList.current[3] = id)}>
						T
					</div>
					&nbsp;&nbsp;&nbsp;
					<div className="typed-out" ref={(id) => (typeList.current[3] = id)}>
						raining
					</div>
				</StyledText>
				<StyledText>
					<div className="capital" ref={(id) => (refList.current[4] = id)}>
						P
					</div>
					&nbsp;&nbsp;&nbsp;
					<div className="typed-out" ref={(id) => (typeList.current[4] = id)}>
						rogram
					</div>
				</StyledText>
				</div>
				<div className="explain" ref={explain}>
					A comprehensive submarine education program offered to foreign naval officers. Having been
					established in 2009, ISETP has produced numerous elite submariners that are applying what
					they learned in this program in their respective naval forces.
				</div>
			</StyledDiv>
			<div className="frame1"></div>
			<div className="frame2"></div>
			<div className="frame3"></div>
			<div className="frame4"></div>
		</div>
	);
}

const StyledDiv = styled.div`
	height: 25vh;
	width: 50vw;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const StyledText = styled.div`
	display: flex;
	justify-content: center;
	align-items: baseline;
`;

export default Intro;