import React, { PropTypes } from 'react';

const Message = (props) => {
  const { city, temp, loading } = props;
  return (
    <div>
      {
        loading
        ?
          <h1 class='text-center'>loading...</h1>
        :
        <div>
          <h2>{city}</h2>
          <h3>{temp}</h3>
        </div>
      }
    </div>
  );
};
Message.propTypes = {
  loading: PropTypes.bool.isRequired,
  city: PropTypes.string,
  temp: PropTypes.any
};

export default Message;
