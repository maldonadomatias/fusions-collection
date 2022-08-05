import React, { useEffect, useState } from "react";

import styled from "styled-components";

import Modal from "@material-ui/core/Modal";
import TitleAndDescription from "../components/views/TitleAndDescription";
import FusionCard from "../components/views/Fusion";
import { CircularProgress, Grid, Typography } from "@material-ui/core";
import { Fighter } from "../types/arenas";
import {
  getEmptyArray,
  getFusions,
  getFusionsWithError,
} from "../fakeData/fusions";

const PAGE_TITLE = "Fusion Collection";
const PAGE_DESCRIPTION = "The FUSION CRYPTONAUT NFTs in your Wallet";
const FUSION_EMPTY = "NO FUSIONS ADD ON YOUR WALLET";
const FUSION_ERROR = "ERROR FETCHING THE FUSIONS";

const ContentFrame = styled.div`
  margin: 55px auto 40px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 2%;
  max-width: 1400px;
`;

const MessageFrame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.875rem;
  font-weight: 500;
  height: 500px;
  border-radius: 5px;
  padding: 20px;
  text-transform: uppercase;
`;

const ModalFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: var(--platinum);
  background-color: var(--eerieBlack);
  padding: 15px;
  overflow-x: scroll;
  @media (min-width: 550px) {
  }
  @media (min-width: 840px) {
  }
  @media (min-width: 1252px) {
  }
  @media (min-width: 1600px) {
  }
`;

const FusionCollection = () => {
  const [fusions, setFusions] = useState<Fighter[]>([]);

  const [loadingNfts, setLoadingNfts] = useState(true);
  const [error, setError] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState(false);
  const [fusionSelected, setFusionSelected] = useState<Fighter>();

  const fetchFusions = async () => {
    try {
      const data = await getFusions(); // DESCOMENTAR PARA PROBAR: Llamo a la funcion getFusions para traer la informacion de los NFT
      // const data = await getEmptyArray(); // DESCOMENTAR PARA PROBAR: Llamo a la funcion getEmptyArray para traer la informacion VACIA de los NFT
      // const data = getFusionsWithError(); // DESCOMENTAR PARA PROBAR: Llamo a la funcion getFusionsWithError para traer la informacion con un ERROR de los NFT
      setLoadingNfts(false); // Una vez cargados los NFT desactivo el Spinner
      setFusions(data);
    } catch (error) {
      setError(true);
      setLoadingNfts(false); // Una vez cargados los NFT desactivo el Spinner
    }
  };

  const handleOpen = (item: any) => {
    setFusionSelected(item);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    document.title = `${PAGE_TITLE} - ${PAGE_DESCRIPTION}`;
    fetchFusions();
  }, []);

  return (
    <div>
      <TitleAndDescription title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <ContentFrame>
        {loadingNfts && (
          <div
            style={{
              width: "100%",
              textAlign: "center",
              height: "600px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress
              thickness={5}
              style={{ color: "var(--seaGreenCrayola)" }}
              size={80}
            />
          </div>
        )}
        <div>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            {fusions &&
              fusions.map((item, key) => {
                return (
                  <FusionCard
                    key={key}
                    urlImage={item.image}
                    name={item.name}
                    tokenId={item.id}
                    onClickFusion={() => handleOpen(item)}
                  />
                );
              })}

            {/* SI FUSION ESTA VACIO */}
            {!loadingNfts && !error && fusions.length == 0 && (
              <MessageFrame>{FUSION_EMPTY}</MessageFrame>
            )}

            {/* SI FUSION TRAE ERROR AL "FETCHING" */}
            {!loadingNfts && error && (
              <MessageFrame>{FUSION_ERROR}</MessageFrame>
            )}
          </Grid>
        </div>
      </ContentFrame>

      <Modal open={openModal} onClose={handleClose}>
        <ModalFrame>
          {fusionSelected && (
            <>
              <Typography>Name: {fusionSelected.name}</Typography>
              <Typography>ID: {fusionSelected.id}</Typography>
              <Typography>Image: {fusionSelected.image}</Typography>
              <Typography>Battle Type: {fusionSelected.battleType}</Typography>
              <Typography>Phase: {fusionSelected.phase}</Typography>
              <Typography>Experience: {fusionSelected.experience}</Typography>
            </>
          )}
        </ModalFrame>
      </Modal>
    </div>
  );
};

export default FusionCollection;
