import React, { useState } from 'react';

const personalities = [
	{
		id: 1,
		year: 2015,
		name: 'Andre Iguodala',
		title: 'NBA FINALS MVP',
		subtitle: '2015 NBA Finals – Golden State Warriors',
		photoUrl: '/iguodala-mvp.jpg',
		description:
			'Andre Iguodala came off the bench to change the 2015 series, guarding LeBron James and providing timely scoring. His move into the starting lineup helped swing the momentum to Golden State, earning him the Finals MVP as the Warriors won their first title of the Steph Curry era.',
	},
	{
		id: 2,
		year: 2016,
		name: 'LeBron James',
		title: 'NBA FINALS MVP',
		subtitle: '2016 NBA Finals – Cleveland Cavaliers',
		photoUrl: '/lebron-mvp.jpg',
		description:
			'LeBron James led the Cavaliers back from a 3–1 deficit against the 73-win Warriors, posting historic numbers in scoring, rebounding, assists, steals, and blocks. His two-way dominance, highlighted by the iconic chasedown block in Game 7, delivered Cleveland its first NBA championship.',
	},
	{
		id: 3,
		year: 2017,
		name: 'Kevin Durant',
		title: 'NBA FINALS MVP',
		subtitle: '2017 NBA Finals – Golden State Warriors',
		photoUrl: '/durant-mvp.jpg',
		description:
			'In his first season with Golden State, Kevin Durant dominated the 2017 Finals against Cleveland. He scored efficiently from all over the floor and hit clutch shots, including a signature pull-up three in Game 3, securing both the championship and his first Finals MVP.',
	},
	{
		id: 4,
		year: 2018,
		name: 'Kevin Durant',
		title: 'NBA FINALS MVP',
		subtitle: '2018 NBA Finals – Golden State Warriors',
		photoUrl: '/durant-mvp-2018.jpg',
		description:
			'Durant repeated as Finals MVP in 2018 as the Warriors swept the Cavaliers. He combined efficient scoring, playmaking, and strong defense, capped by another deep Game 3 dagger three that helped Golden State secure back-to-back titles.',
	},
	{
		id: 5,
		year: 2019,
		name: 'Kawhi Leonard',
		title: 'NBA FINALS MVP',
		subtitle: '2019 NBA Finals – Toronto Raptors',
		photoUrl: '/kawhi-mvp.jpg',
		description:
			'Kawhi Leonard led the Raptors to their first championship, defeating a Warriors team dealing with major injuries. He carried a heavy scoring load while defending elite opponents, earning his second Finals MVP and cementing one of the most impressive playoff runs in recent history.',
	},
	{
		id: 6,
		year: 2020,
		name: 'LeBron James',
		title: 'NBA FINALS MVP',
		subtitle: '2020 NBA Finals – Los Angeles Lakers',
		photoUrl: '/lebron-mvp-2020.jpg',
		description:
			'Inside the Orlando bubble, LeBron James guided the Lakers past the Miami Heat to claim his fourth title and fourth Finals MVP. He controlled the series with all-around excellence, leading the floor, dictating pace, and delivering for Los Angeles in a season full of challenges.',
	},
	{
		id: 7,
		year: 2021,
		name: 'Giannis Antetokounmpo',
		title: 'NBA FINALS MVP',
		subtitle: '2021 NBA Finals – Milwaukee Bucks',
		photoUrl: '/giannis-mvp.jpg',
		description:
			'Giannis Antetokounmpo delivered a legendary Finals performance against the Phoenix Suns, capped by a 50-point Game 6 closeout. His relentless attacking, shot blocking, and leadership ended Milwaukee’s 50-year title drought and earned him the Finals MVP trophy.',
	},
	{
		id: 8,
		year: 2022,
		name: 'Stephen Curry',
		title: 'NBA FINALS MVP',
		subtitle: '2022 NBA Finals – Golden State Warriors',
		photoUrl: '/stephen-curry-mvp.jpg',
		description:
			'Stephen Curry finally added a Finals MVP to his résumé by leading the Warriors over the Boston Celtics. His deep shooting, off-ball movement, and clutch Game 4 performance swung the series, powering Golden State to its fourth title of the era.',
	},
	{
		id: 9,
		year: 2023,
		name: 'Nikola Jokic',
		title: 'NBA FINALS MVP',
		subtitle: '2023 NBA Finals – Denver Nuggets',
		photoUrl: '/nikola-jokic-mvp.jpg',
		description:
			'Nikola Jokic orchestrated the Nuggets’ offense from the center position, overwhelming the Miami Heat with his scoring, passing, and rebounding. His unique playmaking style helped Denver capture its first NBA championship, earning him the 2023 Finals MVP.',
	},
	{
		id: 10,
		year: 2024,
		name: 'Jaylen Brown',
		title: 'NBA FINALS MVP',
		subtitle: '2024 NBA Finals – Boston Celtics',
		photoUrl: '/jaylen-brown-mvp.jpg',
		description:
			'Jaylen Brown set the tone on both ends of the floor as the Celtics defeated the Dallas Mavericks in 2024. His aggressive drives, midrange scoring, and versatile defense throughout the series earned him the Finals MVP while Boston secured another banner.',
	},
];

function App() {
	const [index, setIndex] = useState(0);
	const [expanded, setExpanded] = useState(false);
	const person = personalities[index];

	const handleNext = () => {
		setIndex((prev) => (prev + 1) % personalities.length);
		setExpanded(false);
	};

	const handleBack = () => {
		setIndex((prev) => (prev === 0 ? personalities.length - 1 : prev - 1));
		setExpanded(false);
	};

	return (
		<div className="page-root">
			<header className="page-header">
				<div>
					<h1 className="header-title">Michael Dave P. Sicat - BSIT-3A</h1>
					<p className="header-subtitle">{person.subtitle}</p>
				</div>
			</header>

			<main className="page-main">
				<div className="card-column">
					<section className="card">
						<img
							src={person.photoUrl}
							alt={person.name}
							className="card-photo"
						/>
						<h2 className="card-name">
							{person.name} ({person.year})
						</h2>
						<p className="card-counter">
							{index + 1} of {personalities.length}
						</p>

						<button
							type="button"
							className="card-chevron"
							onClick={() => setExpanded((prev) => !prev)}
						>
							<span
								className={
									expanded ? 'chevron chevron-down' : 'chevron chevron-up'
								}
								aria-hidden="true"
							/>
							<span className="sr-only">
								{expanded ? 'Hide description' : 'Show description'}
							</span>
						</button>

						<div
							className={
								expanded
									? 'card-description expanded'
									: 'card-description collapsed'
							}
						>
							<p>{person.description}</p>
						</div>
					</section>

					<div className="card-buttons card-buttons-bottom">
						<button className="nav-button" onClick={handleBack}>
							BACK
						</button>
						<button className="nav-button" onClick={handleNext}>
							NEXT
						</button>
					</div>
				</div>

				<div className="page-right-space" />
			</main>
		</div>
	);
}

export default App;
