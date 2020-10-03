import React, { Fragment } from 'react'

export const ChartEntry = () => {


  // dateOfService: "",
  // typeOfService: "",
  // pigmentBrand: "",
  // colorFormula: "",
  // needleBladeBrand: "",
  // needleBladeSize: "",
  // numbingAgent: "",
  // priceOfService: "",
  // additionalNotes: "",



  return (
    <Fragment><div className='box' id='formBox'>
      <h1 className='title is-3'>Chart Entry</h1>
      <form className='field is-grouped is-grouped-centered' onSubmit=''>
        <div className='inputWidth'>
          <input
            className='input'
            type="text"
            value="Date of Service"
            name="dateOfService"
            onChange=''
          />
          <input
            className='input'
            type="text"
            value="Type of Service"
            name="typeOfService"
            onChange=''
          />
          <input
            className='input'
            type="text"
            value="Pigment Brand"
            name="pigmentBrand"
            onChange=''
          />
          <input
            className='input'
            type="text"
            value="Needle/Blade Brand"
            name="needleBladeBrand"
            onChange=''
          />
          <input
            className='input'
            type="text"
            value="Needle/Blade Size"
            name="needleBladeSize"
            onChange=''
          />
          <input
            className='input'
            type="text"
            value="Numbing Agent"
            name="numbingAgent"
            onChange=''
          />
          <input
            className='input'
            type="text"
            value="Price of Service"
            name="priceOfService"
            onChange=''
          />
          <button className="button ml-3 mt-2" type="submit">Add</button>
        </div>
      </form>
    </div>
    </Fragment>
  )
}
