import { Button } from "@mantine/core";
import { Phone } from "tabler-icons-react";
import ContactPhone from "./Contact-phone";
import { openModal } from "@mantine/modals";

const HeaderCallBtn = () => {
  return (
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
  );
};
export default HeaderCallBtn;