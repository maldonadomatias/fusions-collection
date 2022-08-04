import React from "react";

import styled from "styled-components";

const ItemImageBackground = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: var(--platinum);
  border-radius: inherit;
`;

const CharacterImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
`;

const CharacterInfo = styled.div`
  padding: 10px 6px 6px 6px;
  text-align: start;
`;

const CharacterName = styled.label`
  font-size: 1em;
  font-weight: 500;
  cursor: inherit;
`;

const Id = styled.div`
  font-size: 0.75em;
  padding-left: 1px;
  margin-top: 2px;
`;

interface Props {
  urlImage: string;
  name: string;
  tokenId: string;
}

const NftCard = ({ urlImage, name, tokenId }: Props) => {
  return (
    <div>
      <ItemImageBackground>
        <CharacterImage src={urlImage} />
      </ItemImageBackground>
      <CharacterInfo>
        <CharacterName>{name}</CharacterName>
        <Id>{tokenId}</Id>
      </CharacterInfo>
    </div>
  );
};

export default NftCard;
