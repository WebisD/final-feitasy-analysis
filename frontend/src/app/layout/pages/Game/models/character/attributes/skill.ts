import _ from 'lodash';

export const Skills = [
    "Flecha ácida", 
    "Campo Antimagia", 
    "Olho Arcano", 
    "Círculo da Morte", 
    "Sopro Congelante", 
    "Mãe da natureza", 
    "Porta Dimensional", 
    "Chuva de Lâminas", 
    "Bola de Fogo"
];

export const getRandomSkill = (): string => _.sample(Skills)!;