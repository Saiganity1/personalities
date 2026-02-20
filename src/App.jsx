import { useState } from 'react';
import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Collapse,
	Container,
	Divider,
	IconButton,
	Paper,
	Stack,
	Typography,
} from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

const personalities = [
	{
		id: 1,
		year: 2015,
		fullName: 'Andre Iguodala',
		title: 'NBA FINALS MVP',
		subtitle: '2015 NBA Finals – Golden State Warriors',
		imageUrl: '/iguodala-mvp.jpg',
		description:
			'Andre Iguodala came off the bench to change the 2015 series, guarding LeBron James and providing timely scoring. His move into the starting lineup helped swing the momentum to Golden State, earning him the Finals MVP as the Warriors won their first title of the Steph Curry era.',
	},
	{
		id: 2,
		year: 2016,
		fullName: 'LeBron James',
		title: 'NBA FINALS MVP',
		subtitle: '2016 NBA Finals – Cleveland Cavaliers',
		imageUrl: '/lebron-mvp.jpg',
		description:
			'LeBron James led the Cavaliers back from a 3–1 deficit against the 73-win Warriors, posting historic numbers in scoring, rebounding, assists, steals, and blocks. His two-way dominance, highlighted by the iconic chasedown block in Game 7, delivered Cleveland its first NBA championship.',
	},
	{
		id: 3,
		year: 2017,
		fullName: 'Kevin Durant',
		title: 'NBA FINALS MVP',
		subtitle: '2017 NBA Finals – Golden State Warriors',
		imageUrl: '/durant-mvp.jpg',
		description:
			'In his first season with Golden State, Kevin Durant dominated the 2017 Finals against Cleveland. He scored efficiently from all over the floor and hit clutch shots, including a signature pull-up three in Game 3, securing both the championship and his first Finals MVP.',
	},
	{
		id: 4,
		year: 2018,
		fullName: 'Kevin Durant',
		title: 'NBA FINALS MVP',
		subtitle: '2018 NBA Finals – Golden State Warriors',
		imageUrl: '/durant-mvp-2018.jpg',
		description:
			'Durant repeated as Finals MVP in 2018 as the Warriors swept the Cavaliers. He combined efficient scoring, playmaking, and strong defense, capped by another deep Game 3 dagger three that helped Golden State secure back-to-back titles.',
	},
	{
		id: 5,
		year: 2019,
		fullName: 'Kawhi Leonard',
		title: 'NBA FINALS MVP',
		subtitle: '2019 NBA Finals – Toronto Raptors',
		imageUrl: '/kawhi-mvp.jpg',
		description:
			'Kawhi Leonard led the Raptors to their first championship, defeating a Warriors team dealing with major injuries. He carried a heavy scoring load while defending elite opponents, earning his second Finals MVP and cementing one of the most impressive playoff runs in recent history.',
	},
	{
		id: 6,
		year: 2020,
		fullName: 'LeBron James',
		title: 'NBA FINALS MVP',
		subtitle: '2020 NBA Finals – Los Angeles Lakers',
		imageUrl: '/lebron-mvp-2020.jpg',
		description:
			'Inside the Orlando bubble, LeBron James guided the Lakers past the Miami Heat to claim his fourth title and fourth Finals MVP. He controlled the series with all-around excellence, leading the floor, dictating pace, and delivering for Los Angeles in a season full of challenges.',
	},
	{
		id: 7,
		year: 2021,
		fullName: 'Giannis Antetokounmpo',
		title: 'NBA FINALS MVP',
		subtitle: '2021 NBA Finals – Milwaukee Bucks',
		imageUrl: '/giannis-mvp.jpg',
		description:
			'Giannis Antetokounmpo delivered a legendary Finals performance against the Phoenix Suns, capped by a 50-point Game 6 closeout. His relentless attacking, shot blocking, and leadership ended Milwaukee’s 50-year title drought and earned him the Finals MVP trophy.',
	},
	{
		id: 8,
		year: 2022,
		fullName: 'Stephen Curry',
		title: 'NBA FINALS MVP',
		subtitle: '2022 NBA Finals – Golden State Warriors',
		imageUrl: '/stephen-curry-mvp.jpg',
		description:
			'Stephen Curry finally added a Finals MVP to his résumé by leading the Warriors over the Boston Celtics. His deep shooting, off-ball movement, and clutch Game 4 performance swung the series, powering Golden State to its fourth title of the era.',
	},
	{
		id: 9,
		year: 2023,
		fullName: 'Nikola Jokic',
		title: 'NBA FINALS MVP',
		subtitle: '2023 NBA Finals – Denver Nuggets',
		imageUrl: '/nikola-jokic-mvp.jpg',
		description:
			'Nikola Jokic orchestrated the Nuggets’ offense from the center position, overwhelming the Miami Heat with his scoring, passing, and rebounding. His unique playmaking style helped Denver capture its first NBA championship, earning him the 2023 Finals MVP.',
	},
	{
		id: 10,
		year: 2024,
		fullName: 'Jaylen Brown',
		title: 'NBA FINALS MVP',
		subtitle: '2024 NBA Finals – Boston Celtics',
		imageUrl: '/jaylen-brown-mvp.jpg',
		description:
			'Jaylen Brown set the tone on both ends of the floor as the Celtics defeated the Dallas Mavericks in 2024. His aggressive drives, midrange scoring, and versatile defense throughout the series earned him the Finals MVP while Boston secured another banner.',
	},
];

