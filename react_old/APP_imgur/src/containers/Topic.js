import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Preloader from '../components/Preloader';
import ImageItem from '../components/ImageItem';

class Topic extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchTopicImages(this.props.params.id);
  }

  render() {
    const { images, loaded } = this.props;
    if(!loaded) {
      return (
        <div class="wrapper">
          <Preloader />
        </div>
      );
    }
    return (
      <div class="wrapper">
        <div class="image-wrapper">
          {
            images.slice(0,21).map((image) => {
              return (
                <ImageItem
                  key={image.id}
                  {...image}
                />
              );
            })
          }
        </div>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    images: state.topic.images,
    loaded: state.topic.loaded
  };
}

export default connect(mapStateToProps, actions)(Topic);
