import React, {useRef} from 'react';
import styled from 'styled-components';
import './Stat.scss';


function Stat() {
	
	const num1 = useRef(null);
	const num2 = useRef(null);
	const num3 = useRef(null);
	const title3 = useRef(null);
	const text3 = useRef(null);
	let go1 = true;
	let go2 = true;
	let go3 = true;
	
	window.addEventListener('scroll', () => {
		if(window.innerHeight>num1.current.getBoundingClientRect().top) {
			if(go1){
				countUp(num1.current, 10);
				countUp(num2.current, 9);
				countUp(num3.current, 100);
			}
			
			go1 = false;
		} else {
			go1 = true;
		}
		
		if(window.innerHeight>title3.current.getBoundingClientRect().top) {
			if(go2){
				title3.current.classList.add('flip');
			}
			go2 = false;
		} else {
			title3.current.classList.remove('flip');
			go2 = true;
		}
		
		if(window.innerHeight>text3.current.getBoundingClientRect().top) {
			if(go3){
				text3.current.classList.add('flip');
			}
			go3 = false;
		} else {
			text3.current.classList.remove('flip');
			go3 = true;
		}

	});
	
	const countUp = (target, max) => {
		let time = 0;
		for(let i=0;i<max;i++){
			max>90 ? time+=8 : (max>9 ? time+=72 : time+=80);
			
			setTimeout(() => {
				if(i===max-1){
					target.innerHTML = `${i+1}+`;
				}else{
					target.innerHTML = `${i+1}`;
				}
			}, time);
		}
	}
	
	
	return (
		<div className="stat">
			<div className="title3" ref={title3}>
				A Continuous Effort.
			</div>
			<div className="text3" ref={text3}>
				Numbers prove why ISETP is one of the greatest submarine 
				education programs.<br/> Now, it's your turn.
			</div>
			<StyledBoxes>
				<div className='line'></div>
				<div className='textBox box1'>
					<div id='num1' ref={num1}>
						
					</div>
					<div className="annote">Years of<br/> Education</div>
					<div className='extraExplain' style={{textAlign: 'center'}}>
						{window.innerWidth <=700 ? 
							'' 
						 :
							'The overall program is organized by SUBETRON 909, an affiliated institution of COMSUBFOR.'
						}
						
					</div>
					<div id="hidden">
						{window.innerWidth <=700 ? 
							'Next up, 2023.' 
						 :
							'Established at 2019 while 2020 and 2021 was unavailable due to COVID-19'
						}
						
					</div>
				</div>
				<div className='textBox box2'>
					<div id='num2' ref={num2}>
						9+
					</div>
					<div className="annote">Number of<br/> Countries</div>
					<div className='extraExplain' style={{textAlign: 'center'}}>
						{window.innerWidth <=700 ? 
							'' 
						 :
							'An average of 2-3 officers come from each country,	mostly being Southeast Asian nations.'
						}
						
					</div>
					<div id="hidden">
						{window.innerWidth <=700 ? 
							'All passionate for SUBs!' 
						 :
							`Indonesia, Malaysia, Philippines, United Arab Emirates, Vietnam, Thailand, Ecuador, Bangladesh`
						}
						
					</div>
				</div>
				<div className='textBox box3'>
					<div id='num3' ref={num3}>
						100+
					</div>
					<div className="annote">Number of<br/> Participants</div>
					<div className='extraExplain' style={{textAlign: 'center'}}>
						{window.innerWidth <=700 ? 
							'' 
						 :
							'Interestingly, students who graduated this program	sometimes enroll again next year!'
						}
						
					</div>
					<div id="hidden">
						{window.innerWidth <=700 ? 
							'An Unbreakable Bond' 
						 :
							'Graduates of this program, instructors, and even naval interpreters still have close relationships with each other. Once enrolled, one will have an unbreakable bond with submariners all over the world.'
						}
					</div>
				</div>
			</StyledBoxes>
		</div>
	)
}

const StyledBoxes = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
`;


export default Stat;