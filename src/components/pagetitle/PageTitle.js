import React from 'react'
import { Link } from 'react-router-dom'

const PageTitle = (props) => {
    return (
        <div className="wpo-breadcumb-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-breadcumb-wrap">
                            <h2>{props.pageTitle}</h2>
                            <ul className="wpo-breadcumb-wrap">
                                <li><Link to="/home"></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageTitle;