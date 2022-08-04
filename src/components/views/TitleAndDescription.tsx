import React from "react";

import styled from "styled-components";

const Frame = styled.div`
  background-color: var(--seaGreenCrayola);
  color: var(--eerieBlack);
  text-align: center;
  padding: 20px 2%;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
`;

const PageDescription = styled.h2`
  font-size: 1.125rem;
  margin-top: 20px;
`;

interface Props {
  title: string;
  description?: string;
}

const TitleAndDescription = ({ title, description }: Props) => {
  return (
    <Frame>
      <PageTitle>{title}</PageTitle>
      {description && <PageDescription>{description}</PageDescription>}
    </Frame>
  );
};

export default TitleAndDescription;
