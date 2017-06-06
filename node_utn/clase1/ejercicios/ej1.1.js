/*
* En un archivo ej5.json, guardar todas los nombres de los planetas que aparecen en la pelicula "Attack of the Clones"
* 
* 1) Obtener los ids de los planetas leyendo el json del archivo planets.json buscando por id=5
* 2) Obttener los planetas del archivo planets.json
* 3) Escribir el resultado en un nuevo archivo (ej5.json) con el siguiente formato:
* 
* ["planeta1", "planeta2", ...]
*
* Home work: relizar este ejercicio usando las distintas tecnicas vistas en clase
* Guardar las distintas versiones en archivos ej5.1.js, ej5.2.js, ej5.3.js, ej5.4.js
*/

// Inclusión del módulo (core) "fs", necesario para trabajar con el file system
// https://nodejs.org/api/modules.html#modules_core_modules
const fs = require('fs');

// constantes con las ubicaciones de los archivos
const planetFile = '../data/planets.json';
const filmsFile = '../data/films.json';
const ej1File = './ej1.1.json';

// leer el archivo de películas
fs.readFile(filmsFile, (err, fdata) => {
  // early return en caso de error
  if (err) {
    return console.log(`No se pudo leer el archivo ${filmsFile}`);
  }

  // obtener el json de películas
  let films = null;
  try {
    films = JSON.parse(fdata);
  } catch (error) {
    return console.log(`No se pudo parsear el archivo ${filmsFile}`);
  }

	// obtener el objeto de luke
  const filmPlanets = films.find(film => film.id === '5');

	// leer el archivo de personas
  fs.readFile(planetFile, 'utf-8', (err, pdata) => {
    // early return en caso de error
    if (err) {
      return console.log(`No se pudo leer el archivo ${planetFile}`);
    }

    // obtener el json de personas
    let planets = null;
    try {
      planets = JSON.parse(pdata);
    } catch (error) {
      return console.log(`No se pudo parsear el archivo ${planetFile}`);
    }

		// obtener los nombres de las películas de luke
    const planetNames = planets
			.filter(planet => filmPlanets.planets.includes(planet.id))
			.map(planet => planet.name);

    console.log(planetNames);

		// escribir en un archivo
    fs.writeFile(ej1File, JSON.stringify(planetNames), err => {
			// early return en caso de error
      if (err) {
        return console.log(`No se pudo escribir el archivo ${ej1File}`);
      }
      console.log('The luke films has been saved!'+planetNames);
    });
  });
});
