import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #ffff;
  padding: 160px 0;
  background-color: ${({ lightBg }) => (lightBg ? "#fff" : "#101522")};
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 50px;
  }
`;

export const Subtitle = styled.div`
  color: ${({ lightSubtitle }) => (lightSubtitle ? "#a9b3c1" : "#4b59f7")};
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.5px;
  margin-bottom: 18px;
`;

export const Heading = styled.h1`
  color: ${({ lightHeading }) => (lightHeading ? "#f7f8fa" : "#1c2237")};
  margin-bottom: 24px;
  font-size: 40px;
  line-height: 1.1;
`;

export const Content = styled.p`
  color: ${({ lightContent }) => (lightContent ? "#a9b3c1" : "#1c2237")};
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;
