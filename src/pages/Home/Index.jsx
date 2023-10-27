import { useContext, useState } from "react";
import { Contexts } from "../../contexts/Index";

import { PageContainer } from "../../components";

import {
  ProductImageLargerScaleContainer,
  FigureImageProductLargerScale,
  ProductLargerScaleDiv,
  PreviousImageButton,
  NextImageButton,
  SelectThumbnailContainerLargeScale,
  FigureContainer,
  SelectThumbnailContainer,
  ButtonProduct,
  PreviousImageButtonMobile,
  ImageProduct,
  NextImageButtonMobile,
  ButtonSelectThumbnail,
  Thumbnail,
  ProductDescriptionContainer,
  TitleContainer,
  Tag,
  Title,
  DescriptionContainer,
  Description,
  PrinceContainer,
  CurrentPrice,
  Discount,
  PreviousPrice,
  CartContainer,
  QuantityContainer,
  DecreaseQuantityButton,
  DisplayQuantity,
  IncreaseQuantityButton,
  CartButton,
  IconCartSvg,
  CloseButtonContainer,
} from "./Styles";

//figure-product
import imageProduct1Thumbnail from "../../images/image-product-1-thumbnail.jpg";
import imageProduct1 from "../../images/image-product-1.jpg";

import imageProduct2Thumbnail from "../../images/image-product-2-thumbnail.jpg";
import imageProduct2 from "../../images/image-product-2.jpg";

import imageProduct3Thumbnail from "../../images/image-product-3-thumbnail.jpg";
import imageProduct3 from "../../images/image-product-3.jpg";

import imageProduct4Thumbnail from "../../images/image-product-4-thumbnail.jpg";
import imageProduct4 from "../../images/image-product-4.jpg";

