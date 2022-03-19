import { FloatingMenuDiv } from "./FloatingMenuStyles";

interface FloatingMenuProps {
  isActive: boolean;
}

const FloatingMenu = ({ isActive }: FloatingMenuProps): JSX.Element => {
  return (
    <>
      <FloatingMenuDiv className={isActive ? "active" : ""}>
        <p>Hola</p>
      </FloatingMenuDiv>
    </>
  );
};

export default FloatingMenu;
