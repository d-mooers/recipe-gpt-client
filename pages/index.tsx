import { Container } from '@mantine/core';
import { LandingPageHero } from '../components/Hero/Hero';
import { CardsCarousel } from '../components/Carousel/Carousel';

export default function HomePage() {
  return (
    <Container>
      <LandingPageHero />
      <CardsCarousel />
    </Container>
  );
}
