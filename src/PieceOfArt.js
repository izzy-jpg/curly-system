// PieceOfArt.js

function PieceOfArt(props) {
  return (
    // <div key={artwork.id}>
    //   <h2>{artwork.longTitle}</h2>
    //   <img src={artwork.webImage.url} alt={artwork.title} />
    // </div>
    <div key={props.key}>
      <h2>{props.title}</h2>
      <img src={props.imagePath} alt={props.alt} />
    </div>
  );
};

export default PieceOfArt;