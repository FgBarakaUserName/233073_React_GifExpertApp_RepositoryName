import React from 'react'


// viene de un esparcimiento de propiedades
export const Kj086GifCardItem = ({kjTitle, kjUrl}) => {
    //console.log(kjTitle);
    return (
        <div className="kjCardItem">
            <img src= { kjUrl} alt= { kjTitle } />
            <p>{ kjTitle }</p>
        </div>
    );
}