import {
  Container,
  Title,
  Divider,
  Card,
  Button,
  SimpleGrid,
  ActionIcon,
} from "@mantine/core";

const App = () => {
  return (
    <Container p="xl">
      <Title>Mantine - React Component Library</Title>
      <Divider my="xl" />
      <Title order={2} mb="sm">
        Button
      </Title>
      <Card shadow="sm" radius="sm" mb="md" withBorder>
        <Title order={3} mb="sm">
          Variants
        </Title>
        <SimpleGrid cols={5}>
          <Button>Filled Variant</Button>
          <Button variant="light">Light Variant</Button>
          <Button variant="outline">Outline Variant</Button>
          <Button variant="default">Default Variant</Button>
          <Button variant="subtle">Subtle Variant</Button>
        </SimpleGrid>
      </Card>
      <Title order={2} mb="sm">
        Action icon
      </Title>
      <Card shadow="sm" radius="sm" withBorder>
        <ActionIcon>⚙</ActionIcon>
      </Card>
    </Container>
  );
};

export default App;
