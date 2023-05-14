import "./QuotesResults.css";
import orients from "../../assets/orient-logo.png";
import iconCircle from "../../assets/icon-circle-i.svg";
import salamaIcon from "../../assets/salama-logo.png";
import diagnosis from "../../assets/diagnosis.svg";
import watania from "../../assets/watania_takaful.png";
import bookmark from "../../assets/icon-book-mark-active.svg";
import pharmacy from "../../assets/pharmacy.svg";
import physician from "../../assets/physician-consultation.svg";
import physio from "../../assets/physiotherapy.svg";
import { Modal } from "../Modal";
import { useState } from "react";

export const QuotesResults = () => {
    const [modal, setModal] = useState(false);

    const handleChange = () => {
        setModal(!modal);
    };

    return (
        <div className="main-quotes-container">
            <div className="wrapper">
                <div className="container">
                    <div className="left">
                        <img
                            src={orients}
                            alt="insurere"
                            width={60}
                            height={60}
                            style={{ objectFit: "contain" }}
                        />
                    </div>
                    <div className="right">
                        <div className="top-container">
                            <div className="left-container">
                                <p className="mainHeading">I-Med</p>
                                <div
                                    style={{
                                        display: "flex",
                                        marginTop: "8px",
                                    }}
                                >
                                    Network
                                    <span className="image-icircle">
                                        <img
                                            src={iconCircle}
                                            alt="icon-circle"
                                        />
                                    </span>
                                    <div className="">
                                        <span class="network">
                                            Network - PCP/RN3
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="product-info">
                                <span className="product-info-title">
                                    Medical Cover (AED)
                                </span>
                                <span className="product-info-sub-title">
                                    150,000
                                </span>
                            </div>

                            <div className="right-container">
                                <div className="product-info">
                                    <span className="product-info-title">
                                        Pharmacy Limit
                                    </span>
                                    <span className="product-info-sub-title">
                                        Upto AED 1,500
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="middle-container">
                            <div className="card-copay-header">
                                <span>Copay : </span>
                                <span>
                                    <img src={iconCircle} alt="question-logo" />
                                </span>
                            </div>
                            <div className="middle-container-bottom">
                                <div className="left-container">
                                    <div className="card-copay-items">
                                        <img src={diagnosis} alt="logo-list" />
                                        <div class="card-copay-title">
                                            <span>Diagnosis:</span> Nil
                                        </div>
                                    </div>
                                    <div className="card-copay-items ">
                                        <img src={pharmacy} alt="logo-list" />
                                        <div className="card-copay-title">
                                            Pharmacy: 20%
                                        </div>
                                    </div>
                                </div>

                                <div className="product-info">
                                    <div className="card-copay-items ">
                                        <img src={physician} alt="logo-list" />
                                        <div className="card-copay-title">
                                            Physiotherapy: 30%
                                        </div>
                                    </div>
                                    <div className="card-copay-items ">
                                        <img src={physio} alt="logo-list" />
                                        <div class="card-copay-title">
                                            Physician Consultation : 20%
                                        </div>
                                    </div>
                                </div>
                                <div className="right-container">
                                    <button
                                        className="aed-button"
                                        onClick={handleChange}
                                    >
                                        AED 2,750 Yealy
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="compare-container">
                            <button style={{ color: "#0065ff" }}>
                                Plan Details
                            </button>

                            <label
                                htmlFor="add-compare"
                                className="custom-checkbox"
                            >
                                <input
                                    type="checkbox"
                                    class="add-compare"
                                    id="add-compare"
                                />
                                <span class="checkmark"></span>
                                Add to Compare
                            </label>
                            <img
                                src={bookmark}
                                alt="icon-book-mark-active"
                                width="23"
                                height="23"
                                style={{ marginRight: "7px" }}
                            />
                            <label>Shortlist</label>
                        </div>
                        <div className="bottom-feedback">
                            <div className="">
                                <span class="card-cd-list-items-inner">
                                    You need to provide your trade license copy
                                    if you wish to purchase this plan
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="left">
                        <img
                            src={salamaIcon}
                            alt="insurere"
                            width={60}
                            height={60}
                            style={{ objectFit: "contain" }}
                        />
                    </div>
                    <div class="right">
                        <div className="top-container">
                            <div className="left-container">
                                <p className="mainHeading">I-Med</p>
                                <div
                                    style={{
                                        display: "flex",
                                        marginTop: "8px",
                                    }}
                                >
                                    Network
                                    <span className="image-icircle">
                                        <img
                                            src={iconCircle}
                                            alt="icon-circle"
                                        />
                                    </span>
                                    <div className="">
                                        <span class="network">
                                            Network - PCP/RN3
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div class="product-info">
                                <span class="product-info-title">
                                    Medical Cover (AED)
                                </span>
                                <span class="product-info-sub-title">
                                    150,000
                                </span>
                            </div>

                            <div className="right-container">
                                <div class="product-info">
                                    <span class="product-info-title">
                                        Pharmacy Limit
                                    </span>
                                    <span class="product-info-sub-title">
                                        Upto AED 1,500
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="middle-container">
                            <div className="card-copay-header">
                                <span>Copay : </span>
                                <span>
                                    <img src={iconCircle} alt="question-logo" />
                                </span>
                            </div>
                            <div className="middle-container-bottom">
                                <div className="left-container">
                                    <div className="card-copay-items">
                                        <img src={diagnosis} alt="logo-list" />
                                        <div class="card-copay-title">
                                            <span>Diagnosis:</span> Nil
                                        </div>
                                    </div>
                                    <div className="card-copay-items ">
                                        <img src={pharmacy} alt="logo-list" />
                                        <div className="card-copay-title">
                                            Pharmacy: 20%
                                        </div>
                                    </div>
                                </div>

                                <div className="product-info">
                                    <div className="card-copay-items ">
                                        <img src={physician} alt="logo-list" />
                                        <div className="card-copay-title">
                                            Physiotherapy: 30%
                                        </div>
                                    </div>
                                    <div className="card-copay-items ">
                                        <img src={physio} alt="logo-list" />
                                        <div class="card-copay-title">
                                            Physician Consultation : 20%
                                        </div>
                                    </div>
                                </div>
                                <div className="right-container">
                                    <button
                                        className="aed-button"
                                        onClick={handleChange}
                                    >
                                        AED 2,750 Yealy
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="compare-container">
                            <button style={{ color: "#0065ff" }}>
                                Plan Details
                            </button>

                            <label
                                htmlFor="add-compare1"
                                className="custom-checkbox"
                            >
                                <input
                                    type="checkbox"
                                    class="add-compare"
                                    id="add-compare1"
                                />
                                <span class="checkmark"></span>
                                Add to Compare
                            </label>
                            <img
                                src={bookmark}
                                alt="icon-book-mark-active"
                                width="23"
                                height="23"
                                style={{ marginRight: "7px" }}
                            />
                            <label>Shortlist</label>
                        </div>
                        <div className="bottom-feedback">
                            <div className="">
                                <span class="card-cd-list-items-inner">
                                    You need to provide your trade license copy
                                    if you wish to purchase this plan
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="left">
                        <img
                            src={watania}
                            alt="insurere"
                            width={60}
                            height={60}
                            style={{ objectFit: "contain" }}
                        />
                    </div>
                    <div class="right">
                        <div className="top-container">
                            <div className="left-container">
                                <p className="mainHeading">I-Med</p>
                                <div
                                    style={{
                                        display: "flex",
                                        marginTop: "8px",
                                    }}
                                >
                                    Network
                                    <span className="image-icircle">
                                        <img
                                            src={iconCircle}
                                            alt="icon-circle"
                                        />
                                    </span>
                                    <div className="">
                                        <span class="network">
                                            Network - PCP/RN3
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div class="product-info">
                                <span class="product-info-title">
                                    Medical Cover (AED)
                                </span>
                                <span class="product-info-sub-title">
                                    150,000
                                </span>
                            </div>

                            <div className="right-container">
                                <div class="product-info">
                                    <span class="product-info-title">
                                        Pharmacy Limit
                                    </span>
                                    <span class="product-info-sub-title">
                                        Upto AED 1,500
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="middle-container">
                            <div className="card-copay-header">
                                <span>Copay : </span>
                                <span>
                                    <img src={iconCircle} alt="question-logo" />
                                </span>
                            </div>
                            <div className="middle-container-bottom">
                                <div className="left-container">
                                    <div className="card-copay-items">
                                        <img src={diagnosis} alt="logo-list" />
                                        <div class="card-copay-title">
                                            <span>Diagnosis:</span> Nil
                                        </div>
                                    </div>
                                    <div className="card-copay-items ">
                                        <img src={pharmacy} alt="logo-list" />
                                        <div className="card-copay-title">
                                            Pharmacy: 20%
                                        </div>
                                    </div>
                                </div>

                                <div className="product-info">
                                    <div className="card-copay-items ">
                                        <img src={physician} alt="logo-list" />
                                        <div className="card-copay-title">
                                            Physiotherapy: 30%
                                        </div>
                                    </div>
                                    <div className="card-copay-items ">
                                        <img src={physio} alt="logo-list" />
                                        <div class="card-copay-title">
                                            Physician Consultation : 20%
                                        </div>
                                    </div>
                                </div>
                                <div className="right-container">
                                    <button
                                        className="aed-button"
                                        onClick={handleChange}
                                    >
                                        AED 2,750 Yealy
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="compare-container">
                            <button style={{ color: "#0065ff" }}>
                                Plan Details
                            </button>

                            <label
                                htmlFor="add-compare"
                                className="custom-checkbox"
                            >
                                <input
                                    type="checkbox"
                                    class="add-compare"
                                    id="add-compare"
                                />
                                <span class="checkmark"></span>
                                Add to Compare
                            </label>
                            <img
                                src={bookmark}
                                alt="icon-book-mark-active"
                                width="23"
                                height="23"
                                style={{ marginRight: "7px" }}
                            />
                            <label>Shortlist</label>
                        </div>
                        <div className="bottom-feedback">
                            <div className="">
                                <span class="card-cd-list-items-inner">
                                    You need to provide your trade license copy
                                    if you wish to purchase this plan
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="left">
                        <img
                            src={orients}
                            alt="insurere"
                            width={60}
                            height={60}
                            style={{ objectFit: "contain" }}
                        />
                    </div>
                    <div class="right">
                        <div className="top-container">
                            <div className="left-container">
                                <p className="mainHeading">I-Med</p>
                                <div
                                    style={{
                                        display: "flex",
                                        marginTop: "8px",
                                    }}
                                >
                                    Network
                                    <span className="image-icircle">
                                        <img
                                            src={iconCircle}
                                            alt="icon-circle"
                                        />
                                    </span>
                                    <div className="">
                                        <span class="network">
                                            Network - PCP/RN3
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div class="product-info">
                                <span class="product-info-title">
                                    Medical Cover (AED)
                                </span>
                                <span class="product-info-sub-title">
                                    150,000
                                </span>
                            </div>

                            <div className="right-container">
                                <div class="product-info">
                                    <span class="product-info-title">
                                        Pharmacy Limit
                                    </span>
                                    <span class="product-info-sub-title">
                                        Upto AED 1,500
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="middle-container">
                            <div className="card-copay-header">
                                <span>Copay : </span>
                                <span>
                                    <img src={iconCircle} alt="question-logo" />
                                </span>
                            </div>
                            <div className="middle-container-bottom">
                                <div className="left-container">
                                    <div className="card-copay-items">
                                        <img src={diagnosis} alt="logo-list" />
                                        <div class="card-copay-title">
                                            <span>Diagnosis:</span> Nil
                                        </div>
                                    </div>
                                    <div className="card-copay-items ">
                                        <img src={pharmacy} alt="logo-list" />
                                        <div className="card-copay-title">
                                            Pharmacy: 20%
                                        </div>
                                    </div>
                                </div>

                                <div className="product-info">
                                    <div className="card-copay-items ">
                                        <img src={physician} alt="logo-list" />
                                        <div className="card-copay-title">
                                            Physiotherapy: 30%
                                        </div>
                                    </div>
                                    <div className="card-copay-items ">
                                        <img src={physio} alt="logo-list" />
                                        <div class="card-copay-title">
                                            Physician Consultation : 20%
                                        </div>
                                    </div>
                                </div>
                                <div className="right-container">
                                    <button
                                        className="aed-button"
                                        onClick={handleChange}
                                    >
                                        AED 2,750 Yealy
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="compare-container">
                            <button style={{ color: "#0065ff" }}>
                                Plan Details
                            </button>

                            <label
                                htmlFor="add-compare"
                                className="custom-checkbox"
                            >
                                <input
                                    type="checkbox"
                                    class="add-compare"
                                    id="add-compare"
                                />
                                <span class="checkmark"></span>
                                Add to Compare
                            </label>
                            <img
                                src={bookmark}
                                alt="icon-book-mark-active"
                                width="23"
                                height="23"
                                style={{ marginRight: "7px" }}
                            />
                            <label>Shortlist</label>
                        </div>
                        <div className="bottom-feedback">
                            <div className="">
                                <span class="card-cd-list-items-inner">
                                    You need to provide your trade license copy
                                    if you wish to purchase this plan
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="left">
                        <img
                            src={orients}
                            alt="insurere"
                            width={60}
                            height={60}
                            style={{ objectFit: "contain" }}
                        />
                    </div>
                    <div class="right">
                        <div className="top-container">
                            <div className="left-container">
                                <p className="mainHeading">I-Med</p>
                                <div
                                    style={{
                                        display: "flex",
                                        marginTop: "8px",
                                    }}
                                >
                                    Network
                                    <span className="image-icircle">
                                        <img
                                            src={iconCircle}
                                            alt="icon-circle"
                                        />
                                    </span>
                                    <div className="">
                                        <span class="network">
                                            Network - PCP/RN3
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div class="product-info">
                                <span class="product-info-title">
                                    Medical Cover (AED)
                                </span>
                                <span class="product-info-sub-title">
                                    150,000
                                </span>
                            </div>

                            <div className="right-container">
                                <div class="product-info">
                                    <span class="product-info-title">
                                        Pharmacy Limit
                                    </span>
                                    <span class="product-info-sub-title">
                                        Upto AED 1,500
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="middle-container">
                            <div className="card-copay-header">
                                <span>Copay : </span>
                                <span>
                                    <img src={iconCircle} alt="question-logo" />
                                </span>
                            </div>
                            <div className="middle-container-bottom">
                                <div className="left-container">
                                    <div className="card-copay-items">
                                        <img src={diagnosis} alt="logo-list" />
                                        <div class="card-copay-title">
                                            <span>Diagnosis:</span> Nil
                                        </div>
                                    </div>
                                    <div className="card-copay-items ">
                                        <img src={pharmacy} alt="logo-list" />
                                        <div className="card-copay-title">
                                            Pharmacy: 20%
                                        </div>
                                    </div>
                                </div>

                                <div className="product-info">
                                    <div className="card-copay-items ">
                                        <img src={physician} alt="logo-list" />
                                        <div className="card-copay-title">
                                            Physiotherapy: 30%
                                        </div>
                                    </div>
                                    <div className="card-copay-items ">
                                        <img src={physio} alt="logo-list" />
                                        <div class="card-copay-title">
                                            Physician Consultation : 20%
                                        </div>
                                    </div>
                                </div>
                                <div className="right-container">
                                    <button
                                        className="aed-button"
                                        onClick={handleChange}
                                    >
                                        AED 2,750 Yealy
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="compare-container">
                            <button style={{ color: "#0065ff" }}>
                                Plan Details
                            </button>

                            <label
                                htmlFor="add-compare"
                                className="custom-checkbox"
                            >
                                <input
                                    type="checkbox"
                                    class="add-compare"
                                    id="add-compare"
                                />
                                <span class="checkmark"></span>
                                Add to Compare
                            </label>
                            <img
                                src={bookmark}
                                alt="icon-book-mark-active"
                                width="23"
                                height="23"
                                style={{ marginRight: "7px" }}
                            />
                            <label>Shortlist</label>
                        </div>
                        <div className="bottom-feedback">
                            <div className="">
                                <span class="card-cd-list-items-inner">
                                    You need to provide your trade license copy
                                    if you wish to purchase this plan
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="last-container">
                    <div className="left-div"></div>
                    <div className="right-div">
                        <p></p>
                    </div>
                </div>
                <div className="last-container">
                    <div className="left-div"></div>
                    <div className="right-div">
                        <p></p>
                    </div>
                </div>
            </div>
            {modal && (
                <Modal handleChange={handleChange}>
                    <h1>Coming Soon</h1>
                </Modal>
            )}
        </div>
    );
};
