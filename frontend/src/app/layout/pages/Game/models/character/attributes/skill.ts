import _ from 'lodash';

export const Skills = [
    "Clone das sombras",
];

export const getRandomBreed = (): string => _.sample(Skills)!;