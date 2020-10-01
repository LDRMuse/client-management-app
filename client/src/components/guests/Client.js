import React from 'react'
import './client-card.css'

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

// adding font-awesome icons is tricky
// faEdit for example, looks like fa-edit in fontawesome docs. you have to convert it to camelCase
// solid, brands, regular are collections of icons ex: "@fortawesome/free-solid-svg-icons";
library.add(fas, faEdit, faTrash);

export const Client = ({name, email, phone}) => {


  return (
    <div className='card-container has-background-danger-light'>
    <img alt='photo' className='image' src='https://source.unsplash.com/random' />
        <h1 className='title is-2'>{name}</h1>
        <p>{phone}</p>
        <p>{email}</p>
        <div className=''>
        <button>
        <FontAwesomeIcon icon="edit" className="icon"/>
        </button>
        <button>
        <FontAwesomeIcon icon="trash" className="icon"/>
        </button>
        </div>
    </div>
  )
}
