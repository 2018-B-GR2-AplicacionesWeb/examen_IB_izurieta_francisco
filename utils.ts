import { from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import * as fs from 'fs';

export interface Character {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
}

export const readFile = (fileName: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        fs.readFile(
            fileName,
            'utf-8',
            (error: NodeJS.ErrnoException, data: string) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(data);
                }
            }
        );
    });
};

export const writeFile = (
    fileName: string,
    content: string
): Promise<string> => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, content, (error: NodeJS.ErrnoException) => {
            if (error) {
                reject(error);
            } else {
                resolve('Cambios guardados correctamente.');
            }
        });
    });
};
