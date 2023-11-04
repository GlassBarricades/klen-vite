import { useState } from "react";
import { AppShell, Footer, useMantineTheme } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { HeaderSimple } from "./Header";
import useFetchData from "../hooks/useFetchData";
import NavBarApp from "./NavBarApp";

const AdminLayout = ({ links }) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<NavBarApp links={links} opened={opened} admin={true} />}
      footer={
        <Footer height={60} p="md">
          Application footer
        </Footer>
      }
      header={
        <HeaderSimple opened={opened} setOpened={setOpened} admin={true} />
      }
    >
      <Outlet />
    </AppShell>
  );
};
export default AdminLayout;
