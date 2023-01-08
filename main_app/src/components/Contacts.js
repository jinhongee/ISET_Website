import React, {useRef} from 'react';
import './Contacts.scss';

function Contacts() {
	
	const ad = useRef(null);
	const adTemp = useRef(null);
	
	let go = true;
	let go1 = true;
	
	
	window.addEventListener('scroll', () => {
		if(window.innerHeight + 100 >adTemp.current.getBoundingClientRect().top) {
			if(go1){
				adTemp.current.classList.add('flip2');
			}
			go1 = false;
		} else {
			adTemp.current.classList.remove('flip2');
			go1 = true;
		}
		
		if(window.innerHeight + 100 >ad.current.getBoundingClientRect().top) {
			if(go){
				ad.current.classList.add('flip2');
			}
			go = false;
		} else {
			ad.current.classList.remove('flip2');
			go = true;
		}
	});
	
	
	
	return (
		<div className="contacts">
			<div className='svgPic'>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f5f5f5" fillOpacity="1" d="M0,96L60,85.3C120,75,240,53,360,37.3C480,21,600,11,720,26.7C840,43,960,85,1080,106.7C1200,128,1320,128,1380,128L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
				<div className='box4'>
					<div className='ad' ref={ad}>
						<div className='title4 text3'>Want to Join?</div>
						<div className='explain4 explain5'>
							ROKN COMSUBFOR and SUBETRON 909 await for your application!
						</div>
					</div>
					<div className='ad adTemp' ref={adTemp}>
						<div className='contactTitle'>[ Contact ]</div>
						<div className='explain4 google'>
							<div className='contactMethod'>
								{window.innerWidth <=700 ? 
									'[ Gmail ]' 
								 :
									'Gmail: '
								}
								&nbsp;&nbsp; 
							</div>
							<div>
								pappies0827@gmail.com<br />
								jinhong_min@naver.com
							</div>
						</div>
						<div className='explain4 google'>
							<div className='contactMethod'>
								{window.innerWidth <=700 ? 
									'[ Instagram ]' 
								 :
									'Instagram: '
								}
								&nbsp;&nbsp; 
							</div>
							<div>
								iset_application<br />
								jinhong0827
							</div>
						</div>
						<div className='explain4 google'>
							<div className='contactMethod'>
								{window.innerWidth <=600 ? 
									'[ Phone ]' 
								 :
									'Phone: '
								}
								&nbsp;&nbsp; 
							</div>
							<div>
								+82 10-9933-2361<br />
								
							</div>
						</div>
					</div>
				</div>
				
			</div>
			<div className='footer'>
					{window.innerWidth <=700 ? 
						'Copyright @ROKN COMSUBFOR & Jinhong Min' 
					 :
						'The copyright of this site is based on ROKN COMSUBFOR and Jinhong Min'
					}
				</div>
		</div>
	)
}

export default Contacts;