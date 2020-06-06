import React from 'react'
import './Fruit.css';

function Fruit() {
    return(
<div>
    <h1 id="title">Fruits</h1>
	<h2> Healthy fruits </h2>
	<ul id="listOfFruits" className="Kelele">
		<li id="one" className="red"> Apple </li>
		<li id="two" className="yellow"> Mango </li>
		<li id="three" className="red"> Peach </li>
		<li id="four" className="green"> Kiwi </li>
		<li id="five" className="orange"> Papaya </li>
		<li id="six" className="green"> Avocado </li>
		<li id="seven" className="yellow"> Lemon </li>
	</ul>
    </div>
    );
    }
export default Fruit;