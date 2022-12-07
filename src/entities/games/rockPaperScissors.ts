export enum Options {
  Rock = 'Rock',
  Paper = 'Paper',
  Scissors = 'Scissors'
}

export enum Player {
  Computer = 'Computer',
  User = 'User'
}

export enum TurnEnds {
  Win = 'Win',
  Lose = 'Lose',
  Draw = 'Draw'
}

export type Turn = {
  userChoice: Options | undefined;
  computerChoice: Options | undefined;
  userScore: number;
  computerScore: number;
};
