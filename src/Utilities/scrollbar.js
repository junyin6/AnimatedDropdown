import React from 'react';
import {Scrollbars} from 'react-custom-scrollbars';

export const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: '#0084ff'
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };
  
export const CustomScrollbars = props => (
    <Scrollbars
      renderThumbHorizontal={renderThumb}
      renderThumbVertical={renderThumb}
      {...props}
    />
  );

