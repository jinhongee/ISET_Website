import React, {useEffect, useRef} from 'react';
import './Qna.scss';
import { Link} from "react-router-dom";
import qnaData from '../data/qnaData'


function Qna() {
	
	
	useEffect(() => {
		window.scrollTo(0, 0);
	});
	
	const inputRef = useRef([]);
	const navBar = useRef(null);
	let tracker = true;
	
	console.log(qnaData);
	
	window.addEventListener('scroll', (e) => {
		if(window.scrollY > 50){
			navBar.current.style.position = 'fixed';
			navBar.current.style.top = '0';
			navBar.current.style.height = '8vh';
			navBar.current.style.backgroundColor= 'rgba(0, 0, 0, 0.8)';
		} else {
			navBar.current.style.position = 'absolute';
			navBar.current.style.top = '5vh';
			navBar.current.style.height = '10vh';
			navBar.current.style.backgroundColor= 'rgba(0, 0, 0, 0.6)';
		}
	});

	const clickHandle = (params, e) => { 
		
		tracker = !tracker;
		if(tracker){
			inputRef.current[params].style.animation = 'closing 0.3s linear';
		} 
		inputRef.current[params].classList.toggle('show');
		inputRef.current[params+qnaData.length].classList.toggle('turn');
	}
	
	return (
		<div className="qna">
			<div className="bar">
				<span>
					{window.innerWidth <=700 ? 
						'Next is at May 2023. Heads up for updates!' 
					 :
						'The next program is scheduled at roughly May 2023. Heads up for updates!'
					}
					
				</span>
			</div>
			<div className="barBox">
				<div className="navBar" ref={navBar}>
					<div className="titleBox">
						<Link to="/*" style={{ textDecoration: "none", color: 'inherit' }}>
							<div className="title">ISET Program</div>
						</Link>
						
						<div className="extra">The ideal path to a submariner</div>
					</div>
					<div className="specBar">
						<Link to="/qna" style={{ textDecoration: "none", color: 'inherit' }}>
							<div className="qna">QnA</div>
						</Link>
						<div className="qna">Docs</div>
					</div>
				</div>
			</div>
			<div className='mainQna'>
				<div className='ghost3'></div>
				<div className='quoteBox'>
					<div className='header white'>
						Need more help?<br />
						Get it here.
					</div>
				</div>
			</div>
			<div className='introText'>
					Below are the questions that were frequently asked related to application 
				{window.innerWidth > 750 ? <br /> : ''} or specific details about the program.
				</div>
			<div className='qnaContent'>
				<div className='qBox'>
					{qnaData.map((el) => {
						return (
							<div className='lister' onClick={(e)=>{clickHandle(el[0], e)}} key={el[0]}>
								<div className='boxy' style={{display: 'flex', alignItems: 'center', zIndex: '3'}}>
									<img 
										src={require('../img/qnaArrow.png')} 
										alt='adsf' 
										ref={id => (inputRef.current[el[0]+qnaData.length] = id)}
										/>
									<span>{el[1]}</span>
								</div>
								<div className='aBox'>
									<div className='answer' ref={id => (inputRef.current[el[0]] = id)}>
										{el[2]}
									</div>
								</div>

							</div>
						)
						
					})}
					
					
				</div>
			</div>
			<div className='footer qnaFooter'>
					{window.innerWidth <=700 ? 
						'Copyright @ROKN COMSUBFOR & Jinhong Min' 
					 :
						'The copyright of this site is based on ROKN COMSUBFOR and Jinhong Min'
					}
				</div>
		</div>
	)
}

export default Qna;