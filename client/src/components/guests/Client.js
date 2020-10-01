import React from 'react'

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
// adding font-awesome icons is tricky
// faEdit for example, looks like fa-edit in fontawesome docs. you have to convert it to camelCase
// solid, brands, regular are collections of icons ex: "@fortawesome/free-solid-svg-icons";
library.add(fas, faEdit, faTrash, faPhone);

export const Client = () => {
  return (
    <div className="box">
    <div className="">
      <div>
        <button className="button mr-4 pl-4 pr-4">
          <FontAwesomeIcon icon="edit" className="icon" />
        </button>
        <button className="button mr-4 pl-4 pr-4">
          <FontAwesomeIcon icon="trash" className="icon" />
        </button>
      </div>
    </div>
    <div className="">
      <h2>Name</h2>
        <FontAwesomeIcon icon="phone" className="icon" />
        <i className="fas fa-phone" />
        <p>111-111-1111</p>
      </div>
    </div>
  )
}
