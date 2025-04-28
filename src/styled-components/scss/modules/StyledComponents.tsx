// StyledComponents.tsx
import styled from "styled-components";

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const LoadingText = styled.div`
  font-family: Arial, sans-serif;
  color: #666;
  font-size: 18px;
  padding: 20px;
`;
