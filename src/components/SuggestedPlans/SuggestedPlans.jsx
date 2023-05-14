import React from "react";
import "./SuggestedPlans.css";
import moneyPlans from "../../assets/money-plans.svg";
import basicPlans from "../../assets/Basic-plans.svg";
import logoPb from "../../assets/logo-pb.png";
import lowestPrice from "../../assets/lowest-price.svg";
import expertAdvice from "../../assets/expert-advice.svg";
import claimAssistance from "../../assets/claims-assistance.svg";
import easyRefund from "../../assets/easy-refunds.svg";
import excitingRewards from "../../assets/exciting-rewards.svg";
export const SuggestedPlans = () => {
    return (
        <div className="main-container-suggested">
            <div className="card">
                <span className="card-title">Quickly find</span>
                <ul className="card-list-parent">
                    <li className="card-item">
                        <img
                            src={moneyPlans}
                            alt="money-plans"
                            style={{ marginRight: "6px" }}
                        />
                        <span className="card-span">
                            <a href="#">Value for money plans</a>
                        </span>
                    </li>
                    <li className="card-item">
                        <img
                            src={basicPlans}
                            alt="visa-plans"
                            style={{ marginRight: "6px" }}
                        />
                        <span className="card-span">
                            <a href="#">Basic Plans for visa</a>
                        </span>
                    </li>
                </ul>
            </div>
            <div className="card advantage-container">
                <div className="advantage-image">
                    <img
                        src={logoPb}
                        alt="pb-logo"
                        width={40}
                        height={40}
                        style={{ marginRight: "20px" }}
                    />
                    <span className="advantage-title">Advantage</span>
                </div>
                <div>
                    <div className="lowest-price">
                        <img
                            src={lowestPrice}
                            alt="lowest-price"
                            style={{ marginRight: "10px" }}
                        />
                        <span class="advantage-span">
                            Lowest Price Guaranteed
                        </span>
                    </div>

                    <div className="expert-advice">
                        <img
                            src={expertAdvice}
                            alt="expert-advice"
                            style={{ marginRight: "10px" }}
                        />
                        <span class="advantage-span">Expert Advice</span>
                    </div>

                    <div className="claims-assistance">
                        <img
                            src={claimAssistance}
                            alt="claimAssistance"
                            style={{ marginRight: "10px" }}
                        />
                        <span class="advantage-span">Claims Assistance</span>
                    </div>

                    <div className="easy-refunds">
                        <img
                            src={easyRefund}
                            alt="easyRefund"
                            style={{ marginRight: "10px" }}
                        />
                        <span class="advantage-span">Easy Refunds</span>
                    </div>

                    <div className="exciting-rewards">
                        <img
                            src={excitingRewards}
                            alt="exciting-rewards"
                            style={{ marginRight: "10px" }}
                        />
                        <span className="advantage-span">Exciting Rewards</span>
                    </div>
                </div>
                <button type="button" className="button-know-more">
                    Know more
                </button>
            </div>
        </div>
    );
};
