import { useState } from "react";
import { AppShell, Footer, useMantineTheme } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { HeaderSimple } from "./Header";
import NavBarApp from "./NavBarApp";

const App = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const linksMain = [
		{
			link: '/',
			name: 'Главная',
		},
		{
			link: '/about-us',
			name: 'О нас',
		},
		{
			link: '/service',
			name: 'Услуги',
		},
		{
			link: '/catalog',
			name: 'Продукция',
		},
		{
			link: '/price',
			name: 'Прайсы',
		},
		{
			link: '/contacts',
			name: 'Контакты',
		},
	]
  return (
		<AppShell
			styles={{
				main: {
					background:
						theme.colorScheme === 'dark'
							? theme.colors.dark[8]
							: theme.colors.gray[0],
				},
			}}
			navbarOffsetBreakpoint='sm'
			asideOffsetBreakpoint='sm'
			// navbar={<NavBarApp links={linksMain} opened={opened} setOpened={setOpened} />}
			header={
				<HeaderSimple
					opened={opened}
					setOpened={setOpened}
					linksMain={linksMain}
				/>
			}
		>
			<Outlet />
		</AppShell>
	)
};
export default App;
