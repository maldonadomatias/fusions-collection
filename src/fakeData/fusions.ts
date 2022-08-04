import { BattleType, Fighter, Phase } from "../types/arenas";

export const fusions: Fighter[] = [
  {
    name: "Fused Cryptonaut",
    image:
      "https://ttm.mypinata.cloud/ipfs/QmfQ3rg4csMdD11RhQ1i81UGGBcD1NNjbVH7eGyFfttrBs/fire-attack/5.png",
    luck: 3,
    phase: Phase.Fire,
    battleType: BattleType.Attack,
    experience: 650,
    powerOverflow: false,
    id: "F_37",
  },
  {
    name: "Fused Cryptonaut",
    image:
      "https://ttm.mypinata.cloud/ipfs/QmfQ3rg4csMdD11RhQ1i81UGGBcD1NNjbVH7eGyFfttrBs/metal-agility/13.png",
    luck: 7,
    phase: Phase.Metal,
    battleType: BattleType.Agility,
    experience: 450,
    powerOverflow: false,
    id: "F_38",
  },
  {
    name: "Fused Cryptonaut",
    image:
      "https://ttm.mypinata.cloud/ipfs/QmfQ3rg4csMdD11RhQ1i81UGGBcD1NNjbVH7eGyFfttrBs/dark-defense/4.png",
    luck: 5,
    phase: Phase.Dark,
    battleType: BattleType.Defense,
    experience: 1250,
    powerOverflow: false,
    id: "F_40",
  },
  {
    name: "Fused Cryptonaut",
    image:
      "https://ttm.mypinata.cloud/ipfs/QmfQ3rg4csMdD11RhQ1i81UGGBcD1NNjbVH7eGyFfttrBs/wood-attack/40.png",
    luck: 2,
    phase: Phase.Wood,
    battleType: BattleType.Attack,
    experience: 300,
    powerOverflow: false,
    id: "F_41",
  },
  {
    name: "Fused Cryptonaut",
    image:
      "https://ttm.mypinata.cloud/ipfs/QmfQ3rg4csMdD11RhQ1i81UGGBcD1NNjbVH7eGyFfttrBs/light-attack/19.png",
    luck: 1,
    phase: Phase.Light,
    battleType: BattleType.Attack,
    experience: 450,
    powerOverflow: false,
    id: "F_42",
  },
  {
    name: "Fused Cryptonaut",
    image:
      "https://ttm.mypinata.cloud/ipfs/QmfQ3rg4csMdD11RhQ1i81UGGBcD1NNjbVH7eGyFfttrBs/dark-defense/48.png",
    luck: 2,
    phase: Phase.Dark,
    battleType: BattleType.Defense,
    experience: 700,
    powerOverflow: false,
    id: "F_43",
  },
  {
    name: "Fused Cryptonaut",
    image:
      "https://ttm.mypinata.cloud/ipfs/QmfQ3rg4csMdD11RhQ1i81UGGBcD1NNjbVH7eGyFfttrBs/fire-agility/57.png",
    luck: 5,
    phase: Phase.Fire,
    battleType: BattleType.Agility,
    experience: 800,
    powerOverflow: false,
    id: "F_44",
  },
  {
    name: "Fused Cryptonaut",
    image:
      "https://ttm.mypinata.cloud/ipfs/QmfQ3rg4csMdD11RhQ1i81UGGBcD1NNjbVH7eGyFfttrBs/light-attack/28.png",
    luck: 1,
    phase: Phase.Light,
    battleType: BattleType.Attack,
    experience: 600,
    powerOverflow: false,
    id: "F_45",
  },
];

export const getFusions = () => {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve(fusions);
    }, 5000);
  });
};

export const getEmptyArray = () => {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve([]);
    }, 4000);
  });
};

export const getFusionsWithError = () => {
  throw Error("Custom Error Message");
};
