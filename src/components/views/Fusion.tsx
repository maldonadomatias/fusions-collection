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
