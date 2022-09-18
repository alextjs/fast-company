import React from "react";



const BookMark = ({ id, onToggleMark, mark  }) => {

    return (
        <>
        <button
            className="btn btn-sm"
            onClick={() => onToggleMark(id)}>
            {mark ? (<i className="bi bi-bookmark-check"></i>) : (<i className="bi bi-bookmark-check-fill"></i>)}
        </button>
        </>
    )
}

export default BookMark;