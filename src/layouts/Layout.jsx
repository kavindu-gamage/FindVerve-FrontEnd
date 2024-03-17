import NavBar from "../components/organisms/NavBar/NavBar";

export const Layout = ({children}) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  );
};
