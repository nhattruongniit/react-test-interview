import React from 'react'

function Accordion() {
  return (
    <div>
      <h1>Accordion</h1>
      <div className="accordionFluent">
        <div className="accordionItemFluent">
          <div className="accordionItemFluent-header">
            <h3 className="accordionItemFluent-title">CONSTRUCTION</h3>
          </div>
          <div className="accordionItemFluent-panel">
            content
          </div>
        </div>

        <div className="accordionItemFluent">
          <div className="accordionItemFluent-header">
            <h3 className="accordionItemFluent-title">INTERNAL GAIN</h3>
          </div>
          <div className="accordionItemFluent-panel">
          content
          </div>
        </div>

        <div className="accordionItemFluent">
          <div className="accordionItemFluent-header">
            <h3 className="accordionItemFluent-title">AIRFLOW</h3>
          </div>
          <div className="accordionItemFluent-panel">
          content
          </div>
        </div>

        <div className="accordionItemFluent">
          <div className="accordionItemFluent-header">
            <h3 className="accordionItemFluent-title">HEATING & COOLING</h3>
          </div>
          <div className="accordionItemFluent-panel">
          content
          </div>
        </div>
        <div className="accordionItemFluent">
          <div className="accordionItemFluent-header">
            <h3 className="accordionItemFluent-title">LOCATION, CLIMATE & WEATHER</h3>
          </div>
          <div className="accordionItemFluent-panel">
          content
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accordion