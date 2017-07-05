import React from 'react';



export const GuineaPigs = (props) => {
  return <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={props.src} />
      </div>
}

GuineaPigs.propTypes = {
  src: React.PropTypes.string.isRequired
};
