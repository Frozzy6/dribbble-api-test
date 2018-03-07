import React from 'react';
import Wrap from './Wrap';
import moment from 'moment';

import '../scss/Content.scss';

const createShot= (shot, onClick) => (
  <div className="card" key={shot.id} onClick={onClick.bind(null, shot)}>
    <div className="card__preview">
      <div className="card__date">{moment(shot.created_at).format('DD.MM.YYYY')}</div>
      <img className="card__preview-img" src={shot.images.normal}/>
      <div className="card__preview-img-hover">
        <div className="card__preview-hover-text">{shot.title}</div>
      </div>
    </div>
    <div className="card__info">
      <div className="card__info-author">{shot.user.name}</div>
      <div className="meta">
        <div className="meta__likes">{shot.likes_count}</div>
        <div className="meta__views">{shot.views_count}</div>
      </div>
    </div>
  </div>
)
export default ({shots, onItemClick}) => {
  return (
  <div className="content">
    <Wrap>
      {shots.map(shot => createShot(shot, onItemClick))}
    </Wrap>
  </div>
)}
