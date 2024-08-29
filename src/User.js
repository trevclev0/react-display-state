import React from "react";
import Job from "./Job";
import styles from './App.module.css';

function User ({ name, age, email, job }) {
    return (
        <div className={styles.User}>
            <h1>{name}</h1>
            <h2 style={{color: age > 40 ? "blue" : ""}}>{age > 40 ? <i>Over the Hill</i> : "Youngin'"}</h2>
            {age > 40 && <h3>Yessir</h3>}
            <h2>{email}</h2>
            <Job salary={job.salary} position={job.position} company={job.company} />
        </div>
    );
}

export default User
