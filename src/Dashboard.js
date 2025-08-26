import React from 'react';
import { FaRegCircleDot, FaRegClock } from "react-icons/fa6";
import { MdOutlineVerifiedUser, MdVerified } from "react-icons/md";
import GaugeChart from 'react-gauge-chart';
import './Dashboard.css';
import ImpactPieChart from './ImpactPieChart';
import CompositionPieChart from './CompositionPieChart';

function Dashboard() {
    return (
        <div className="dashboard-container">
            <div className="main-content">
                <div className="card">
                    <div className="card-header">
                        <h1>Digital Product Passport for a Lithium-Ion Battery (LIB)</h1>
                    </div>
                    <div className="card-header-row">
                        <p>DPP-BTR-001-A</p>
                        <div className="verified-badge">
                            <MdVerified />
                            <p>Blockchain Verified</p>
                        </div>
                    </div>
                    <div className="product-image-container">
                        <img src="https://tracecircle.com/wp-content/uploads/2025/08/batteryjpeg.jpeg.jpg" alt="Steel beam" />
                    </div>
                    <p className="card-description">
                        This Digital Product Passport(DPP) provides comprehensive, verifiable information about the battery's entire lifecycle, ensuring transparency and trust.
                    </p>
                </div>
                
                <div className="card">
                    <div className="card-header">
                        <h2>Battery Performance Index</h2>
                    </div>
                    <div className="gauge-container">
                        <GaugeChart 
                            id="steel-gauge" 
                            nrOfLevels={10} 
                            percent={0.82} 
                            textColor="#000" 
                            arcPadding={0.02} 
                            colors={["#3C12B2", "#90ee90", "#CAFD34"]} 
                            formatTextValue={() => "88%"}
                        />
                        <h2>Battery Quality Score</h2>
                        <p className="center-text">Calculated using AI on parameters such as energy density, power output, cycle life, charge/discharge efficiency, internal resistance, and thermal stability</p>
                    </div>
                </div>
                
                <div className="card">
                    <div className="card-header">
                        <h2>Lifecycle Events</h2>
                    </div>
                    {[
                        { date: "11-12-2024", time: "09:30 AM UTC", text: "Cell Manufacturing Completed: Cells assembled, tested, and quality checked.", verified: true },
                        { date: "11-12-2024", time: "11:45 AM UTC", text: "Battery Pack Assembly: Individual cells integrated into the battery pack.", verified: true },
                        { date: "11-12-2024", time: "03:00 PM UTC", text: "Shipped to OEM: Dispatched to Original Equipment Manufacturer for installation.", verified: true },
                        { date: "12-12-2024", time: "08:00 AM UTC", text: "Installed in EV: Battery installed in electric vehicle, system integration complete.", verified: true },
                        { date: "17-12-2024", time: "09:30 AM UTC", text: "Initial Charging & Calibration: Battery charged and software calibration performed.", verified: true },
                        { date: "21-12-2024", time: "07:00 AM UTC", text: "End of Primary Life: Estimated end of optimal performance (around 10 years).", verified: false },
                        { date: "17-12-2064", time: "12:00 PM UTC", text: "Recycling & Material Recovery: Components processed for reuse in new cells.", verified: false }
                    ].map((event, index) => (
                        <div key={index} className="event-item">
                            <div className="event-meta">
                                <FaRegCircleDot className={event.verified ? "verified" : "pending"} />
                                <span>{event.date}</span>
                                <FaRegClock />
                                <span>{event.time}</span>
                                {event.verified && <MdOutlineVerifiedUser className="verified-icon" />}
                            </div>
                            <p><strong>{event.text}</strong></p>
                        </div>
                    ))}
                </div>
                
                <div className="card">
                    <div className="card-header">
                        <h2>Environmental Impact</h2>
                    </div>
                    <ImpactPieChart />
                </div>
                
                
            </div>
            
            <div className="sidebar">
                <div className="card">
                    <div className="card-header1">
                        <h2>Product Overview</h2>
                    </div>
                    <div className="two-column-grid">
                        <div>
                            <p>Product Name</p>
                            <p className="bold-text">Lithium-Ion Battery (LIB) - High Energy Density</p>
                            <p>Product ID</p>
                            <p className="bold-text">BAT−7890−654321</p>
                            <p>Date of Manufacture</p>
                            <p className="bold-text">25−06−2024</p>
                            <p>Product Type</p>
                            <p className="bold-text">Energy storage component for electric vehicles (EVs)</p>
                            <p>Capacity</p>
                            <p className="bold-text">80 kWh</p>
                        </div>
                        <div>
                            <p>Voltage</p>
                            <p className="bold-text">400V</p>
                            <p>Place of Manufacture</p>
                            <p className="bold-text">Japan</p>
                            <p>Manufacturer</p>
                            <p className="bold-text">Panasonic Energy</p>
                        </div>
                    </div>
                </div>
                
                <div className="card">
                    <div className="card-header">
                        <h2>Composition (Chemical Analysis)</h2>
                    </div>
                    <CompositionPieChart></CompositionPieChart>
                </div>
                
                <div className="card">
                    <div className="card-header1">
                        <h2>Reusability & Recyclability</h2>
                    </div>
                    <div className="two-column-grid">
                        <div>
                            <p>Recyclability Rate</p>
                            <p className="bold-text">95% (Potentially Recyclable)</p>
                            <p>Recycled Content</p>
                            <p className="bold-text">20% Pre-Consumer Scrap</p>
                            <p>Circular Economy Metric</p>
                            <p className="bold-text">8.5/10</p>
                        </div>
                        <div>
                            <p>Recycled Content</p>
                            <p className="bold-text">75% Post-Consumer Scrap</p>
                            <p>End-of-Life Plan</p>
                            <p className="bold-text">Facilitated by certified recycling partners</p>
                        </div>
                    </div>
                </div>
                
                
                
                
            </div>
        </div>
    );
}

export default Dashboard;