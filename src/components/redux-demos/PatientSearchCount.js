const PatientSearchCount = (props) => {

    return (
        <div >
            <br />

            <center>
                <h1>
                Count Of Patients: {props.patients && props.patients.length}
                </h1>
            </center>


            <br /><br />

        </div>
    )
}

export default PatientSearchCount;

