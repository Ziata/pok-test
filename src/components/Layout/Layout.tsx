import Header from "../Header/Header";
import layout from "./layout.module.sass";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={layout.container}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
