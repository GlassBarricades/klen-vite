import { Button, MediaQuery } from "@mantine/core";
import { Phone } from "tabler-icons-react";
import ContactPhone from "./Contact-phone";
import { openModal } from "@mantine/modals";

const HeaderCallBtn = () => {
  return (
    <>
      <MediaQuery smallerThan="lg" styles={{ display: "none" }}>
        <Button
          radius="xl"
          color="green"
          onClick={() => {
            openModal({
              title: "Телефоны для связи",
              children: (
                <>
                  <ContactPhone />
                </>
              ),
            });
          }}
        >
          <Phone color="white" size={28} />
        </Button>
      </MediaQuery>
    </>
  );
};
export default HeaderCallBtn;