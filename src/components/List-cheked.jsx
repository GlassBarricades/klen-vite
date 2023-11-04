import { List, ThemeIcon, Title } from '@mantine/core';
import { CircleCheck } from 'tabler-icons-react';

export function ListCheked({ data, title }) {
  return (
    <>
        <Title mt="xl" mb="md" align="center" order={4}>{title}</Title>
        <List
        mb="lg"
      spacing="xs"
      size="md"
      center
      icon={
        <ThemeIcon color="royalblue" size={24} radius="xl">
          <CircleCheck size={16} />
        </ThemeIcon>
      }
    >
        {data.map((item, i) => {
            return <List.Item key={i}>{item}</List.Item>
        })}
    </List>
    </>
  );
}