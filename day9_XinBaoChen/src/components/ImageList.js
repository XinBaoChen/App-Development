import React from 'react';

const Images__List = function(props) {
  const images = props.images.map((image) => {
    return <img key={image.id} src={image.webformatURL} alt='images' />;
  });

  return (
    <div>
      <p>MY Images List</p>
      {images}
    </div>
  );
};

export default Images__List;