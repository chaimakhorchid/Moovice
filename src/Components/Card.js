import { fireEvent } from '@testing-library/dom'
import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        const {poster_path, original_title, release_date, overview} = this.props
        return (
            <div>
                <div className="card m-3" style={{width: "18rem"}}>
                    <div style={{height: "14rem", overflow: "hidden"}}><img src={`https://image.tmdb.org/t/p/w300/${poster_path}`}/></div>
                    <div className="card-body">
                        <h1>{original_title}</h1>
                        <p>{release_date}</p>
                        <p>{overview}</p>
                    </div>
                </div>
            </div>
        )
    }
}
