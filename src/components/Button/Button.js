import { Btn } from './Button.styled';

export const Button = ({ children, onClick }) => {
  return (
    <Btn type="button" onClick={onClick}>
      {children}
    </Btn>
  );
};
