import _ from 'lodash';

export const Breeds = {
    Feiticeiro: 'Feiticeiro',
    Guerreiro: 'Guerreiro',
    Arqueiro: 'Arqueiro'
};

export const getRandomBreed = (): string => _.sample(Object.values(Breeds))!;


export default Breeds;