import {connect} from 'react-redux';
import PatientSearchCount from './PatientSearchCount';

const mapStateToProps = (store)=>
{
    return{
        patients:store.PSR.patients,
        searchedPatients:store.PSR.searchedPatients
    }
}


export default connect(mapStateToProps,null) (PatientSearchCount);