const Home = () => {
  const { cartItems, setCartItems } = useContext(Contexts);

  const [productJson, setProductJson] = useState({
    id: 132,
    listProductImages: [
      imageProduct1,
      imageProduct2,
      imageProduct3,
      imageProduct4,
    ],
    thumbnailList: [
      imageProduct1Thumbnail,
      imageProduct2Thumbnail,
      imageProduct3Thumbnail,
      imageProduct4Thumbnail,
    ],
    company: "SNEAKER COMPANY",
    sneakerModel: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    currentPrice: "$125.00",
    discount: "50%",
    previousPrice: "$250.00",
  });

  const [quantityProduct, setQuantityProduct] = useState(0);
  const [imageSelected, setSelectImage] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleTumbnail = (imageIndex) => {
    setSelectImage(imageIndex);
  };

  const handleThumbnail = productJson.thumbnailList.map((element, index) => {
    return (
      <ButtonSelectThumbnail
        isSelected={imageSelected === index ? true : false}
        aria-label="Trocar imagem do produto"
        onClick={() => handleTumbnail(index)}
      >
        <Thumbnail src={element} alt="imagem do produto" key={index} />
      </ButtonSelectThumbnail>
    );
  });

  const nexImage = () => {
    if (imageSelected < productJson.listProductImages.length - 1) {
      setSelectImage(imageSelected + 1);
    }

    return;
  };

  const previousImage = () => {
    if (imageSelected > 0) {
      setSelectImage(imageSelected - 1);
    }

    return;
  };

  const handleModal = () => {
    if (window.screen.width > 480) {
      setModalIsOpen(!modalIsOpen);
    }
  };

  const increaseQuantity = () => {
    setQuantityProduct(quantityProduct + 1);
  };

  const decreaseQuantity = () => {
    if (quantityProduct > 0) {
      setQuantityProduct(quantityProduct - 1);
    }
  };

  const handleAddToCart = () => {
    if (quantityProduct === 0)
      return alert(
        "É necessário selecionar ao menos 1 produto para adicionar ao carrinho"
      );

    const productCart = {
      id: productJson.id,
      thumbnail: productJson.thumbnailList[0],
      sneakerModel: productJson.sneakerModel,
      currentPrice: 125,
      quantity: 0,
      price: 0,
    };
    const cartListItems = [...cartItems];
    const alreadyInCart = cartListItems.filter((element) => {
      return element.id === productCart.id;
    });

    if (alreadyInCart.length === 0) {
      productCart.quantity = quantityProduct;

      setCartItems([
        {
          ...productCart,
          quantity: quantityProduct,
          price: parseInt(productCart.currentPrice) * quantityProduct,
        },
        ...cartItems,
      ]);
    } else {
      const productIndex = cartListItems.indexOf(...alreadyInCart);
      const { quantity, currentPrice } = cartListItems[productIndex];
      cartListItems[productIndex].quantity = quantity + quantityProduct;
      cartListItems[productIndex].price =
        (quantity + quantityProduct) * currentPrice;

      setCartItems(cartListItems);
    }

    setQuantityProduct(0);
  };

  return (
    <PageContainer>
      <ProductImageLargerScaleContainer isVisible={modalIsOpen}>
        <FigureImageProductLargerScale>
          <CloseButtonContainer>
            <button
              onClick={handleModal}
              aria-label="Fechar modal da = imagem em maior escala"
            >
              <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg">
                <g transform="scale(1.5)">
                  <path
                    d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                    fill="#fff"
                    fill-rule="evenodd"
                  />
                </g>
              </svg>
            </button>
          </CloseButtonContainer>

          <ProductLargerScaleDiv>
            <PreviousImageButton
              onClick={previousImage}
              aria-label="voltar para imagem anterior do produto"
            >
              <svg width="9" height="15" xmlns="http://www.w3.org/2000/svg">
                <g transform="scale(0.8)">
                  <path
                    d="M11 1 3 9l8 8"
                    stroke="#1D2026"
                    stroke-width="3"
                    fill="none"
                    fill-rule="evenodd"
                  />
                </g>
              </svg>
            </PreviousImageButton>

            <ImageProduct
              src={productJson.listProductImages[imageSelected]}
              alt="imagem do produto"
            />

            <NextImageButton
              onClick={nexImage}
              aria-label="avançar para proxima imagem do produto"
            >
              <svg width="9" height="15" xmlns="http://www.w3.org/2000/svg">
                <g transform="scale(0.8)">
                  <path
                    d="m2 1 8 8-8 8"
                    stroke="#1D2026"
                    stroke-width="3"
                    fill="none"
                    fill-rule="evenodd"
                  />
                </g>
              </svg>
            </NextImageButton>
          </ProductLargerScaleDiv>

          <SelectThumbnailContainerLargeScale>
            {handleThumbnail}
          </SelectThumbnailContainerLargeScale>
        </FigureImageProductLargerScale>
      </ProductImageLargerScaleContainer>

      <FigureContainer>
        <ButtonProduct
          aria-label="Exibir imagem em maior escala"
          onClick={handleModal}
        >
          <PreviousImageButtonMobile
            onClick={previousImage}
            aria-label="voltar para imagem anterior do produto"
          >
            <svg width="9" height="15" xmlns="http://www.w3.org/2000/svg">
              <g transform="scale(0.8)">
                <path
                  d="M11 1 3 9l8 8"
                  stroke="#1D2026"
                  stroke-width="3"
                  fill="none"
                  fill-rule="evenodd"
                />
              </g>
            </svg>
          </PreviousImageButtonMobile>

          <ImageProduct
            src={productJson.listProductImages[imageSelected]}
            alt="imagem do produto"
          />

          <NextImageButtonMobile
            onClick={nexImage}
            aria-label="avançar para proxima imagem do produto"
          >
            <svg width="9" height="15" xmlns="http://www.w3.org/2000/svg">
              <g transform="scale(0.8)">
                <path
                  d="m2 1 8 8-8 8"
                  stroke="#1D2026"
                  stroke-width="3"
                  fill="none"
                  fill-rule="evenodd"
                />
              </g>
            </svg>
          </NextImageButtonMobile>
        </ButtonProduct>

        <SelectThumbnailContainer>{handleThumbnail}</SelectThumbnailContainer>
      </FigureContainer>

      <ProductDescriptionContainer>
        <TitleContainer>
          <Tag translate="no">{productJson.company}</Tag>

          <Title translate="no">{productJson.sneakerModel}</Title>
        </TitleContainer>

        <DescriptionContainer>
          <Description>{productJson.description}</Description>
        </DescriptionContainer>

        <PrinceContainer>
          <CurrentPrice>
            {productJson.currentPrice}
            <Discount>{productJson.discount}</Discount>
          </CurrentPrice>

          <PreviousPrice>{productJson.previousPrice}</PreviousPrice>
        </PrinceContainer>

        <CartContainer>
          <QuantityContainer>
            <DecreaseQuantityButton
              onClick={decreaseQuantity}
              aria-label="Diminuir quantidade de itens a ser adicionado no carrinho"
            >
              <span>-</span>
            </DecreaseQuantityButton>

            <DisplayQuantity>{quantityProduct}</DisplayQuantity>

            <IncreaseQuantityButton
              onClick={increaseQuantity}
              aria-label="Aumentar quantidade de itens a ser adicionado no carrinho"
            >
              <span>+</span>
            </IncreaseQuantityButton>
          </QuantityContainer>

          <CartButton
            onClick={handleAddToCart}
            aria-label="Adicionar item ao carrinho"
          >
            <IconCartSvg
              width="22"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <svg
                width="16"
                height="15"
                xmlns="http://www.w3.org/2000/svg"
                class="sc-iWqaYm"
              >
                <g transform="scale(0.7)">
                  <path
                    d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                    fill="#fff"
                    fill-rule="nonzero"
                  ></path>
                </g>
              </svg>
            </IconCartSvg>
            Add to Cart
          </CartButton>
        </CartContainer>
      </ProductDescriptionContainer>
    </PageContainer>
  );
};

export default Home;
