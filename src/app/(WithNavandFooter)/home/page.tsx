import Link from "next/link";
import { ScrollBarAnimation } from "../../_components/animation/scroll-bar/scroll-animation";
import { ScrollToTop } from "../../_components/shared/scroll-to-top/scroll-to-top";
import { LandingSection } from "./landing/landing-section";
import { Container } from "../../_components/shared/container";
import { IncentivesSection } from "./incentives/incentives-section";
import { CategoriesSection } from "./categories/categories-section";
import { TrendingSection } from "./trending/trending-section";
import { BundleSection } from "./bundle/bundle-section";
import { UsersReview } from "./users-review/users-review";
import { BlogsSection } from "./blogs/blogs-section";
import { NewsletterSection } from "./news-letter/news-letter-section";

export default function Home() {
  return (
    <>
      <ScrollBarAnimation />
      <ScrollToTop />
      <LandingSection />
      <Container>
        <IncentivesSection />
        <CategoriesSection />
        <TrendingSection />
        <BundleSection />
        <UsersReview />
        <BlogsSection />
      </Container>
      <NewsletterSection />
    </>
  );
}
