import { useState, useEffect } from "react";
import summaryData from "../json/summary.json";

export default function Summary() {
    const [isSummaryShow, setIsSummaryShow] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(summaryData);
    }, []);

    return (
        <div>
            <div className='summaryBox'>
                <div className='summaryHead'>
                    <h3>Summary</h3>
                    <div className='showButton' onClick={() => setIsSummaryShow(!isSummaryShow)}>{isSummaryShow ? 'Hide' : 'Show'}</div>
                </div>
                {isSummaryShow && data &&
                    <div className='summaryContent'>


                        <div classNameç="arrived-truck-details">
                            <h4>Arrived Truck Details</h4>
                            <div className="all-truck-details-box">
                                <p>Total Bags: {data.innerObject.allTruckWiseData[0].allTruckDetails[0]["Total Bags"]}</p>
                                <p>Gross WT: {data.innerObject.allTruckWiseData[0].allTruckDetails[0]["Gross WT"]}</p>
                            </div>
                        </div>


                        <div className="unloaded-truck-details">
                            <h4>Unloaded Truck Details</h4>
                            <div className="all-truck-details-box">
                                <p>Total Bags: {data.innerObject.allTruckWiseData[0].allUnloadTruckDetails[0]["Total Bags"]}</p>
                                <p>Unloaded Bags: {data.innerObject.allTruckWiseData[0].allUnloadTruckDetails[0]["Unloaded Bags"]}</p>
                                <p>Returned Bags: {data.innerObject.allTruckWiseData[0].allUnloadTruckDetails[0]["Returned Bags"]}</p>
                            </div>
                        </div>

                        <div className="completed-truck-details">
                            <h4>Completed Truck Details</h4>
                            <div className="all-truck-details-box">
                                <p>Total Bags: {data.innerObject.allTruckWiseData[0].allCompleteTruckDetails[0]["Total Bags"]}</p>
                                <p>Unloaded Bags: {data.innerObject.allTruckWiseData[0].allCompleteTruckDetails[0]["Unloaded Bags"]}</p>
                                <p>Returned Bags: {data.innerObject.allTruckWiseData[0].allCompleteTruckDetails[0]["Returned Bags"]}</p>
                            </div>
                            <div className="all-truck-details-box">
                                <p>Gross WT: {data.innerObject.allTruckWiseData[0].allCompleteTruckDetails[0]["Gross WT"]}</p>
                                <p>Tare WT: {data.innerObject.allTruckWiseData[0].allCompleteTruckDetails[0]["Tare WT"]}</p>
                                <p>Net WT: {data.innerObject.allTruckWiseData[0].allCompleteTruckDetails[0]["Net WT"]}</p>
                            </div>
                        </div>

                        <div className="rejected-trucks">
                            <h4>Rejected Trucks</h4>
                            <div className="all-truck-details-box">
                                <p>Rejected Trucks: {data.innerObject.allTruckWiseData[0].allRejectedTruck[0]["Rejected Trucks"]}</p>
                                <p>Rejected Bags: {data.innerObject.allTruckWiseData[0].allRejectedTruck[0]["Rejected Bags"]}</p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}