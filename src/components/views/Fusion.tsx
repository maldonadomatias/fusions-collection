import React from "react";

import styled from "styled-components";

import NftCard from "./NftCard";

const CollectionItemFrame = styled.div`
  position: relative;
  border: 2px solid transparent;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: border 0.3s ease;
  background-color: var(--glass-background);
  cursor: pointer;
  :hover {
    border: 2px solid var(--seaGreenCrayola);
  }
  margin: 10px;
  @media (min-width: 550px) {
    width: 45%;
  }
  @media (min-width: 625px) {
    width: 46%;
  }
  @media (min-width: 714px) {
    width: 46.5%;
  }
  @media (min-width: 840px) {
    width: 21.5%;
  }
  @media (min-width: 1073px) {
    width: 22%;
  }
  @media (min-width: 1102px) {
    width: 17.1%;
  }
  @media (min-width: 1166px) {
    width: 17.3%;
  }
  @media (min-width: 1250px) {
    width: 17.4%;
  }
  @media (min-width: 1281px) {
    width: 17.6%;
  }
  @media (min-width: 1378px) {
    width: 17.8%;
  }
  @media (min-width: 1431px) {
    width: 17.9%;
  }
  @media (min-width: 1627px) {
    width: 18%;
  }
`;

interface Props {
  urlImage: string;
  name: string;
  tokenId: string;
  onClickFusion: () => void;
}

const Fusion = ({ urlImage, name, tokenId, onClickFusion }: Props) => {
  return (
    <CollectionItemFrame onClick={onClickFusion}>
      <NftCard urlImage={urlImage} name={name} tokenId={tokenId} />
    </CollectionItemFrame>
  );
};

export default Fusion;
