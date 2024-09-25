import { Container, Grid, Title } from "@mantine/core";
import ServiceCard from "../components/Service/Service-card";

const Service = () => {
  return (
		<>
			<Container pt='md'>
				<Title align='center' mb="xl" order={1}>
					Услуги
				</Title>
				<Grid>
					<Grid.Col md={6}>
						<ServiceCard
							title={'Металлообработка'}
							img={
								'https://firebasestorage.googleapis.com/v0/b/klen-824fd.appspot.com/o/pic%2Fwelder-metal-svgrepo-com.svg?alt=media&token=86aaae85-d85d-484c-b3bd-5757c1e22240'
							}
							link={'metalwork'}
						/>
					</Grid.Col>
					<Grid.Col md={6}>
						<ServiceCard
							title={'Полимерное окрашивание'}
							img={
								'https://firebasestorage.googleapis.com/v0/b/app-52b7a.appspot.com/o/brush9.svg?alt=media&token=03fc54ca-392c-4131-a05b-c49b4875a373'
							}
							link={'coloring'}
						/>
					</Grid.Col>
				</Grid>
			</Container>
		</>
	)
};
export default Service;
