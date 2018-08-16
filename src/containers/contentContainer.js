import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import { closeDialog, openDialog, fetchShots } from '../actions';
import Content from '../components/Content';
import DialogView from '../components/DialogContent';
import DialogContainer from './dialog';

const mapStateToProps = state => ({
  shots: state.shots
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchShots(dispatch)),
  onItemClick: id => dispatch(openDialog(id)),
  handleScroll: () => {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;

    if (windowBottom >= docHeight ) {
      dispatch(fetchShots(dispatch, 2))
    }
  }
})

const contentContainer = function() {
  return  (Content => {
    class ReduxContent extends Component {
      componentDidMount() {
        this.props.fetchData().then(()=>{
          this.props.fetchData()
        });
        window.addEventListener('scroll', this.props.handleScroll);
      }

      componentWillUnmount() {
        window.removeEventListener('scroll', this.props.handleScroll);
      }

      render(){
        return (<Content {...this.props} />)
      }
    }

    return connect(mapStateToProps, mapDispatchToProps)(ReduxContent)
  });
}
 
export default contentContainer()(Content);
