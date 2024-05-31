import { Player } from "@/entities/player";

export type GameUser = {
  id: string;
  name: string;
  points: string;
};

export type game = {
  players: Player[];
  round: number;
  speed: number;
  chat: chat[];
};

export type player = {
  name: string;
  points: number;
  multiplier: number;
  score: number;
};

export type round = {
  name: string;
  point: number;
  multiplier: number;
};

export type ranking = {
  name: string;
  score: string;
};

export type chat = {
  name: string;
  message: string;
};
