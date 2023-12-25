import { Footer } from "../_components/footer/footer";
import { Navbar } from "../_components/navbar/navbar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
