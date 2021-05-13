import { FavoriteBorderOutlined } from '@material-ui/icons';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import React from 'react';
import CountUp from 'react-countup';

const Counter = () => {
    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-md-3 col-6 d-flex justify-content-center mb-md-0 mb-5">
                    <div className="d-flex flex-column text-center round__counter border-info rounded-circle">
                        <span className="text-info "><FavoriteBorderOutlined/></span>
                        <span className="text-white coustom__text" style={{fontSize:"1.3rem", fontWeight:"bold", fontFamily: "'Libre Baskerville', serif"}}>
                        <CountUp
                            start={0}
                            end={750}
                            duration={3.75}
                            /> 
                         </span>
                        <span className="text-white-50 coustom__text">Likes everyday</span>
                    </div>
                </div>
                <div className="col-md-3 col-6 d-flex justify-content-center mb-md-0 mb-5">
                    <div className="d-flex flex-column text-center round__counter border-info rounded-circle">
                        <span className="text-info"><AccountBalanceWalletOutlinedIcon/></span>
                        <span className="text-white coustom__text" style={{fontSize:"1.3rem", fontWeight:"bold", fontFamily: "'Libre Baskerville', serif"}}>
                        <CountUp
                            start={0}
                            end={450}
                            duration={3.75}
                            /> 
                         </span>
                        <span className="text-white-50 coustom__text">Online Events</span>
                    </div>
                </div>
                <div className="col-md-3 col-6 d-flex justify-content-center">
                    <div className="d-flex flex-column text-center round__counter border-info rounded-circle">
                        <span className="text-info"><AccountBalanceWalletOutlinedIcon/></span>
                        <span className="text-white coustom__text" style={{fontSize:"1.3rem", fontWeight:"bold", fontFamily: "'Libre Baskerville', serif"}}>
                        <CountUp
                            start={0}
                            end={650}
                            duration={3.75}
                            /> 
                         </span>
                        <span className="text-white-50 coustom__text">Label</span>
                    </div>
                </div>
                <div className="col-md-3 col-6 d-flex justify-content-center">
                    <div className="d-flex flex-column text-center round__counter border-info rounded-circle">
                        <span className="text-info"><AccountBalanceWalletOutlinedIcon/></span>
                        <span className="text-white coustom__text" style={{fontSize:"1.3rem", fontWeight:"bold", fontFamily: "'Libre Baskerville', serif"}}>
                        <CountUp
                            start={0}
                            end={550}
                            duration={3.75}
                            /> 
                         </span>
                        <span className="text-white-50 coustom__text">Label</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;