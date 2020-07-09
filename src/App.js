import React, { useState, useEffect } from 'react';
import { fakeAPI } from "./fakeAPI/fakeAPI"
import Row from "./componens/Row"
import { FixedSizeList as List } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";
import "./App.css"
// React Window works with virtualized (hes own anscestor version)
// to acces some packages

const container = {
  display: 'flex',
  height: '80vh',
  marginTop: '1rem',
  marginLeft: '2rem',
  marginRight: '2rem',
}
const listWrapper = {
  flexGrow: 1,
}
const rightMenu = {
  display: 'flex',
  flexDirection: 'column',
}
const letter = `font-light text-md text-gray-600 ml-3`;


const App = () => {

  const letterM = React.useRef()

  const clickHandler = (event) => {
    letterM.current.scrollToItem(event.target.id)
  }

  return (
    <div className="flex flex-col">
      <div className="ml-12 mt-12">
        <h1 className="text-4xl text-purple-500 ">React Window</h1>
        <h3 className="py-1 px-3 bg-gray-700 text-gray-100 rounded-full inline-block text-xl">50K Records</h3>
      </div>

      <div style={container}>
        <div style={listWrapper}>
          <AutoSizer style={{ boxSizing: 'content-box' }}>
            {({ height, width }) => (
              <List
                height={height}
                itemCount={50000}
                itemSize={350}
                width={width}
                ref={letterM}
                itemData={fakeAPI}
              >
                {Row}
              </List>
            )}
          </AutoSizer>
        </div>
        <div style={rightMenu}>
          {/* Just for the purpose, this would be Array.map() generated */}
          <div id={0} className={letter} onClick={clickHandler}>A</div>
          <div id={400} className={letter} onClick={clickHandler}>B</div>
          <div id={600} className={letter} onClick={clickHandler}>C</div>
          <div id={800} className={letter} onClick={clickHandler}>D</div>
          <div id={1000} className={letter} onClick={clickHandler}>E</div>
          <div id={2000} className={letter} onClick={clickHandler}>F</div>
          <div id={3000} className={letter} onClick={clickHandler}>G</div>
          <div id={4000} className={letter} onClick={clickHandler}>H</div>
          <div id={5000} className={letter} onClick={clickHandler}>I</div>
          <div id={6000} className={letter} onClick={clickHandler}>J</div>
          <div id={10000} className={letter} onClick={clickHandler}>K</div>
          <div id={15000} className={letter} onClick={clickHandler}>L</div>
          <div id={17000} className={letter} onClick={clickHandler}>M</div>
          <div id={21000} className={letter} onClick={clickHandler}>N</div>
          <div id={22000} className={letter} onClick={clickHandler}>O</div>
          <div id={25000} className={letter} onClick={clickHandler}>P</div>
          <div id={30000} className={letter} onClick={clickHandler}>Q</div>
          <div id={35000} className={letter} onClick={clickHandler}>R</div>
          <div id={36000} className={letter} onClick={clickHandler}>S</div>
          <div id={37000} className={letter} onClick={clickHandler}>T</div>
          <div id={38000} className={letter} onClick={clickHandler}>U</div>
          <div id={40000} className={letter} onClick={clickHandler}>V</div>
          <div id={42000} className={letter} onClick={clickHandler}>W</div>
          <div id={43000} className={letter} onClick={clickHandler}>X</div>
          <div id={44000} className={letter} onClick={clickHandler}>Y</div>
          <div id={45000} className={letter} onClick={clickHandler}>Z</div>
          <div id={50000} className={letter} onClick={clickHandler}>#</div>
        </div>
      </div >
    </div>
  );
}

export default App;
