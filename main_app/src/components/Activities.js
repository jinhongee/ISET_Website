import React, { useRef } from 'react';
import './Activities.scss';

function Activities() {
	const title3 = useRef(null);
	const flexBox = useRef(null);
	const flexBox1 = useRef(null);
	let go1 = true;
	let go2 = true;

	window.addEventListener('scroll', () => {
		if (window.innerHeight + 100 > title3.current.getBoundingClientRect().top) {
			if (go1) {
				title3.current.classList.add('flip');
			}
			go1 = false;
		} else {
			title3.current.classList.remove('flip');
			go1 = true;
		}

		if (window.innerHeight + 250 > flexBox.current.getBoundingClientRect().top) {
			if (go2) {
				flexBox.current.classList.add('flip2');
				flexBox1.current.classList.add('flip2');
			}
			go2 = false;
		} else {
			flexBox.current.classList.remove('flip2');
			flexBox1.current.classList.remove('flip2');
			go2 = true;
		}
	});

	return (
		<div className="activities">
			<div className="title3" ref={title3}>
				What We Do.
			</div>
			<div className="flexBox1" ref={flexBox}>
				<div className="fb1">
					<div className="ft1">Theory</div>
					<div className="hiddenbox1">
						<div className="boxx">
							<div style={{padding: '2vh 2vw 2vh 2vw'}}>
								Since ISETP's curriculum is focused on both the basics 
								and professional aspects of submarine operation, it is
								useful for all aspiring submariners.<br/><br/>
								Courses include but are not limited to Mental Gym, 
								Propulsion, Navigation, Buoyancy and Trim, Targeting,
								and Repairment.
							</div>
						</div>
					</div>
				</div>
				<div className="fb2">
					<div className="ft1">Simulation</div>
					<div className="hiddenbox2">
						<div className="boxx">
							<div style={{padding: '2vh 2vw 2vh 2vw'}}>
								One of the biggest advatages of ISETP is that students
								have the opportunity to actually practice what they
								learned in theory classes.<br/><br/>
								The background picture displays a live moment of a
								student participating in damage control, trying to
								extinguish a k-class fire.
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flexBox1" ref={flexBox1}>
				<div className="fb3">
					<div className="ft1">Culture Trips</div>
					<div className="hiddenbox3">
						<div className="boxx">
							<div style={{padding: '2vh 2vw 2vh 2vw'}}>
								Nobody hates free trips, right? Students of '2022 got
								to explore three different culturally meaningful locations
								in Korea: Seoul, Jeju, and Geojae.<br/><br/>
								Through such breaks, students get to deepen relationships
								with one another and leave unforgettable memories in
								Korea.
							</div>
						</div>
					</div>
				</div>
				<div className="fb4">
					<div className="ft1">Friendly Matches</div>
					<div className="hiddenbox4">
						<div className="boxx">
							<div style={{padding: '2vh 2vw 2vh 2vw'}}>
								You can't miss out the games between students
								and instructors as well. Every Wednesday, we dismiss class
								early and head out to the soccer field.<br/><br/>
								After the game, we have a special treat prepared!
								Players get to rest and chat while sipping the delicious
								fruit punches made by our own instructors.
							</div>
						</div>
					</div>
				</div>
			</div>
			
			
		</div>
	);
}

export default Activities;