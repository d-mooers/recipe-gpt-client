import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { useRouter } from 'next/router';
import { useUser } from '@clerk/nextjs';
import image from './image.svg';
import useStyles from './Hero.styles';

export function LandingPageHero() {
  const { classes } = useStyles();
  const router = useRouter();
  const loggedIn = useUser();

  return (
    <Container pt={0} mt={0}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            An <span className={classes.highlight}>AI</span> Powered <br /> meal planner and macro
            tracker
          </Title>
          <Text color="dimmed" mt="md">
            Get fully custom recipes based on your shopping habits and dietary preferences. Track
            your macros and calories from each meal with ease.
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck size={rem(12)} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>AI Powered</b> – Powered by the cutting-edge OpenAI gpt-3.5 model
            </List.Item>
            <List.Item>
              <b>Free and open source</b> – free to use at a basic tier. Open source on GitHub.
            </List.Item>
            <List.Item>
              <b>Macros Included</b> – Include macro estimation for each recipe, optionally optimize
              meal reccomendations for a specific goal.
            </List.Item>
          </List>

          <Group mt={30}>
            <Button
              radius="xl"
              size="md"
              className={classes.control}
              onClick={() =>
                router.push(loggedIn.isLoaded && loggedIn.user ? '/dashboard' : '/sign-in')
              }
            >
              {loggedIn.isLoaded && loggedIn.user ? 'Go to Dashboard' : 'Get Started'}
            </Button>
            <Button
              variant="default"
              radius="xl"
              size="md"
              className={classes.control}
              onClick={() => window.open('https://github.com/d-mooers/recipe-gpt-client', '_blank')}
            >
              Source code
            </Button>
          </Group>
        </div>
        <Image src={image.src} className={classes.image} />
      </div>
    </Container>
  );
}
