import React from 'react';
import truncate from 'truncate';
import moment from 'moment';
import 'moment/locale/pt-br';

import './index.css';

const ArtigosIndex = () => {
  const artigos = [
    {
      _id: '0381u2aijsdojas8', title: 'Fakenews Coronavírus', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin mollis tortor auctor consectetur. Nam arcu nisi, vestibulum non pellentesque a, vehicula id augue. Curabitur in vestibulum augue. Maecenas aliquet metus vitae vulputate hendrerit. Nunc ac ultrices ex. Aliquam vitae magna rutrum, vestibulum dui posuere, gravida dolor. Etiam tellus ipsum, commodo a laoreet at, faucibus non justo. Praesent a velit eget libero pretium placerat. Proin rutrum pharetra turpis a ullamcorper. Maecenas iaculis mi viverra augue interdum tincidunt. Cras ullamcorper ut tellus nec eleifend. Nulla consectetur mollis sem, ac semper ex sagittis sed. Proin sed pretium justo, id viverra ligula. Praesent feugiat orci ac justo aliquam accumsan. Sed eleifend faucibus libero vel rutrum. Morbi convallis, urna id accumsan mattis, felis lorem vestibulum felis, eu suscipit metus est sit amet massa.', image: 'https://www.reamp.com.br/blog/wp-content/uploads/2017/12/fakenews.jpg', createdAt: '2020-03-01T17:25:13.786+0000',
    },
    {
      _id: '0381u2aijsdasojas8', title: 'Coronavírus em São Paulo', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin mollis tortor auctor consectetur. Nam arcu nisi, vestibulum non pellentesque a, vehicula id augue. Curabitur in vestibulum augue. Maecenas aliquet metus vitae vulputate hendrerit. Nunc ac ultrices ex. Aliquam vitae magna rutrum, vestibulum dui posuere, gravida dolor. Etiam tellus ipsum, commodo a laoreet at, faucibus non justo. Praesent a velit eget libero pretium placerat. Proin rutrum pharetra turpis a ullamcorper. Maecenas iaculis mi viverra augue interdum tincidunt. Cras ullamcorper ut tellus nec eleifend. Nulla consectetur mollis sem, ac semper ex sagittis sed. Proin sed pretium justo, id viverra ligula. Praesent feugiat orci ac justo aliquam accumsan. Sed eleifend faucibus libero vel rutrum. Morbi convallis, urna id accumsan mattis, felis lorem vestibulum felis, eu suscipit metus est sit amet massa.', image: 'https://cdn-istoe-ssl.akamaized.net/wp-content/uploads/sites/14/2020/02/coronavirus-418x235.jpg', createdAt: '2020-02-28T23:55:00.268+0000',
    },
  ];

  const listArtigosElement = [];

  function formatDate(datetime) {
    moment.locale('pt-br');
    return moment(datetime).add(3, 'hours').calendar();
  }

  artigos.forEach((artigo) => {
    listArtigosElement.push(
      <li key={artigo._id}>
        <div className="article">
          <div className="article--Inner">
            <img src={artigo.image} alt={artigo.title} />
            <div>
              <a href="#!">{ truncate(artigo.title, 70) }</a>
              <p>{ truncate(artigo.description, 150) }</p>
              <p className="datetime">{ formatDate(artigo.createdAt) }</p>
            </div>
          </div>
        </div>
      </li>,
    );
  });
  return (
    <div className="artigos sombra">
      <div className="artigos--Inner">
        <h2 className="box-title articles-title">Confira as últimas notícias</h2>
        <ul className="list">
          { listArtigosElement }
        </ul>
      </div>
    </div>
  );
};

export default ArtigosIndex;
