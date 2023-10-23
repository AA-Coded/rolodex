// import { Component } from "react";
import './card-list.styles.css'
import Card from "../card/card.component.jsx";

const CardList = ({ cats }) => (
            <div className="card-list">
                {cats.map((cat) => {
                    return (
                        <Card cat={cat}/>
                    )
                })}
            </div>
            )
export default CardList;