import Wrapper from "./layout/wrapper";
import Home from "./home/home";
import { useTheme } from "next-themes";

const MainRoot = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  return (
    <div className={theme}>
      <Wrapper>
        <Home />
      </Wrapper>
    </div>
  );
};

export default MainRoot;
