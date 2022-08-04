export enum BattleType {
  Attack = "Attack",
  Agility = "Agility",
  Defense = "Defense",
  Endurance = "Endurance",
}

export enum Phase {
  Fire = "Fire",
  Water = "Water",
  Earth = "Earth",
  Metal = "Metal",
  Wood = "Wood",
  Dark = "Dark",
  Light = "Light",
}

export interface Fighter {
  name: string;
  image: string;
  luck: number;
  phase: Phase;
  battleType: BattleType;
  experience: number;
  powerOverflow: boolean;
  id: string;
}
