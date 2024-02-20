import { TextInput, Textarea, Button } from "@mantine/core";
import { closeAllModals } from "@mantine/modals";


const ContactForm = () => {
  return (
    <form style={{ maxWidth: "300px" }}>
      <TextInput
        mt="sm"
        label="Имя"
        variant="default"
        placeholder="Ваше имя"
        required
      />
      <TextInput
        mt="sm"
        label="Телефон"
        variant="default"
        placeholder="Ваш номер телефона"
        required
      />
      <Textarea mt="sm" placeholder="Ваше сообщение" label="Сообщение" />
      <Button mt="md" onClick={closeAllModals} variant="gradient" gradient={{ from: 'blue', to: 'royalblue' }}>
        Заказать звонок
      </Button>
    </form>
  );
};
export default ContactForm;