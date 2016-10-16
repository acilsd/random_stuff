import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Preloader from '../components/Preloader';
import TopicListItem from '../components/TopicListItem';

class TopicList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchTopics();
  }

  render() {
    const { topics, loaded } = this.props;
    if(!loaded) {
      return (
          <div class="wrapper">
            <Preloader />
          </div>
      );
    }

    return (
      <div class="wrapper">
        {
          topics.map((topic) => {
            return (
              <TopicListItem
                key={topic.id}
                link={topic.id}
                title={topic.name}
                text={topic.description}
                avatar={topic.heroImage}
              />
            );
          })
        }
      </div>
    );
  }
}

TopicList.propTypes = {
  topics: React.PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    topics: state.topics.topics,
    loaded: state.topics.loaded,
    test: state.topics.test
  };
}

export default connect(mapStateToProps, actions)(TopicList);
