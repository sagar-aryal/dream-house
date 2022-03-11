import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #101522;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #ffff;
  padding: 24px;
  margin-bottom: 24px;
`;

export const FooterSubHeading = styled.p`
  margin-bottom: 24px;
  font-size: 24px;
`;

export const SubscriptionForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin: 24px;
  outline: none;
  border: none;
  font-size: 16px;

  &::placeholder {
    color: #242424;

    @media screen and (max-width: 768px) {
      width: 100%;
      margin: 0 0 16px 0;
    }
  }
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FooterLinksItems = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  color: #ffff;
`;

export const FooterLinksTitle = styled.h3`
  font-weight: 500;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  color: #ffff;
  margin-bottom: 1rem;

  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;
