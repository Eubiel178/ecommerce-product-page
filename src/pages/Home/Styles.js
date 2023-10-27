import styled from "styled-components";

export const ProductImageLargerScaleContainer = styled.section`
  display: none;

  ${({ isVisible }) =>
    isVisible &&
    `
      position: fixed;
      inset: 0;
      z-index: 1;
      background: hsl(0deg 0% 0% / 75%);

      display: flex;
      justify-content: center;
      align-items: center;
  `};
`;

export const FigureImageProductLargerScale = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
`;

export const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 10px;

  button svg path {
    transition-duration: 0.5s;
  }

  button:hover {
    path {
      transition-duration: 0.5s;
      fill: hsl(26, 100%, 55%);
    }
  }
`;

export const ProductLargerScaleDiv = styled.div`
  display: flex;
  position: relative;
`;

export const PreviousImageButton = styled.button`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-52%, -50%);
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;

  &:hover {
    svg path {
      transition-duration: 0.5s;
      stroke: hsl(26, 100%, 55%);
    }
  }
`;

export const NextImageButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(52%, -50%);
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;

  &:hover {
    svg path {
      transition-duration: 0.5s;
      stroke: hsl(26, 100%, 55%);
    }
  }
`;

export const SelectThumbnailContainerLargeScale = styled.div`
  display: flex;
  gap: 15px;
  width: 80%;
  margin-top: 28px;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const FigureContainer = styled(FigureImageProductLargerScale)`
  max-width: 350px;
  width: 100%;

  @media (max-width: 480px) {
    max-width: 100%;
    height: 300px;
    background: red;
  }
`;

export const ButtonProduct = styled.button`
  position: relative;
  display: flex;

  @media (max-width: 590px) {
    height: 100%;
    width: 100%;
  }
`;

export const PreviousImageButtonMobile = styled(PreviousImageButton)`
  display: none;

  @media (max-width: 480px) {
    display: flex;
    transform: translate(40%, -50%);
  }
`;

export const NextImageButtonMobile = styled(NextImageButton)`
  display: none;

  @media (max-width: 480px) {
    display: flex;
    transform: translate(-40%, -50%);
  }
`;

export const ImageProduct = styled.img`
  border-radius: 10px;
  min-height: 260px;
  min-width: 200px;
  height: 100%;
  width: 100%;

  @media (max-width: 480px) {
    max-width: 100%;
    border-radius: 0;
  }
`;

export const SelectThumbnailContainer = styled(
  SelectThumbnailContainerLargeScale
)`
  width: 100%;
`;

export const ButtonSelectThumbnail = styled.button`
  position: relative;
  border: solid 2px transparent;
  overflow: hidden;
  border-radius: 10px;

  &::before {
    content: "";
    position: absolute;
    transition-duration: 0.5s;
  }

  &:hover {
    &::before {
      inset: 0;
      background-color: hsl(223deg 64% 98% / 58%);
    }
  }

  ${({ isSelected }) =>
    isSelected &&
    `
        border-color: hsl(26, 100%, 55%);

        &::before {
        position: absolute;
        inset: 0;
        background-color: hsl(223deg 64% 98% / 58%);
        }
    `}
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
`;

export const ProductDescriptionContainer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;

  max-width: 350px;
  min-width: 200px;
  width: 100%;

  @media (max-width: 480px) {
    max-width: 90%;
    justify-content: flex-start;
  }
`;

export const TitleContainer = styled.div``;

export const Tag = styled.p`
  font-weight: 900;
  color: hsl(26, 100%, 55%);
  font-size: 10px;
  letter-spacing: 2px;

  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 27px;
`;

export const DescriptionContainer = styled.div``;

export const Description = styled.p`
  color: hsl(219, 9%, 45%);
  font-size: 12px;
  line-height: 18px;
`;

export const PrinceContainer = styled.div`
  font-weight: 900;
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const CurrentPrice = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;

  margin-bottom: 10px;

  font-size: 20px;
`;

export const Discount = styled.span`
  color: hsl(26, 100%, 55%);
  background-color: hsl(25, 100%, 94%);
  font-size: 10px;

  padding: 3px;
  border-radius: 5px;
`;

export const PreviousPrice = styled.p`
  font-size: 14px;
  color: hsl(220, 14%, 75%);
  text-decoration: line-through;
`;

export const CartContainer = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 25px;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 175px;

  padding: 10px;
  background-color: hsl(223, 64%, 98%);
  border-radius: 5px;
  font-weight: 900;

  & span {
    font-weight: 900;

    color: hsl(26, 100%, 55%);
    font-size: 20px;
  }

  button {
    position: relative;
  }

  button::before {
    content: "";
    position: absolute;
    transition-duration: 0.5s;
  }

  button:hover {
    &::before {
      inset: 0;
      background-color: hsl(223deg 64% 98% / 58%);
    }
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const DecreaseQuantityButton = styled.button``;

export const IncreaseQuantityButton = styled.button``;

export const DisplayQuantity = styled.p`
  font-size: 11px;
`;

export const CartButton = styled.button`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 5px;

  color: #fff;
  font-size: 10px;
  font-weight: 900;
  background-color: hsl(26, 100%, 55%);

  padding: 10px;
  border-radius: 5px;

  &::before {
    content: "";
    position: absolute;
    transition-duration: 0.5s;
  }

  &:hover {
    &::before {
      inset: 0;
      background-color: hsl(223deg 64% 98% / 58%);
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 10px 0;
  }
`;

export const IconCartSvg = styled.svg``;
