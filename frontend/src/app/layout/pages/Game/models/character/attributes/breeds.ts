import _ from 'lodash';

export const Breeds = [
    "Mago",
    "Feiticeiro"
];

export const getRandomBreed = (): string => _.sample(Breeds)!;