const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

const div_3 = pokémon.filter( div  => div.id % 3==0);
console.log(div_3);

const tireType = pokémon.filter( fire  => fire.types[0] == "fire");
console.log(tireType);

const leng = pokémon.filter( p  => p.types.length >1);
console.log(leng);

const pkleng = pokémon.filter( p  => p.types.length >1);
console.log(leng);

const pkmname = pokémon.map( name => name.name)
console.log(pkmname);

const pkm_99 = pokémon.filter( pkid => pkid.id > 99).map(namepk => namepk.name )
console.log(pkm_99);

const pkmpoision = pokémon.filter( type  => type.types[0] == "poison").map(namepk => namepk.name )
console.log(pkmpoision);

const pkmflying = pokémon.filter( type  => type.types[1] == "flying").map(namepk => namepk.types[0] )
console.log(pkmflying);

const pkmnormal = pokémon.filter( type  => type.types[0] == "normal")

console.log(pkmnormal.length);






