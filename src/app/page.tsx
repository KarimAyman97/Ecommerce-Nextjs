import { Container } from "./components/shared/container";
import { CategoriesSection } from "./home/categories-section";
import { Background } from "./home/landing-background";
import { LandingSection } from "./home/landing-section";
import { TopSellingProductsSection } from "./home/top-selling-section";
import WhyChooseUs from "./home/why-chhose-us";

export default function Home() {
  return (
    <Container>
      <Background />
      <LandingSection />
      <CategoriesSection />
      <TopSellingProductsSection />
    </Container>
  );
}
