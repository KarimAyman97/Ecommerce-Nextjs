import ProductNavbar from "./products-navbar/products-navbar";
import { SearchNavbar } from "./search-navbar/search-navbar";
import { SocialNavbar } from "./social-navbar/social-navbar";
export const Navbars: React.FC = () => {
  return (
    <div className="relative z-10">
      <div className="hidden md:block">
        {/* <SocialNavbar />
        <hr></hr> */}
      </div>
      <div>
        <SearchNavbar />
        <hr></hr>
      </div>
      <div>
        <ProductNavbar />
      </div>
    </div>
  );
};
