import FooterPage from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <FooterPage />
    </div>
  );
};

export default CommonLayout;
