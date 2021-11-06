import _ from 'lodash';

export const Class = [
    "Bárbaro", 
    "Bruxo", 
    "Guerreiro", 
    "Paladino", 
    "Mago"
];

export const getRandomClass = (): string => _.sample(Class)!;