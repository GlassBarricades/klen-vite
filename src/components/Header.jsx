import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  MediaQuery,
  Image,
  useMantineTheme,
  Anchor,
  Button,
  Drawer,
} from "@mantine/core";
import { NavLink } from "react-router-dom";
import { ThemeChange } from "./Theme-change";
import ContactForm from "./ContactForm";
import Grafik from "./Grafik";
import HeaderCallBtn from "./Header-call-btn";
import { openModal } from "@mantine/modals";
import { useDisclosure } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    textTransform: "uppercase",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

export function HeaderSimple({ linksMain }) {
  const theme = useMantineTheme();
  const { classes, cx } = useStyles();
  const [openeDrawer, { open, close }] = useDisclosure(false);

  const items = linksMain.map((link, indx) => {
    return (
      <Anchor
        component={NavLink}
        to={link.link}
        key={indx}
        className={classes.link}
        onClick={close}
      >
        {link.name}
      </Anchor>
    );
  });

  return (
    <Header height={{ base: 70 }} p="md">
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <Drawer
          opened={openeDrawer}
          onClose={close}
          title="Меню"
          overlayProps={{ opacity: 0.5, blur: 4 }}
        >
          {items}
          <Group spacing="md" align="center" mt="xl" position="center">
            <HeaderCallBtn />
            <Button
              mr="md"
              variant="gradient"
              gradient={{ from: "blue", to: "royalblue" }}
              color="orange"
              onClick={() => {
                openModal({
                  title: "Форма заказа звонка",
                  children: (
                    <>
                      <ContactForm />
                    </>
                  ),
                });
              }}
            >
              Заказать звонок
            </Button>
            <ThemeChange />
          </Group>
        </Drawer>
        <MediaQuery largerThan="md" styles={{ display: "none" }}>
          <Burger
            onClick={open}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>
        <MediaQuery
          smallerThan="md"
          styles={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Container className={classes.header}>
            <Image
              width={60}
              src="https://firebasestorage.googleapis.com/v0/b/klen-824fd.appspot.com/o/klen-logo.png?alt=media&token=e8ed398c-1e98-4418-8f8e-f182e6ce6b88"
            />

            <Grafik />
            <MediaQuery smallerThan="md" styles={{ display: "none" }}>
              <Group spacing="xs">{items}</Group>
            </MediaQuery>
            <MediaQuery smallerThan="md" styles={{ display: "none" }}>
              <Group spacing="md" align="center">
                <HeaderCallBtn />
                <Button
                  mr="md"
                  variant="gradient"
                  gradient={{ from: "blue", to: "royalblue" }}
                  color="orange"
                  onClick={() => {
                    openModal({
                      title: "Форма заказа звонка",
                      children: (
                        <>
                          <ContactForm />
                        </>
                      ),
                    });
                  }}
                >
                  Заказать звонок
                </Button>
                <ThemeChange />
              </Group>
            </MediaQuery>
          </Container>
        </MediaQuery>
      </div>
    </Header>
  );
}
