interface ButtonProps {
  actionOnClick: () => void;
  text: string;
}

const Button = ({ actionOnClick, text }: ButtonProps): JSX.Element => {
  return (
    <>
      <button onClick={actionOnClick}>{text}</button>
    </>
  );
};
export default Button;
