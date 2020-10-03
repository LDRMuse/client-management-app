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
            placeholder="Date of Service"
            // value=''
            name="dateOfService"
            onChange=''
          />
          <input
            className='input'
            type="text"
            placeholder="Type of Service"
            // value=''
            name="typeOfService"
            onChange=''
          />
          <input
            className='input'
            type="text"
            placeholder="Pigment Brand"
            // value=''
            name="pigmentBrand"
            onChange=''
          />
          <input
            className='input'
            type="text"
            placeholder="Needle/Blade Brand"
            // value=''
            name="needleBladeBrand"
            onChange=''
          />
          <input
            className='input'
            type="text"
            placeholder="Needle/Blade Size"
            // value=''
            name="needleBladeSize"
            onChange=''
          />
          <input
            className='input'
            type="text"
            placeholder="Numbing Agent"
            // value=''
            name="numbingAgent"
            onChange=''
          />
          <input
            className='input'
            type="text"
            placeholder="Price of Service"
            // value=''
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
