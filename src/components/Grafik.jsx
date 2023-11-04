import { Stack, Text, Group, MediaQuery } from "@mantine/core";
import { Clock } from "tabler-icons-react";

const Grafik = () => {
  return (
		<>
			<MediaQuery smallerThan='lg' styles={{ display: 'none' }}>
				<Group>
					<Clock color='royalblue' size={31} />
					<Stack spacing={0}>
						<Text>График работы:</Text>
						<Text>Пн-Пт: 9:00-17:00</Text>
					</Stack>
				</Group>
			</MediaQuery>
		</>
	)
};
export default Grafik;
