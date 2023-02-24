import React from "react"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Request(props)
{
    return (
        <div>
            <Row>
                {!props.email&&!props.title&&(<h5></h5>)}
                {props.email&&props.title&&(<div>
                                                <button style={{marginRight:"10px"}} className="btn btn-primary" onClick = {() => props.handleAccept(props.email, props.price, props.title, props.individualId, props.courseId)}> accept </button>
                                                <button className="btn btn-primary" onClick = { () => props.handleReject(props.email, props.title, props.individualId, props.courseId)}> reject </button>
                                                <span> <h6> <strong>Student's Email: </strong></h6>{props.email} </span>
                                                <span> <h6> <strong>Subject Title: </strong></h6>{props.title} </span> <hr style={{marginTop:"20px"}}></hr>
                                            </div> )                    
                }
            </Row>
        </div>
    )

}