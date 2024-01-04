import React from "react";
import {Card, CardBody, CardTitle, CardText} from "reactstrap"
import {FaEnvelope, FaMapMarkedAlt, FaPhone} from "react-icons/fa"

const MyCard=({details})=>{
    
    return(
        <Card>
            <CardBody className="text-center">
                <img height="150" width="150" className="rounded-circle img-thumbnail border-warning" 
                src={details.picture?.large}/>
                <CardTitle className="text-success">
                    <h1>
                    
                        <span className="pr-5">{details.name?.first}</span>
                        <span>{details.name?.last}</span>
                    </h1>
                </CardTitle>
                <CardText>
                    <FaMapMarkedAlt/>
                    {details.location?.city} 
                    <p><FaPhone/>{details.phone}</p>
                    <p style={{color:"indigo"}}>
                        <FaEnvelope/>
                        {details.dob?.age}</p>
                </CardText>
            </CardBody>
        </Card>
    )

}

export default MyCard