import { useRef, useEffect } from 'react';
import { Link} from "react-router-dom";
import './MainSlide.scss';

//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
//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



function MainSlide() {
	const slides = [ 
		[
			1,
			'A Spectacular Experience',
			'with astounding instructors. I loved every part of the curriculum including not only theory such as Mental Gym and BRC usage but also actual trainings like damage control or steering simulations. Given the chance, I have no doubt that I will return to ROKN and take this course again, hungry for more.',
		],
		[
			2,
			'Simply Effective, Strictly Professional',
			"classes and coursework. Students can receive well-organized textbooks and throrough explanations from instructors and naval interpreters. It's one of the few education programs that I want to take again. For those who are still hesitating their application, I strongly encourage to jump in.",
		],
		[
			3,
			'One Shot, One Hit, One Sink!',
			"I still remember the slogan from the ROKN Submarine Force Command. As a former graduate of this program, I can assure future students that ISET Program is beyond just classes and problem solving. It's a precious opportunity to befriend foreign officers and make cherishable memories.",
		],
	];
	
	let range = parseInt(window.innerHeight* 0.85);
	const inputRef = useRef([]);
	const pics = useRef(null);
	const initiate = useRef(0);
	const navBar = useRef(null);
	let scroll = 0;
	let mouse = 0;
	
	
	
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
	
	
	window.addEventListener('beforeunload', (event) => {
		event.preventDefault();
		pics.current.style.transform = 'translateX(0vw)';
		pics.current.style.transition = '0s';
	});
	
	window.addEventListener('mousemove', (event) => {
		mouse = event.pageY;
	});
	
	window.addEventListener('scroll', () => {
		initiate.current = window.scrollY;
	});
	
	
	
	const autoSlide = () => {
		setInterval(() => {
			if(mouse>range || window.outerWidth<700){
				rightClick();
			}
		}, 4000);
	}
	
	
	const slideAnimation = (scroll) => {
		let [header1, para1, btn1, header2, para2, btn2, header3, para3, btn3] = inputRef.current;
		const headers = [header1, header2, header3];
		const paras = [para1, para2, para3];
		const btns = [btn1, btn2, btn3];
		pics.current.style.transform = `translateX(${scroll/3}%)`;
		pics.current.style.transition = '0.5s';
		setTimeout(() => {
			headers.forEach((el) => el.classList.remove('toggleHeader'));
			paras.forEach((el) => el.classList.remove('togglePara'));
			btns.forEach((el) => el.classList.remove('toggleBtn'));
			if (scroll === 0) {
				header1.classList.toggle('toggleHeader');
				para1.classList.toggle('togglePara');
				btn1.classList.toggle('toggleBtn');
			} else if (scroll === -100) {
				header2.classList.toggle('toggleHeader');
				para2.classList.toggle('togglePara');
				btn2.classList.toggle('toggleBtn');
			} else if (scroll === -200) {
				header3.classList.toggle('toggleHeader');
				para3.classList.toggle('togglePara');
				btn3.classList.toggle('toggleBtn');
			}
			
		}, 100);
	};

	const leftClick = () => {
		scroll >= 0 ? (scroll = -200) : (scroll += 100);
		slideAnimation(scroll);
	};

	const rightClick = () => {
		scroll <= -200 ? (scroll = 0) : (scroll -= 100);
		slideAnimation(scroll);
	};
	
	
	
	useEffect(() => {
		setTimeout(() => {
			window.scrollTo(0,0);
			rightClick();
			rightClick();
			rightClick();
			window.scrollTo(0, initiate.current);
			console.log(initiate.current);
		}, 50)
		window.scrollTo(0,0);
		autoSlide();
	})
	
	

	return (
		<div className="container">
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
						<Link to="*" style={{ textDecoration: "none", color: 'inherit' }}>
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

			<div className="pics" ref={pics}>
				{slides.map((el) => {
					let count = 3*(el[0]-1)
					const imgName = 'img_' + el[0] + ' slide';
					const headerName = el[0] === 1 ? 'header toggleHeader' : 'header';
					const paraName = el[0] === 1 ? 'para togglePara' : 'para';
					const btnName = el[0] === 1 ? 'toggleBtn' : '';
					return (
						<div className="temp" key={el[0]}>
							<div className={imgName}></div>
							<div className="review">
								<div className="quoteBox">
									<div className="text">
										<div 
											className={headerName}
											ref={id => (inputRef.current[count] = id)}>
											"{el[1]}"
										</div>
										<p 
											className={paraName} 
											ref={id => (inputRef.current[count+1] = id)}>
											<br />
											<br />
											{el[2]}
										</p>
									</div>
									<button 
										className={btnName} 
										ref={id => (inputRef.current[count+2] = id)}>
										'22 participant
									</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>

			<div className="arrowBox">
				<div className="leftBox arrow" onClick={leftClick}>
					<img src={require('../img/arrow_back.png')} alt="no" />
				</div>
				<div className="ghost"></div>
				<div className="rightBox arrow" onClick={rightClick}>
					<img src={require('../img/arrow_forward.png')} alt="no" />
				</div>
			</div>
			
			
		</div>
	);
}

export default MainSlide;
