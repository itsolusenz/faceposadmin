import React from "react";
import { Label} from "reactstrap"; 

const Packagetype = () => {
    return (
		
                 
                    <select className="custom-select" required="">
                        <option value="">--Select--</option>
                        <option value="1">Description</option>
                        <option value="2">Price</option>
                        <option value="3">Class Timing</option>
                        <option value="4">pax</option>
                        <option value="5">No. of pax left</option>
                        <option value="6">Form required</option>
                    
                    </select>
                   
       

);
}
export default Packagetype;