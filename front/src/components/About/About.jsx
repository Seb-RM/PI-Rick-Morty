import styles from './About.module.css'

import "boxicons";

const About =()=>{
    return (
        <div>
            <div className={styles.contenedor}>
            <h2>Esta Web App fue desarrollada por:</h2>
            <div className={styles.titulo}>
                <h1>Seb-RM</h1>
            </div>
            <div className={styles.links}>
                <h3>Links to:</h3>
                <span className={styles.icons}>
                <box-icon
                    type="logo"
                    name="github"
                    animation="tada-hover"
                    color="#67cfdd"
                    size="sm"></box-icon>
                <box-icon
                    type="logo"
                    name="linkedin-square"
                    animation="tada-hover"
                    color="#67cfdd"
                    size="sm"></box-icon>
                <box-icon
                    type="logo"
                    name="gmail"
                    animation="tada-hover"
                    color="#67cfdd"
                    size="sm"></box-icon>
                <box-icon
                    name="twitter"
                    type="logo"
                    animation="tada-hover"
                    color="#67cfdd"
                    size="sm"></box-icon>
                </span>
            </div>
            </div>
        </div>
    );
};

export default About;