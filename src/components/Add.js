import { useState } from "react";

const Add = (props) => {
  const [brewery, setBrewery] = useState({ name: "" });

  const handleChange = (event) => {
    setBrewery({ ...brewery, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleCreate(brewery);
  };

  return (
    <>
    <div className='dropdown'>
        <button className='dropbtn' id="navItem">Add Brewery</button>
        <div className='dropdown-content'>
        <form onSubmit={handleSubmit}>
          <div id="formField" >
          <label id="line"   htmlFor="name">Name:</label>
          <input id="input"  type="text" name="name" onChange={handleChange} placeholder="Brewery's Name"/>
          </div>
          <div id="formField">
          <label id="line"  htmlFor="name">Type:</label>
          <input id="input" type="text" name="brewery_type" onChange={handleChange} placeholder="Brewery's Type"/>
          </div>
          <div id="formField">
          <label id="line" htmlFor="name">Address:</label>
          <input id="input" type="text" name="street" onChange={handleChange} placeholder="Brewery's Address"/>
          </div>
          <div id="formField">
          <label id="line" htmlFor="name">City:</label>
          <input id="input" type="text" name="city" onChange={handleChange} placeholder="Brewery's City"/>
          </div>
          <div id="formField">
          <label id="line" htmlFor="name">State:</label>
          <input id="input" type="text" name="state" onChange={handleChange} placeholder="Brewery's State"/>
          </div>
          <div id="formField">      
          <label id="line" htmlFor="name">Website:</label>
          <input id="input" type="text" name="website_url" onChange={handleChange} placeholder="Brewery's Website"/>
          </div>
          <div id="formField">      
          <label id="line" htmlFor="name">Longitude:</label>
          <input id="input" type="number" name="longitude" onChange={handleChange} placeholder="Brewery's longitude"/>
          </div>
          <div id="formField">      
          <label id="line" htmlFor="name">Latitude:</label>
          <input id="input" type="number" name="latitude" onChange={handleChange} placeholder="Brewery's latitde"/>
          </div>
          <input id="editBtn" type="submit" />
        </form>
        </div>
        </div>
    </>
  );
};

export default Add;
