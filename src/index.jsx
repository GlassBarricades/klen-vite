import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import App from "./App";
import { ModalsProvider } from "@mantine/modals";

function Main() {
  const [orderLocal, setOrderLocal] = useLocalStorage({
    key: "order",
    defaultValue: [],
  });
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: "mantine-color-scheme",
    defaultValue: "dark",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          globalStyles: (theme) => ({
            ".active": {
              "&, &:hover": {
                backgroundColor: theme.fn.variant({
                  variant: "light",
                  color: theme.primaryColor,
                }).background,
                color: theme.fn.variant({
                  variant: "light",
                  color: theme.primaryColor,
                }).color,
              },
            },
          }),
          colorScheme: colorScheme,
          components: {
            Container: {
              defaultProps: {
                sizes: {
                  xs: 540,
                  sm: 720,
                  md: 1320,
                  lg: 1320,
                  xl: 1320,
                },
              },
            },
            Text: {
              styles: {
                root: {
                  wordSpacing: "0.05em",
                  lineHeight: "1.6em",
                  letterSpacing: "0.05em",
                },
              },
            },
            Title: {
              styles: (theme) => ({
                root: {
                  fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                  color:
                    theme.colorScheme === "dark"
                      ? theme.colors.yellow[5]
                      : theme.black,
                },
              }),
            },
            Table: {
              styles: {
                root: {
                  fontSize: "1.2em",
                },
              },
            },
          },
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <ModalsProvider labels={{ confirm: "Отправить", cancel: "Закрыть" }}>
          <App />
        </ModalsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default Main;
