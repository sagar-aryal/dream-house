import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "../../globalStyles";
import {
  InfoContainer,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Subtitle,
  Heading,
  Content,
  ImgWrapper,
  Img,
} from "./InfoSectionStyles";

const InfoSection = ({
  lightbg,
  imgStart,
  lightSubtitle,
  subtitle,
  lightHeading,
  heading,
  lightContent,
  content,
  buttonLabel,
  primary,
  start,
  img,
  alt,
}) => {
  return (
    <>
      <InfoContainer lightbg={lightbg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <Subtitle lightSubtitlet={lightSubtitle}>{subtitle}</Subtitle>
                <Heading lightHeading={lightHeading}>{heading}</Heading>
                <Content lightContent={lightContent}>{content}</Content>
                <Link to="/sign-up">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
