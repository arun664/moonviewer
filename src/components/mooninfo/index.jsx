import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function MoonInfo() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const TabSwitcher = ({ value }) => {
		switch (value) {
			case 0:
				return (
					<Stack spacing={2}>
						<Box sx={{ typography: "body1" }}>
							The brightest and largest object in our night sky, the Moon makes
							Earth a more livable planet by moderating our home planet`&rsquo;`s wobble
							on its axis, leading to a relatively stable climate. It also
							causes tides, creating a rhythm that has guided humans for
							thousands of years.
						</Box>
						<Box sx={{ typography: "body1" }}>
							The Moon was likely formed after a Mars-sized body collided with
							Earth several billion years ago.
						</Box>
						<Box sx={{ typography: "body1" }}>
							Earth`&rsquo;`s Moon is the only place beyond Earth where humans have set
							foot, so far.
						</Box>
						<Box sx={{ typography: "body1" }}>
							Earth`&rsquo;`s only natural satellite is simply called `&ldquo;`the Moon`&rdquo;` because
							people didn`&rsquo;`t know other moons existed until Galileo Galilei
							discovered four moons orbiting Jupiter in 1610.
						</Box>
						<Box sx={{ typography: "body1" }}>
							In Latin, the Moon is called Luna, which is the main adjective for
							all things Moon-related: lunar.
						</Box>
					</Stack>
				);
			case 1:
				return <Stack spacing={2}>popo</Stack>;
			case 2:
				return <Stack spacing={2}>popo</Stack>;
			case 3:
				return <Stack spacing={2}>popo</Stack>;
			default:
				return null;
		}
	};

	return (
		<Box sx={{ bgcolor: "background.paper" }}>
			<Tabs
				value={value}
				onChange={handleChange}
				variant="scrollable"
				scrollButtons
				allowScrollButtonsMobile
				aria-label="scrollable force tabs example"
			>
				<Tab label="Moon" />
				<Tab label="Landing Sites" />
				<Tab label="Chandrayan" />
				<Tab label="findings" />
			</Tabs>
			<Box
				sx={{
					bgcolor: "background.paper",
					width: 1,
					height: 1,
					padding: "20px 40px",
				}}
			>
				<TabSwitcher value={value} />
			</Box>
		</Box>
	);
}

export default MoonInfo;
