import React from 'react'
import PropTypes from 'prop-types'


// viene de un esparcimiento de propiedades
export const Kj102GifCardItem = ({ kjTitle, kjUrl }) => {
    //console.log(kjTitle);
    return (
        <div className="kjCardItem">
            <img src= { kjUrl} alt= { kjTitle } />
            <p>{ kjTitle }</p>
        </div>
    );
}

Kj102GifCardItem.propTypes ={
    kjTitle  : PropTypes.string.isRequired,
    kjUrl    : PropTypes.string.isRequired
}