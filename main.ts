import { Character, readFile } from './utils';
import { prompt, Answers, Separator, Question, objects } from 'inquirer';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

const findType = (characters: Character[], type: string) => {
    console.log(
        '\nBusque los tipos de "' + type + '" en el arreglo `people.json`'
    );
    const types = characters.map((character: Character) => {
        return character[type];
    });
    const answer = types
        .filter((value, index, array) => array.indexOf(value) === index)
        .map(value => {
            return { [type]: value };
        });
    console.log(answer);
    return types;
};

const getArrayType = (characters: Character[], type: string) => {
    console.log(
        '\nClasifique y cree diferentes arreglos dependiendo del gender, eye_color, skin y hair_color.'
    );
    const types = characters
        .map((character: Character) => {
            return character[type];
        })
        .filter((value, index, array) => array.indexOf(value) === index)
        .map(value => {
            return { [type]: value };
        });
    console.log(types);
};

const sumMassHeight = (characters: Character[]) => {
    console.log(
        '\nCalcular la sumatoria de la propiedad "mass" y la propiedad "height".'
    );
    const sumMass = characters
        .map((character: Character) => {
            let mass = 0;
            if (character.mass !== 'unknown') {
                mass = parseInt(character.mass);
            }
            return mass;
        })
        .reduce((total, value) => {
            return total + value;
        });
    const sumHeight = characters
        .map((character: Character) => {
            let height = 0;
            if (character.height !== 'unknown') {
                height = parseInt(character.height);
            }
            return height;
        })
        .reduce((total, value) => {
            return total + value;
        });
    const sum = {
        massTotal: sumMass,
        heightTotal: sumHeight
    };
    console.log(sum);
};

const main = async () => {
    const data = await readFile('people.json');
    const characters: Character[] = JSON.parse(data);
    findType(characters, 'gender');
    findType(characters, 'eye_color');
    findType(characters, 'skin_color');
    findType(characters, 'hair_color');

    sumMassHeight(characters);
};

main();
