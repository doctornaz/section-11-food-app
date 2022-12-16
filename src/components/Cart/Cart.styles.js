import styled from "styled-components";

export const ActionsSection = styled.div`
  text-align: right;
`;

export const TotalSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem 0;
`;

const Button = styled.button`
  font: inherit;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #8a2b06;
  padding: 0.5rem 2rem;
  border-radius: 25px;
  margin-left: 1rem;
  &:hover,
  &:active {
    background-color: #5a1a01;
    border-color: #5a1a01;
    color: white;
  }
`;

export const CloseButton = styled(Button)`
  color: #8a2b06;
`;

export const OrderButton = styled(Button)`
  background-color: #8a2b06;
  color: white;
`;

// .cart-items {
//     list-style: none;
//     margin: 0;
//     padding: 0;
//     max-height: 20rem;
//     overflow: auto;
//   }