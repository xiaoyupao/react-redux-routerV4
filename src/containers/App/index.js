import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    Link,
    Router
} from 'react-router-dom';
import Sidebar from "../../components/Sidebar"
import './index.css';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // const { props } = this.props;
        // console.log('props',this.props )
        return (
            // <Router
            //     history={props.history}
            //     location={props.location}
            //     onChange={(location) => {
            //         // 3. Dispatch location changes
            //         props.dispatch({
            //             type: 'LOCATION_CHANGE',
            //             location
            //         })
            //     }}>
                <div className="app-component">
                    <Sidebar />
                    <div className="layout-main">
                        <div className="header-container">Hello, ant design!</div>
                        <div className="main-content">
                            {this.props.children}
                        </div>
                    </div>
                </div>

            // </Router>

        )
    }
}

// const mapStateToProps = ({ App }) => {
//     // const { total, lists } = goods;
//     // const { pageIndex } = queryString.parse(location.search);

//     // return {
//     //     total,
//     //     lists,
//     //     pageIndex: Number(pageIndex || 1)
//     // }
// }


// const mapDispatchToProps = dispatch => ({
//     // fetchList: () => dispatch(fetchList()),
//     // changePage: ({ current }) => {
//     //     const query = {
//     //         pageIndex: current
//     //     }
//     //     dispatch(updateQuery(query))
//     //     // dispatch(fetchList())
//     // }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(App)

export default App;