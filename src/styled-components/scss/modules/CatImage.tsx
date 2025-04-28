import styled from "styled-components";

export const CatImage = styled.img.withConfig({
  shouldForwardProp: (prop) => !["isLoading"].includes(prop),
})<{ isLoading: boolean }>`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  opacity: ${(props) => (props.isLoading ? 0.5 : 1)};
  transition: opacity 0.3s ease;
`;
