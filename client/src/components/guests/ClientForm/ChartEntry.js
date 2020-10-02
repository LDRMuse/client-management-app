import React, {Fragment} from 'react'

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
    <Fragment>
          <form onSubmit=''>
        <h1 className='title is-3'>Chart Entry</h1>
        <input type="text" value="Date of Service" name="dateOfService" onChange='' />
        <input type="text" value="Type of Service" name="typeOfService" onChange='' />
        <input type="text" value="Pigment Brand" name="pigmentBrand"  onChange='' />
        <input type="text" value="Needle/Blade Brand" name="needleBladeBrand"  onChange='' />
        <input type="text" value="Needle/Blade Size" name="needleBladeSize"onChange='' />
        <input type="text" value="Numbing Agent" name="numbingAgent" onChange='' />
        <input type="text" value="Price of Service" name="priceOfService" onChange='' />

        <button
          className="button is-primary ml-3 mt-2"
          type="submit"
        >
          Add
              </button>
      </form>
    </Fragment>
  )
}
