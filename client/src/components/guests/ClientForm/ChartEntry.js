import React, { Fragment, useState, useContext } from 'react'
import ClientContext from '../../../context/clientContext/clientContext'

export const ChartEntry = ({ client }) => {
  const { addChart } = useContext(ClientContext)



  // 1. create state
  const [charts, setCharts] = useState({
    dateOfService: "",
    typeOfService: "",
    pigmentBrand: "",
    colorFormula: "",
    needleBladeBrand: "",
    needleBladeSize: "",
    numbingAgent: "",
    priceOfService: "",
    additionalNotes: ""
  })

  const { dateOfService,
    typeOfService,
    pigmentBrand,
    colorFormula,
    needleBladeBrand,
    needleBladeSize,
    numbingAgent,
    priceOfService,
    additionalNotes
  } = charts

  //2. set the values to state
  const handleChange = (e) => {
    e.preventDefault()
    setCharts({
      charts: {
        ...charts,
        [e.target.dateOfService]: e.target.value,
        [e.target.typeOfService]: e.target.value,
        [e.target.pigmentBrand]: e.target.value,
        [e.target.colorFormula]: e.target.value,
        [e.target.needleBladeBrand]: e.target.value,
        [e.target.needleBladeSize]: e.target.value,
        [e.target.numbingAgent]: e.target.value,
        [e.target.priceOfService]: e.target.value,
        [e.target.additionalNotes]: e.target.value
      }
    })
  }

  //3.now we need to send the values to ClientState and then set the inputs back to empty strings
  const handleSubmit = (e) => {
    e.preventDefault()
    addChart(charts)
    setCharts({
      dateOfService: "",
      typeOfService: "",
      pigmentBrand: "",
      colorFormula: "",
      needleBladeBrand: "",
      needleBladeSize: "",
      numbingAgent: "",
      priceOfService: "",
      additionalNotes: ""
    })

  }

  console.log(charts.charts, 'hi')


  return (
    <Fragment><div className='box' id='formBox'>
      <h1 className='title is-3'>Chart Entry</h1>
      <form className='field is-grouped is-grouped-centered' onSubmit={handleSubmit}>
        <div className='inputWidth'>
          <input
            className='input'
            type="text"
            placeholder="Date of Service"
            value={dateOfService}
            name="dateOfService"
            onChange={handleChange}
          />
          <input
            className='input'
            type="text"
            placeholder="Type of Service"
            value={typeOfService}
            name="typeOfService"
            onChange={handleChange}
          />
          <input
            className='input'
            type="text"
            placeholder="Pigment Brand"
            value={pigmentBrand}
            name="pigmentBrand"
            onChange={handleChange}
          />
          <input
            className='input'
            type="text"
            placeholder="Color Formula"
            value={colorFormula}
            name="colorFormula"
            onChange={handleChange}
          />
          <input
            className='input'
            type="text"
            placeholder="Needle/Blade Brand"
            value={needleBladeBrand}
            name="needleBladeBrand"
            onChange={handleChange}
          />
          <input
            className='input'
            type="text"
            placeholder="Needle/Blade Size"
            value={needleBladeSize}
            name="needleBladeSize"
            onChange={handleChange}
          />
          <input
            className='input'
            type="text"
            placeholder="Numbing Agent"
            value={numbingAgent}
            name="numbingAgent"
            onChange={handleChange}
          />
          <input
            className='input'
            type="text"
            placeholder="Price of Service"
            value={priceOfService}
            name="priceOfService"
            onChange={handleChange}
          />
          <textarea
            class="textarea"
            placeholder="Additional Notes"
            value={additionalNotes}
            name="additionalNotes"
            onChange={handleChange}>
          </textarea>
          <button className="button ml-3 mt-2" type="submit">Add</button>
        </div>
      </form>
    </div>
    </Fragment>
  )
}
