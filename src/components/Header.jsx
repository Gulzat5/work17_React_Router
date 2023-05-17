import { Link } from "react-router-dom";

import { styled } from "styled-components";
export const Header = () => {
  return (
    <>
      <div>
        <Container>
          <h2>IStore</h2>
          <LinkContainer>
            <LinkStyle to="/Products">Product</LinkStyle>
            <LinkStyle to="/My Card">MyCart</LinkStyle>
            <LinkStyle to="/My Orders">MyOrders</LinkStyle>
          </LinkContainer>
        </Container>
      </div>
    </>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: aliceblue;
  background-color: rgb(20, 99, 169);
  font-size: 16px;
  text-decoration: none;
  justify-content: space-around;
`;
const LinkContainer = styled.div`
  display: flex;
  gap: 80px;
`;
const LinkStyle = styled(Link)`
  color: aliceblue;
  font-size: 16px;
  text-decoration: none;
  margin-right: 28px;
  border-bottom: 1px solid aliceblue;
  padding-bottom: 2px;
  border-bottom: 1px solid aliceblue;

  &.active {
    color: rgb(156, 160, 163);
    border-bottom: 1px solid rgb(156, 160, 163);
  }
`;
