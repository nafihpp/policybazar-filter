import "./QuickFilter.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import { Fragment, useEffect, useRef, useState } from "react";
import iconSearch from "../../assets/Icon-search.svg";
import iconFilter from "../../assets/Icon-filter.png";
import editIcon from "../../assets/edit-profile.svg";
import { Modal } from "../Modal";

export const QuickFilter = () => {
    const [modal, setModal] = useState(false);
    const [search, setSearch] = useState("");
    const [data, setData] = useState([
        {
            id: 1,
            title: "Arab Insurance co",
        },
        {
            id: 2,
            title: "True Doc Insurance",
        },
        {
            id: 3,
            title: "get it now go back to the insurance",
        },
    ]);
    const handleChange = () => {
        setModal(!modal);
    };
    const swiperRef = useRef(null);
    const searchRef = useRef();

    const goNext = () => {
        if (swiperRef.current !== null) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiperRef.current !== null) {
            swiperRef.current.swiper.slidePrev();
        }
    };
    const handleInput = (e) => {
        setSearch(e.target.value);
    };
    useEffect(() => {
        if (search) {
            let datas = data.filter((sear) =>
                sear.title.toLowerCase().includes(search.toLowerCase())
            );
            console.log(datas ? datas : "nodata", "==searchData");
        }
    }, [search]);
    return (
        <Fragment>
            <div className="main-container-filter">
                <div className="wrapper">
                    <div className="swiper-main-container">
                        <span className="heading">Quick Filter</span>
                        <div className="swiper-navigation-prev">
                            <button className="swiper-prev" onClick={goPrev}>
                                <svg
                                    stroke="currentColor"
                                    fill="#0065ff"
                                    strokeWidth="0"
                                    viewBox="0 0 24 24"
                                    width="15"
                                    height="15"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="none"
                                        d="M0 0h24v24H0V0z"
                                    ></path>
                                    <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
                                </svg>
                            </button>
                        </div>
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={5}
                            ref={swiperRef}
                        >
                            <SwiperSlide>
                                <div className="inputContainer">
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        class="input-search"
                                        ref={searchRef}
                                        onChange={handleInput}
                                    />
                                    <div className="search-image-container">
                                        <img
                                            src={iconSearch}
                                            alt="search-icon"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div
                                    class="search-dropdown"
                                    onClick={handleChange}
                                >
                                    <span class="text-wid">Sort</span>
                                    <span class="display-checkbox">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            stroke-width="0"
                                            viewBox="0 0 24 24"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g>
                                                <path
                                                    fill="none"
                                                    d="M0 0h24v24H0z"
                                                ></path>
                                                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div
                                    class="search-dropdown"
                                    onClick={handleChange}
                                >
                                    <span class="text-wid">Network (TPA)</span>
                                    <span class="display-checkbox">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            stroke-width="0"
                                            viewBox="0 0 24 24"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g>
                                                <path
                                                    fill="none"
                                                    d="M0 0h24v24H0z"
                                                ></path>
                                                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div
                                    class="search-dropdown"
                                    onClick={handleChange}
                                >
                                    <span class="text-wid">
                                        Network Hospital
                                    </span>
                                    <span class="display-checkbox">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            stroke-width="0"
                                            viewBox="0 0 24 24"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g>
                                                <path
                                                    fill="none"
                                                    d="M0 0h24v24H0z"
                                                ></path>
                                                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div
                                    class="search-dropdown"
                                    onClick={handleChange}
                                >
                                    <span class="text-wid">Co Payment</span>
                                    <span class="display-checkbox">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            stroke-width="0"
                                            viewBox="0 0 24 24"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g>
                                                <path
                                                    fill="none"
                                                    d="M0 0h24v24H0z"
                                                ></path>
                                                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div
                                    class="search-dropdown"
                                    onClick={handleChange}
                                >
                                    <span class="text-wid">Medical Cover</span>
                                    <span class="display-checkbox">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            stroke-width="0"
                                            viewBox="0 0 24 24"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g>
                                                <path
                                                    fill="none"
                                                    d="M0 0h24v24H0z"
                                                ></path>
                                                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="search-dropdown">
                                    <span class="text-wid">Insurers</span>
                                    <span class="display-checkbox">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            stroke-width="0"
                                            viewBox="0 0 24 24"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g>
                                                <path
                                                    fill="none"
                                                    d="M0 0h24v24H0z"
                                                ></path>
                                                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="search-dropdown">
                                    <span className="text-wid">Plan Types</span>
                                    <span className="display-checkbox">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            stroke-width="0"
                                            viewBox="0 0 24 24"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g>
                                                <path
                                                    fill="none"
                                                    d="M0 0h24v24H0z"
                                                ></path>
                                                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div className="swiper-navigation-next">
                            <button className="swiper-next" onClick={goNext}>
                                <svg
                                    stroke="currentColor"
                                    fill="#0065ff"
                                    strokeWidth="0"
                                    viewBox="0 0 24 24"
                                    width="15"
                                    height="15"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="none"
                                        d="M0 0h24v24H0V0z"
                                    ></path>
                                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="filter-last-container">
                            <img
                                src={iconFilter}
                                alt="filter-icon"
                                style={{ marginRight: "4px" }}
                            />
                            <span>All filters</span>
                            <div className="count-filter">2</div>
                        </div>
                    </div>
                    <div className="bottom-text">
                        <div className="iconFilter">
                            <img src={editIcon} alt="edit-icon" />
                        </div>
                        <span>Edit your Details</span>
                    </div>
                </div>
            </div>
            {modal && (
                <Modal handleChange={handleChange}>
                    <h1>Coming Soon</h1>
                </Modal>
            )}
        </Fragment>
    );
};
