export const createCharacterQuery = (breedName?: string, className?: string): string => `
    match (all_char:Character)
    match (all_item:Item)
    with {num_char: count(all_char), num_item: count(all_item)} as keys

    create (
        n:Character{
        id_pk:keys.num_char,
        id_breed_fk:0,
        id_class_fk:0,
        id_skills_fk:0,
        type_char:0,
        name:'Player1',
        caption: 'Player1',
        gender:'Male',
        level: 1
        })-[:has]->(
            n2:Inventory{
                id_pk:n.id_pk,
                current_cap: 100,
                max_cap: 200
            })

    match (n:Character) where n.type_char = 0
    set n.def_pts = 50,
        n.atk_pts = 10,
        n.life_pts = 300,
        n.vigour_pts = 100;


    match (n:Breed)
    with {num_breed:count(n)} as keys
    match (p:Character) where p.id_pk = 0
    create (p)-[b:Belong]->(br:Breed{
        id_pk:keys.num_breed,
        desc_class: ${breedName},
        caption: ${breedName},
        bonus_breed:10
    });

    match (n:Class)
    with {num_class:count(n)} as keys
    match (p:Character) where p.id_pk = 0
    create (p)-[b:Belong]->(br:Class{
        id_pk:keys.num_class,
        desc_class:${className},
        caption: ${className},
        class_bonus:10
    });

    match (all_skill:Skill)
    with {num_skill: count(all_skill)} as keys
    match (n:Character) where n.id_pk = 0
    create (n)-[h:has]->(s:Skill{
        id_pk:keys.num_skill,
        desc_skill:'Clone das sombras',
        caption:'Clone das sombras',
        type_skill:0,
        coldown:10,
        duration:3,
        casting_time:0.3,
        points:3
    });
`