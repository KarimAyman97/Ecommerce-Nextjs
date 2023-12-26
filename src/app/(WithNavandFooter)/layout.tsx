import { Footer } from "../_components/footer/footer";
import { Navbar } from "../_components/navbar/navbar";

export const metadata = {
  title: "E-Commerce App",
  description: "Made and Deployed By Karim Ayman",
  icons: {
    icon: "/icon.svg",
  },
};
export default function Layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      {children}
      {modal}
      <Footer />
    </div>
  );
}
