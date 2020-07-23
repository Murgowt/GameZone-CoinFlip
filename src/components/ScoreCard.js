import React from 'react';
import "../App.css";
export default class ScoreCard extends React.Component
{
    state={
        tosses:0,
        heads:0,
        tails:0
    }
    render()
    {
        return(
            <table className="TableDIV">
                <tr>
                    <th>Number of Flips</th>
                    <th>Heads</th>
                    <th>Tails</th>
                </tr>
                <tr>
                    <td>{this.state.tosses}</td>
                    <td>{this.state.heads}</td>
                    <td>{this.state.tails}</td>
                </tr>
            </table>
        )
    }
}