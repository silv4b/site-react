// import { Container } from './styles';
import Switch from "react-switch";
import { Container, Icon } from "./Switcher.Style";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { IToggleTheme } from "../../interfaces/IToggleTheme";

const Switcher: React.FC<IToggleTheme> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  const MoonIcon = () => {
    return <Icon>🌑</Icon>;
  };

  const SunIcon = () => {
    return <Icon>☀️</Icon>;
  };

  return (
    <Container>
      <Switch
        onChange={toggleTheme}
        checked={title === "light"}
        height={20}
        width={40}
        checkedIcon={false}
        uncheckedIcon={false}
        handleDiameter={20}
        offColor={colors.secondary}
        onColor={colors.secondary}
        uncheckedHandleIcon={<MoonIcon />}
        checkedHandleIcon={<SunIcon />}
      />
    </Container>
  );
};

export default Switcher;