function App() {
	const [index, setIndex] = useState(0);
	const [expanded, setExpanded] = useState(false);
	const person = personalities[index];

	const heading = 'NBA Finals MVPs (2015–2024)';
	const identification = {
		fullName: 'Michael Dave P. SIcat',
		subject: 'Software Development',
		section: 'BSIT-3A',
	};

	const handleNext = () => {
		setIndex((prev) => (prev + 1) % personalities.length);
		setExpanded(false);
	};

	const handleBack = () => {
		setIndex((prev) => (prev === 0 ? personalities.length - 1 : prev - 1));
		setExpanded(false);
	};

	return (
		<Container maxWidth="md" sx={{ py: { xs: 2, sm: 4 } }}>
			<Stack spacing={2}>
				<Box>
					<Typography variant="h4" component="h1" sx={{ fontWeight: 800 }}>
						{heading}
					</Typography>
					<Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
						Showing {person.title} winners • {person.subtitle}
					</Typography>
				</Box>

				<Paper variant="outlined" sx={{ p: 2 }}>
					<Box
						sx={{
							display: 'grid',
							gridTemplateColumns: { xs: '1fr', sm: '160px 1fr' },
							columnGap: 2,
							rowGap: 0.5,
						}}
					>
						<Typography variant="body2" color="text.secondary">
							Full Name
						</Typography>
						<Typography variant="body2" sx={{ fontWeight: 600 }}>
							{identification.fullName}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Subject
						</Typography>
						<Typography variant="body2" sx={{ fontWeight: 600 }}>
							{identification.subject}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Section
						</Typography>
						<Typography variant="body2" sx={{ fontWeight: 600 }}>
							{identification.section}
						</Typography>
					</Box>
				</Paper>

				<Card variant="outlined" sx={{ overflow: 'hidden' }}>
					<CardMedia
						component="img"
						image={person.imageUrl}
						alt={person.fullName}
						sx={{
							height: { xs: 360, sm: 520 },
							objectFit: 'contain',
							bgcolor: 'background.default',
						}}
					/>
					<CardContent>
						<Typography variant="h5" sx={{ fontWeight: 800, lineHeight: 1.15 }}>
							{person.fullName}{' '}
							<Box component="span" sx={{ color: 'text.secondary', fontWeight: 700 }}>
								({person.year})
							</Box>
						</Typography>
						<Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
							{index + 1} of {personalities.length} • {person.subtitle}
						</Typography>
					</CardContent>

					<CardActions sx={{ px: 2, pb: 2, pt: 0, justifyContent: 'space-between' }}>
						<Box sx={{ display: 'flex', gap: 1 }}>
							<IconButton aria-label="Previous" onClick={handleBack}>
								<ArrowBackRoundedIcon />
							</IconButton>
							<IconButton aria-label="Next" onClick={handleNext}>
								<ArrowForwardRoundedIcon />
							</IconButton>
						</Box>
						<Button
							variant="contained"
							onClick={() => setExpanded((prev) => !prev)}
							sx={{ textTransform: 'none', fontWeight: 700 }}
						>
							{expanded ? 'Read less' : 'Read more'}
						</Button>
					</CardActions>

					<Collapse in={expanded} timeout="auto" unmountOnExit>
						<Divider />
						<CardContent>
							<Typography variant="body2" sx={{ lineHeight: 1.6, textAlign: 'justify' }}>
								{person.description}
							</Typography>
						</CardContent>
					</Collapse>
				</Card>
			</Stack>
		</Container>
	);
}

export default App;
