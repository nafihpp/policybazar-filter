import "./Header.css";
import Logo from "../../assets/logo.svg";
import SwithJourney from "../../assets/icon-desktop-mobile.svg";

export const Header = () => {
    return (
        <header className="header-container">
            <div className="wrapper">
                <a className="logo" href="https://wecover.online">
                    <img src={Logo} alt="logo" />
                </a>
                <div className="right-container">
                    <div className="switch-journey">
                        <img
                            src={SwithJourney}
                            alt="Switch-journey"
                            width={40}
                            height={40}
                            style={{ objectFit: "contain", marginRight: "7px" }}
                        />
                        <span>Switch Journey</span>
                    </div>
                    <div className="phone-container">
                        <div className="phone-image-container">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                            >
                                <g>
                                    <g>
                                        <g transform="translate(-.033 .146)">
                                            <circle
                                                cx="10"
                                                cy="10"
                                                r="10"
                                                fill="#46bcff"
                                                transform="translate(.033 -.146)"
                                            ></circle>
                                            <path
                                                fill="#fff"
                                                fillRule="evenodd"
                                                d="M15.3 13.357l-1.415-1.118a.7.7 0 0 0-.955.088c-.252.3-.427.482-.472.537-.427.427-1.335-.187-2.281-1.13S8.608 9.9 9.035 9.454c.055-.055.242-.219.537-.472a.688.688 0 0 0 .088-.955L8.558 6.61a.711.711 0 0 0-.823-.21 3.765 3.765 0 0 0-.965.626c-1.02 1.031-.132 3.773 2.106 6.008s4.98 3.126 6.008 2.094a3.494 3.494 0 0 0 .626-.965.679.679 0 0 0-.21-.808z"
                                                transform="translate(-.821 -.821)"
                                            ></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <a href="tel:04-247-2904" className="phone-button">
                            04 247 2904
                        </a>
                    </div>
                    <div className="whatsapp-container">
                        <div className="whatsapp-image-container">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="19.528"
                                height="19.527"
                                viewBox="0 0 19.528 19.527"
                            >
                                <g>
                                    <g fillRule="evenodd">
                                        <path
                                            fill="#25d366"
                                            d="M9.76 0a9.759 9.759 0 0 0-8.037 15.3.482.482 0 0 1 .061.42l-.992 3.314 3.249-1.125a.482.482 0 0 1 .42.053A9.763 9.763 0 1 0 9.76 0z"
                                        ></path>
                                        <path
                                            fill="#fff"
                                            d="M6.379 4.887l1.778 2.935-.739.731a.482.482 0 0 0-.076.587 9.622 9.622 0 0 0 4.34 4.3.482.482 0 0 0 .542-.1l.783-.778 2.868 1.786a2.71 2.71 0 0 1-1.206 1.387 2.925 2.925 0 0 1-1.982.183 10.673 10.673 0 0 1-4.88-3.054A10.881 10.881 0 0 1 4.839 7.93 2.866 2.866 0 0 1 5.037 6a2.471 2.471 0 0 1 1.342-1.105z"
                                            transform="translate(-.615 -.632)"
                                        ></path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <a href="https://google.com">04 247 2904</a>
                    </div>
                </div>
            </div>
        </header>
    );
};
