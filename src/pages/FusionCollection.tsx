import React, { useEffect, useState } from "react";

import styled from "styled-components";

import Modal from "@material-ui/core/Modal";
import TitleAndDescription from "../components/views/TitleAndDescription";
import FusionCard from "../components/views/Fusion";
import { CircularProgress } from "@material-ui/core";
import { Fighter } from "../types/arenas";
import {
  getEmptyArray,
  getFusions,
  getFusionsWithError,
} from "../fakeData/fusions";

const PAGE_TITLE = "Fusion Collection";
const PAGE_DESCRIPTION = "The FUSION CRYPTONAUT NFTs in your Wallet";

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

const FusionCollection = () => {
  const [fusions, setFusions] = useState<Fighter[]>([]);

  const [loadingNfts, setLoadingNfts] = useState(true);

  const [openModal, setOpenModal] = useState(false);
  const [fusionSelected, setFusionSelected] = useState<Fighter>();

  const fetchFusions = () => {};

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
      </ContentFrame>

      <Modal open={openModal} onClose={handleClose}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            color: "var(--platinum)",
            backgroundColor: "var(--eerieBlack)",
            padding: "15px",
          }}
        >
          {fusionSelected && (
            <>
              <div>FUSION DATA</div>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default FusionCollection;
