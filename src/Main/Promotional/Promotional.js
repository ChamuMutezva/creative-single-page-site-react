import React from 'react'
import './Promotional.css'

const Promotional = () => {
    return (
        <div className="promotional">
            <div className="promotional__section">
                <h3 className="promotional__heading">Our approach for creating a winning brand</h3>
                <div className="promotional__details">
                    <div className="promotional__all promotional__one">
                        <h4>Brand strategy</h4>
                        <p>
                            Brand strategy is critical for long-term success.
                            Outshining competitors and capturing
                            the target audience are key.
                        </p>
                    </div>

                    <div className="promotional__all promotional__two">
                        <h4>Brand design</h4>
                        <p>
                            Keeping the brand design unique and meaningful helps in
                            communicating the brand’s timeless
                            value effectively.
                        </p>
                    </div>

                    <div className="promotional__all promotional__three">
                        <h4> Web design</h4>
                        <p>
                            A beautifully crafted website is the best tool for brand awareness,
                            and ultimately results
                            in increased revenues.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Promotional