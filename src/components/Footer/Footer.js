import React from "react";
import { Button } from "../../globalStyles";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  SubscriptionForm,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinksTitle,
  FooterLink,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join with us to receive the latest news and trends 📧
        </FooterSubHeading>
        <SubscriptionForm>
          <FormInput
            name="email"
            type="email"
            placeholder="Please type your Email"
          />
          <Button fontBig>Subscribe</Button>
        </SubscriptionForm>
      </FooterSubscription>

      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinksTitle>About Us</FooterLinksTitle>
            <FooterLink to="/">Contact Us</FooterLink>
            <FooterLink to="/">Carriers</FooterLink>
            <FooterLink to="/">Privacy Policy</FooterLink>
            <FooterLink to="/">Terms of Use</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinksTitle>Services</FooterLinksTitle>
            <FooterLink to="/">Contact Us</FooterLink>
            <FooterLink to="/">Carriers</FooterLink>
            <FooterLink to="/">Privacy Policy</FooterLink>
            <FooterLink to="/">Terms of Use</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinksTitle>Blogs</FooterLinksTitle>
            <FooterLink to="/">Contact Us</FooterLink>
            <FooterLink to="/">Carriers</FooterLink>
            <FooterLink to="/">Privacy Policy</FooterLink>
            <FooterLink to="/">Terms of Use</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinksTitle>Social Media</FooterLinksTitle>
            <FooterLink to="/">Contact Us</FooterLink>
            <FooterLink to="/">Carriers</FooterLink>
            <FooterLink to="/">Privacy Policy</FooterLink>
            <FooterLink to="/">Terms of Use</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
    </FooterContainer>
  );
};

export default Footer;
