import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      hello: 'Hello! I am ',
      intro: 'Front end developer , I like to solve problems through code.',
      demo: 'Live demo',
      featured_projects: {
        cc2022: {
          title: 'Congreso CEEAD 2022',
          desc: 'Website for the CEEAD 2022 Congress event, was created using React and bootstrap 4.',
        },
        expo: {
          title: 'Expo CEEAD',
          desc: 'Website for the Expo CEEAD 2022 event, it was created using NextJS and bootstrap 4.',
        },
        mapbox: {
          title: 'Mapbox route',
          desc: 'Calculate the distance and travel time between 2 points on the map, it was created using the Mapbox API and React.',
        },
        vnewspaper: {
          title: 'Vintage newspaper',
          desc: 'A web page that simulates an old newspaper using HTML AND CSS without using any type of framework for css or frontend. The page is 100% responsive.',
        },

        vebooks: {
          title: 'Vanilla eBooks',
          desc: 'Virtual library using HTML and CSS for the layout and JS Vanilla for the interaction. Use the Google Books API',
        },
        kanbanboard: {
          title: 'Kanban board',
          desc: 'A Kanban board to sort tasks in 4 columns, use localstorage to save the data.',
        },
      },
    },
  },
  es: {
    translation: {
      home: 'Inicio',
      projects: 'Proyectos',
      about: 'Acerca de',
      hello: '¡Hola! soy ',
      intro:
        'Soy desarrollador web, enfocado en la parte de frontend. Me gusta resolver problemas a través de código.',
      demo: 'Live demo',
      featured_projects: {
        cc2022: {
          title: 'Congreso CEEAD 2022',
          desc: 'Página web para el evento de Congreso CEEAD 2022, fue creada utlizando React y bootstrap 4.',
        },
        expo: {
          title: 'Expo CEEAD',
          desc: 'Página web para el evento de Expo CEEAD 2022, fue creada utlizando NextJS y bootstrap 4.',
        },
        mapbox: {
          title: 'Mapbox route',
          desc: 'Calcula la distancia y el tiempo de recorrido entre 2 puntos en el mapa, fue creada utilizando la API de Mapbox y React.',
        },
        vnewspaper: {
          title: 'Vintage newspaper',
          desc: 'Una página web que simula un periódico antiguo haciendo uso de HTML Y CSS sin utilizar ningún tipo de framework para css o frontend. La página es 100% responsive.',
        },

        vebooks: {
          title: 'Vanilla eBooks',
          desc: 'Biblioteca virtual utilizando HTML y CSS para la maquetación y JS Vanilla para la interacción. Utiliza la API de Google Books',
        },
        kanbanboard: {
          title: 'Tablero Kanban',
          desc: 'Un tablero Kanban para ordenar tareas en 4 columnas, utiliza localstorage para guardar los datos.',
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
