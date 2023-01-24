import React from 'react';
import {
	Stack,
	Divider,
	Container,
	IconButton,
	Button,
	List,
	ListItem,
	Drawer,
	AppBar,
	Toolbar,
	Typography,
	Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// import EmailIcon from "@mui/icons-material/Email";
import { styled, useTheme } from '@mui/material/styles';

import { PeopleIcon, WorkflowIcon, JobsIcon } from './demo-icons';

import { LoremIpsum } from 'lorem-ipsum';

const StackedLabelButton = styled(Button)((/*props*/) => {
	return {
		flexDirection: 'column',
		display: 'contents',
	};
});

const drawerWidth = 250;

// eslint-disable-next-line react/prop-types
function LoremText({ units = 'p', count = '10' }) {
	const ipsumStuff = new LoremIpsum({
		units,
		count,
		sentencesPerParagraph: {
			max: 8,
			min: 4,
		},
		wordsPerSentence: {
			max: 16,
			min: 4,
		},
	});
	console.log([count, units]);
	return (
		<span>
			{ipsumStuff
				.generateParagraphs(count)
				.split(/\n/)
				.map((e, k) => (
					<p key={k}>{e}</p>
				))}
		</span>
	);
}

export default function Demo() {
	const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
	const [ipsum] = React.useState(<LoremText units={'p'} count={42} />);
	const theme = useTheme();

	return (
		<div>
			<AppBar position="fixed">
				<Toolbar variant="dense">
					<IconButton
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
						onClick={() => setIsDrawerOpen(!isDrawerOpen)}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6">
						Shellaced
						<sup
							style={{
								fontSize: '50%',
							}}
						>
							v0.0
						</sup>
					</Typography>
				</Toolbar>
			</AppBar>
			<Toolbar />
			<Drawer
				open={isDrawerOpen}
				onClose={() => setIsDrawerOpen(false)}
				anchor="left"
				variant="persistent"
				sx={{
					position: 'relative',
					zIndex: 1,
					'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
				}}
			>
				<Toolbar variant="dense" disableGutters={true} />
				<List>
					<ListItem>
						<Stack
							minWidth="100%"
							spacing={0.25}
							alignItems="center"
							alignContent="center"
						>
							<StackedLabelButton
								startIcon={<PeopleIcon />}
								onClick={() => setIsDrawerOpen(!isDrawerOpen)}
							>
								People
							</StackedLabelButton>
						</Stack>
					</ListItem>
					<ListItem>
						<Stack
							minWidth="100%"
							spacing={0.25}
							alignItems="center"
							alignContent="center"
						>
							<StackedLabelButton startIcon={<JobsIcon />}>
								Jobs
							</StackedLabelButton>
						</Stack>
					</ListItem>
					<ListItem>
						<Stack
							minWidth="100%"
							spacing={0.25}
							alignItems="center"
							alignContent="center"
						>
							<StackedLabelButton startIcon={<WorkflowIcon />}>
								Submittals
							</StackedLabelButton>
						</Stack>
					</ListItem>
				</List>
			</Drawer>
			<Box
				sx={{
					p: 1,
					marginLeft: isDrawerOpen ? 35 : 0,
					marginBottom: 4,
				}}
			>
				<Typography variant="body2" component={'div'}>
					{ipsum}
				</Typography>
			</Box>
			<Container
				sx={{
					position: 'fixed',
					m: 0,
					bottom: 0,
					bgcolor: 'background.paper',
				}}
				style={{ padding: 0 }}
				maxWidth="100%"
			>
				<Divider />
				<Typography variant="body2" textAlign="center" component="div">
					footer &copy; 2023
				</Typography>
			</Container>
		</div>
	);
}

