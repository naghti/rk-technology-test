import styled from "styled-components";

interface ToggleSwitchProps {
  $enabled: boolean;
}

export const SwitchContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-right: 10px;
`;

export const Slider = styled.span<ToggleSwitchProps>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => (props.$enabled ? "#4CAF50" : "#ccc")};
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    content: "";
    position: absolute;
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
    transform: ${(props) => (props.$enabled ? "translateX(26px)" : "none")};
  }
`;
