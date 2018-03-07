import React from 'react';
import moment from 'moment';

import '../scss/Dialog.scss';

export default ({ item, onRequestClose }) => {
  const  { user } = item;
  return (
    <React.Fragment>
      <div className="app-modal__cloase-icon" onClick={onRequestClose}><i className="fa fa-times"></i></div>
      <img className="app-modal__figure" src={item.images.hidpi}/>
      <div className="app-modal__about">
        <div className="app-modal__info-layout">
          <div className="app-modal__meta">
            <div className="app-modal__meta-row">
              <span className="app-modal__meta-data">{moment(item.created_at).format('DD.MM.YYYY')}</span>
              <span className="app-modal__meta-likes-count"><i className="fa fa-heart"></i>{item.likes_count}</span>
              <span className="app-modal__meta-views-count"><i className="fa fa-eye" style={{fontSize: "1.1em"}}></i>{item.views_count}</span>
            </div>
            <h2 className="app-modal__header">{item.title}</h2>
            {item.description &&
              (<div className="app-modal__text" dangerouslySetInnerHTML={{__html: item.description}}></div>)
            }
          </div>
        </div>
        <div className="app-modal__info-author">
          <div className="app-modal__main">
            <div className="info-author__avatar"><img  className="info-author__avatar-image" src={user.avatar_url}/></div>
            <div className="info-author__name">{user.name}</div>
            <div className="info-author__username">{user.username}</div>
            <div className="info-author__location">{user.location}</div>
            <div className="info-author__links">
              {user.links.web && (<a href={user.links.web} className="info-author__links-web"></a>)}
              {user.links.twitter && (<a href={user.links.twitter} className="info-author__links-twitter"></a>)}
            </div>
          </div>
          <div className="info-author__divider"></div>
          <div className="info-author__bio" dangerouslySetInnerHTML={{__html: user.bio}}></div>
        </div>
      </div>
    </React.Fragment>
  )
};
