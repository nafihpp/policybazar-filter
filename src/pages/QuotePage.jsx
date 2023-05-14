import React, { Fragment } from "react";
import { Header } from "../components/Header";
import { QuickFilter } from "../components/QuickFilter";
import { QuotesResults } from "../components/QuotesResults";
import "./QuotePage.css";
import { SuggestedPlans } from "../components/SuggestedPlans";
import { Modal } from "../components/Modal";

const QuotePage = () => {
    return (
        <Fragment>
            <div className="fixed-header">
                <Header />
                <QuickFilter />
            </div>
            <div className="spotlight">
                <QuotesResults />
                <SuggestedPlans />
            </div>
        </Fragment>
    );
};

export default QuotePage;
