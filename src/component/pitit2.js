import React from 'react';
import '../Style/pitit2.css';

const Pitit2 = () => {
    return (
        <form className="formulaire">
            <h2 className="tete" style={{backgroundColor:'#02456a'}} >Contact Me</h2>
            <label htmlFor="name" className="label">
                Name:
            </label>
            <input
                type="text"
                id="name"
                className="champsaisi"
            />

            <label htmlFor="email" className="label">
                Email:
            </label>
            <input
                type="email"
                id="email"
               
                className="champsaisi"
            />

            <label htmlFor="message" className="label">
                Message:
            </label>
            <textarea
                id="message"
            
                className="champsaisi"
            ></textarea>

            <button style={{ marginLeft: '40%' }} type="submit" className="soumet">
                Submit
            </button>
        </form>
    );
};

export default Pitit2;
