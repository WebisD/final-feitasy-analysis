import _ from 'lodash';

export const Class = [
    "Nome_classe1",
    "Nome_classe2"
];

export const getRandomClass = (): string => _.sample(Class)!;