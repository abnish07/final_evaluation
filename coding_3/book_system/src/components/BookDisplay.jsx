import React from "react";

function BookDisplay(props) {
  const bookData = props.bookData;
  console.log("bookdata", bookData);
  return (

    <>
     {/* <div className="col-12"> */}
     { bookData && bookData.data.map(item=>(
        
      <div className="card" key={item.id}>
        <img src={item.url} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
          <p className="card-text">
           Price: {item.price}
          </p>
          <p className="card-text">
            <small className="text-muted">{item.author}</small>
          </p>
        </div>
      </div>
     ))}
      
    {/* </div> */}
    </>
  );
}

export default BookDisplay;
