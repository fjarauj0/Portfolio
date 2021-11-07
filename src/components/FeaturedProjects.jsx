import React from 'react';
import Card from './Card';
import mapbox from '@/images/mapbox.png';
import vnewspaper from '@/images/vnewspaper.png';
import vebooks from '@/images/vebooks.png';
import cc2022 from '@/images/cc2022.png';
import kanbanboard from '@/images/kanbanboard.png';

const FeaturedProjects = () => {
  return (
    <section id='projects' className='bg-base-200 py-16'>
      <div className='max-w-screen-2xl mx-auto px-8'>
        <h2 className='my-8'>Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* <Card
            title='Congreso CEEAD 2022'
            img={cc2022}
            url='https://congreso.ceead.org.mx/'
          >
            <p>
              Página web para el evento de Congreso CEEAD 2022, fue creada
              utlizando React y bootstrap.
            </p>
          </Card> */}
          <Card
            title='Mapbox route'
            img={mapbox}
            url='https://mapbox-route.vercel.app/'
            repo='https://github.com/fjarauj0/mapbox-route'
          >
            <p>
              Calcula la distancia y el tiempo de recorrido entre 2 puntos en el
              mapa, fue creada utilizando la API de Mapbox y React.
            </p>
          </Card>
          <Card
            title='Vintage newspaper'
            img={vnewspaper}
            url='https://fjarauj0.github.io/VintageNewspaper/'
            repo='https://github.com/fjarauj0/VintageNewspaper'
          >
            <p>
              Una página web que simula un periódico antiguo haciendo uso de
              HTML Y CSS sin utilizar ningún tipo de framework para css o
              frontend. La página es 100% responsive.
            </p>
          </Card>
          <Card
            title='Vanilla eBooks'
            img={vebooks}
            url='https://fjarauj0.github.io/VanillaBooks/'
            repo='https://github.com/fjarauj0/VanillaBooks'
          >
            <p>
              Biblioteca virtual utilizando HTML Y CSS para la maquetación y JS
              Vanilla para la interacción. Utiliza la API de Google Books
            </p>
          </Card>
          <Card
            title='Tablero kanban'
            img={kanbanboard}
            url='https://kanbanboard-rho.vercel.app/'
            repo='https://github.com/fjarauj0/Kanbanboard'
          >
            <p>
              Un tablero Kanban para ordenar tareas en 4 columnas, utiliza
              localstorage para guardar los datos.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
