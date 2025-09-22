import { useEffect, useState } from "react";
import VehicleData from "../json/vehicle.json"

export default function VehicleDetails() {
    const [data, setData] = useState(null);
    const [expandedCards, setExpandedCards] = useState({});

    useEffect(() => {
        setData(VehicleData);
    }, []);

    const toggleExpanded = (vehicleNo) => {
        setExpandedCards(prev => ({
            ...prev,
            [vehicleNo]: !prev[vehicleNo]
        }));
    };

    return (
        <div>
            <div className='vehicleDetailsBox'>
                <div>
                    <h3>Vehicle Details</h3>
                    {/* <button onClick={() => setMoreDetailsShow(!moreDetailsShow)}>{moreDetailsShow ? 'Hide' : 'Show'}</button> */}
                </div>
                {data &&
                    <div>


                        <div>

                            {data.innerObject.All.VehicleList.map((vehicle, index) => (
                                <div key={vehicle.data["Vehicle No"]} className="vehicle-card">
                                    <div >
                                        <h5>{vehicle.data["Vehicle No"]}</h5>
                                        <p>WBS No: {vehicle.data["WBS No"]}</p>
                                    </div>

                                    <div>
                                        <div className="weight-details">
                                            <div className="ptags">
                                            <p>Total Bags: </p>
                                            <div>{vehicle.data["Total Bags"]}</div>
                                            </div>
                                            <div className="ptags">
                                            <p>Unloaded Bags: </p>
                                            <div>{vehicle.data["Unloaded Bags"]}</div>
                                            </div>
                                            <div className="ptags">
                                            <p>Returned Bags: </p>
                                            <div>{vehicle.data["Returned Bags"]}</div>
                                            </div>
                                        </div>

                                        <div className="weight-details">

                                            <div className="ptags">
                                            <p>Gross Weight MT:: </p>
                                            <div>{vehicle.data["Gross Weight MT"]}</div>
                                            </div>
                                            <div className="ptags">
                                            <p>Tare Weight MT: </p>
                                            <div>{vehicle.data["Tare Weight MT"]}</div>
                                            </div>
                                            <div className="ptags">
                                            <p>Net Weight MT: </p>
                                            <div>{vehicle.data["Net Weight MT"]}</div>
                                            </div>
                                        </div>
           
                                    </div>


                                    <div>
                                        <div
                                            className="more-details-link"
                                            onClick={() => toggleExpanded(vehicle.data["Vehicle No"])}
                                        >
                                            {expandedCards[vehicle.data["Vehicle No"]] ? 'Hide Details' : 'More Details'}
                                        </div>
                                    </div>

                                    {expandedCards[vehicle.data["Vehicle No"]] && (
                                        
                                        <div className="expanded-details">
                                            <hr/>
                                            <div className="qa-details">
                                                <h4 className="headingsSub">QA Details</h4>
                                                <div className="summaryHead">
                                                    <p>Parameter Name: MOISTURE</p>
                                                    <p>Result: <strong>4.90</strong></p>
                                                </div>
                                            </div>
                                            <hr/>

                                            <div className="loading-details">
                                                <h4 className="headingsSub">Loading Details</h4>
                                                <div className="summaryHead">
                                                    <p>Wagon/Stack No: 31032514111</p>
                                                    <p>Bags: <strong>{vehicle.data["Total Bags"]}</strong></p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}