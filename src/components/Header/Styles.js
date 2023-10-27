import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: solid 2px hsl(223, 64%, 98%);
  margin-bottom: 60px;

  height: 90px;
  width: 100%;

  padding: 0px 20px;

  @media (max-width: 480px) {
    margin-bottom: 0;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 45px;

  height: 100%;
`;

export const HeaderTitleContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: solid 3px transparent;

  gap: 15px;
`;

export const HamburgerMenu = styled.button`
  display: none;

  @media (max-width: 615px) {
    height: 16px;
    display: block;
  }
`;

export const Title = styled.h1`
  border-bottom: solid 3px transparent;
`;

export const NavBar = styled.div`
  @media (max-width: 615px) {
    display: ${({ isOpenInMobile }) => (isOpenInMobile ? "flex" : "none")};

    position: fixed;
    inset: 0;
    z-index: 3;

    background: hsl(0deg 0% 0% / 75%);
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 25px;

  list-style: none;
  height: 100%;

  @media (max-width: 615px) {
    background-color: #fff;

    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    padding: 25px 0 0 20px;
    width: 225px;
  }
`;

export const ContainerCloseNavbarMobile = styled.li`
  display: none;

  @media (max-width: 615px) {
    display: block;

    margin-bottom: 10px;
  }
`;

export const CloseButtonMobileNavigation = styled.button``;

export const NavItem = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  transition-duration: 0.5s;
  border-bottom: solid 3px transparent;

  a {
    font-size: 12px;
    color: hsl(219, 9%, 45%);
  }

  &:hover {
    border-bottom-color: hsl(26, 100%, 55%);

    a {
      color: black;
    }
  }

  @media (max-width: 615px) {
    height: initial;

    a {
      font-size: 17px;
      color: black;
      font-weight: 900;
    }
  }
`;

export const ProfileContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  gap: 25px;

  @media (max-width: 480px) {
    position: static;
    gap: 7px;
  }
`;

export const CartContainer = styled.div`
  display: none;

  ${({ isVisible }) =>
    isVisible === true &&
    `
      display:flex;
      flex-direction: column;

      height: 180px;
      width: 260px;

      position: absolute;
      top: 0;
      right: 1px;
      z-index: 2;
      transform: translate(0%, 35%);
      background: #fff;
      box-shadow: 0px 25px 62px -29px rgba(143, 136, 143, 1);
      border-radius: 10px;

      `}

  @media (max-width: 480px) {
    height: 250px;
    width: initial;
    top: -15px;
    left: 9px;
    right: 9px;
  }
`;

export const ItemListTitle = styled.h2`
  font-size: 11px;
  padding: 10px;
  color: black;
  border-bottom: solid 2px hsl(223, 64%, 98%);

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const ItemList = styled.div`
  font-size: 11px;
  color: hsl(219, 9%, 45%);
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  padding: 17px;

  @media (max-width: 480px) {
    padding: 25px;
  }
`;

export const ListProducts = styled.div`
  height: -webkit-fill-available;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Empty = styled.p`
  font-weight: 700;

  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.div`
  height: 45px;
  display: flex;
  align-items: center;
`;

export const ThumbnailProduct = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 5px;

  @media (max-width: 480px) {
    height: 65px;
    width: 65px;
    border-radius: 5px;
  }
`;

export const TextCartItem = styled.p`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 0 10px 0 12px;

  span {
    display: block;
  }

  strong {
    color: black;
  }

  @media (max-width: 480px) {
    margin-right: 16px;
  }
`;

export const CheckoutButton = styled.button`
  background-color: hsl(26, 100%, 55%);
  border-radius: 5px;
  height: 42px;

  color: #fff;
  font-size: 11px;
  font-weight: 900;
`;

export const CartButton = styled.button`
  position: relative;
`;

export const QuantityInCart = styled.span`
  display: none;

  ${({ isVisble }) =>
    isVisble > 0 &&
    `
      display: inline;
      font-size: 8px;
      font-weight: 900;
      padding: 1px 6px;
      color: #fff;

      border-radius: 100%;
      background-color: hsl(26, 100%, 55%);

      position: absolute;
      top: 0;
      transform: translate(80%, -60%);
  `}
`;

export const ProfileImage = styled.img`
  width: 55px;
  height: 55px;
  border: solid 2px transparent;
  transition-duration: 0.5s;
  border-radius: 100%;
  cursor: pointer;

  &:hover {
    border-color: hsl(26, 100%, 55%);
  }
`;
