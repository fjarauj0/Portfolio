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
          desc: 'Biblioteca virtual utilizando HTML Y CSS para la maquetación y JS Vanilla para la interacción. Utiliza la API de Google Books',
        },
        kanbanboard: {
          title: 'Tablero kanban',
          desc: 'Un tablero Kanban para ordenar tareas en 4 columnas, utiliza localstorage para guardar los datos.',
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
          desc: 'Página web para el evento de Congreso CEEAD 2022, fue creada utlizando React y bootstrap.',
        },
        expo: {
          title: 'Expo CEEAD',
          desc: 'expo...',
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
          desc: 'Biblioteca virtual utilizando HTML Y CSS para la maquetación y JS Vanilla para la interacción. Utiliza la API de Google Books',
        },
        kanbanboard: {
          title: 'Tablero kanban',
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
