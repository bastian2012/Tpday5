import React from 'react';
import Pitit1 from './pitit1.js';
import Pitit2 from './pitit2.js';
import PropTypes from 'prop-types';
import styles from '../Style/paran.module.css'; // Import the external CSS module

const Paran = () => {

    let allProp1 = [
        { 'nom': 'ptit1' }
    ]
    let allProp2 = [
        { 'nom': 'ptit2' }
    ]


    return (
        <>
        
            <div className={styles.paragraph}>
                <h2>welcome on my personal web site</h2>
            <p>{allProp1.map(event => {
                return (<Pitit1 nom={event.nom} />)
            })}</p>

            <p>{allProp2.map(event => {
                return (<Pitit2 nom={event.nom} />)
            })}</p>
        </div>
        </>

    );
};

Pitit1.propTypes = {
    page: PropTypes.string,
};

Pitit1.defaultProps = { 'nom': 'pitit1' }

Pitit2.propTypes = {
    page: PropTypes.string,
};

Pitit2.defaultProps = {
    'nom': 'Pitit2'
}

export default Paran;