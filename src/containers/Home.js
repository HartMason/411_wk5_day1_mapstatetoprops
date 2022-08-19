import { connect, Connect } from "react-redux";
import Home from "../components/Home";


const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }

}

export default connect(mapStateToProps)(Home)
