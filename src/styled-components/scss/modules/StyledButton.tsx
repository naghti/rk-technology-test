import styled from "styled-components";

interface StyledButtonProps {

  $disabled?: boolean;

}

export const StyledButton = styled.button<StyledButtonProps>`
  align-self: center;
  padding: 10px 20px;

  background-color: ${(props) => (props.$disabled ? "#cccccc" : "#4CAF50")};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};

  font-size: 16px;
  margin: 20px 0;
  transition: background-color 0.3s ease;


  &:hover:not(:$disabled) {
    background-color: ${(props) => !props.$disabled && "#45a049"};

  }
`;
