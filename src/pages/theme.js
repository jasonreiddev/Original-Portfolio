import React from 'react'
import Layout from "../components/layout"

const ColorBoxContainerStyles = {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-evenly",
}
const ColorBoxTextContainerStyles = {
  background: "white",
}
const Images = () => {
  return (
    <Layout title="Theme">
      <div style={ColorBoxContainerStyles}>
        {ColorBox("Black")}
        {ColorBox("White")}
        {ColorBox("Light White")}
        {ColorBox("Light Accent")}
        {ColorBox("Medium Accent")}
        {ColorBox("Dark Accent")}
        {ColorBox("Positive Accent")}
        {ColorBox("Negative Accent")}
      </div>
    </Layout>
  )
};

function ColorBox(color){
  return(
    <>
  <div style={{
    "background-color": "var(--site"+color.replace(/\s/g, '')+")",
    height: "120px",
    width: "120px",
    border: "1px solid white",
    color: color,
    margin: "0.5em",
  }}>
    <div style={ColorBoxTextContainerStyles}>
      <span style={{"color": "var(--siteBlack"}}>{color}</span> 
    </div>
  </div>
  </>
  )
}

export default Images;