# Clase 6


## Componentes statefull (con state interno) y cliclo de vida

El ejemplo "counter" visto en clase, mustra como se maneja el state interno en un componente React. La app se encuentra en la carpeta "counter".

### Correr el ejemplo localmente

Desde la carpeta root del proyecto (clase6) ejecutar los siguientes comandos en la terminal.

```
cd counter
```

```
npm install
```

```
npm start
```

### Links

- https://facebook.github.io/react/docs/react-component.html


## Data fetch en React

Dentro de la carpeta "ajax" encontramos el ejemplo visto en clase. Usamos la API de fetch disponible en navegadores modernos para realizar peticiones HTTP. Alternativamente se pueden utilizar librerias como Axios para realizar la misma tarea.

### Correr el ejemplo localmente

Para levantar el servidor, necesitamos tener docker instalado. Desde la carpeta root del proyecto (clase6) ejecutar los siguientes comandos en la terminal.

```
bash api/init.sh
```

```
cd ajax
```

```
npm install
```

```
npm start
```

### Links

- https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch
- https://github.com/mzabriskie/axios


## Ejercicios

Dentro de la carpeta "ejercicios" estan las consignas para relizar los ejercicios propuestos en clase.


## Create React App

En la clase usamos como "plantilla" para iniciar proyectos el proyecto contenido en la carpeta "ejemplo" que es una app creada con la tool create-react-app. Si tenes esa tool instalada, podes usarla para crear nuevos proyectos simplemente ejecutando el siguiente comando en la terminal.

```
create-react-app myapp
```

Esto creara un nuevo directorio con el nombre de la app "myapp" dentro del directorio en el que estamos trabajando.

### Links

- https://github.com/facebookincubator/create-react-app


## Sobre "event handlers" y el operador "bind"

Existen distintas formas de pasar "metodos de clase" como event handlers en React, evitando issues con las referencias a la variable `this`. En clases, usamos arrow functions:

```
<button onClick={() => this.increase()}>+</button>
```

Usando Arrow functions, nos aseguramos que el valor de `this` es el mismo que en el scope exterior. Sin embargo esto tiene el "known issue" de que en cada ejecucion de render se crea una nueva funcion. En la mayoria de los casos esto es aceptable y no trae mayores issues de performance. Hecha esta aclaracion, en el siguiente link se presentan otras formas de lidiar con el mismo problema.

- https://facebook.github.io/react/docs/handling-events.html

