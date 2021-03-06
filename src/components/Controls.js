import React from 'react';
import './Controls.css';

const Controls = (props) => (
    <div className="button-row">
        <button className="btn btn-default" onClick={props.onPause}>
            <i className={props.interval ? "glyphicon glyphicon-pause" : "glyphicon glyphicon-play"} aria-hidden="true"></i>
        </button>
        <label className="label label-primary label-gen">
            {'Current Generation: ' + props.generation}
        </label>
        <button className="btn btn-default" onClick={props.onSettings}>
            <i className="glyphicon glyphicon-cog" aria-hidden="true"> </i>
        </button>
    </div>
)

export default Controls;