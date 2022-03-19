import { BurgerBar, BurgerContainer } from "./BurgerMenuStyles";

interface BurguerMenuProps {
  isActive: boolean;
  actionOnClick: () => void;
}

const BurguerMenu = ({
  isActive,
  actionOnClick,
}: BurguerMenuProps): JSX.Element => {
  return (
    <BurgerContainer
      title="Navigation Menu"
      onClick={actionOnClick}
      className={`burger-container${isActive ? " active" : ""}`}
    >
      <BurgerBar className="burger-bar" />
      <BurgerBar className="burger-bar" />
      <BurgerBar className="burger-bar" />
    </BurgerContainer>
  );
};

export default BurguerMenu;
