"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterHashLink = require("react-router-hash-link");

var _reactBootstrap = require("react-bootstrap");

var _reactResponsive = require("react-responsive");

var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

var _autoqe_txt_w = require("../../img/logo/autoqe_txt_w.svg");

var _autoqe_txt_w2 = _interopRequireDefault(_autoqe_txt_w);

var _job = require("../../img/icons/material/job.svg");

var _job2 = _interopRequireDefault(_job);

var _design = require("../../img/icons/material/design.svg");

var _design2 = _interopRequireDefault(_design);

var _press = require("../../img/icons/material/press.svg");

var _press2 = _interopRequireDefault(_press);

var _world = require("../../img/icons/material/world.svg");

var _world2 = _interopRequireDefault(_world);

var _code = require("../../img/icons/material/code.svg");

var _code2 = _interopRequireDefault(_code);

var _howWorks = require("../../img/icons/material/howWorks.svg");

var _howWorks2 = _interopRequireDefault(_howWorks);

var _share = require("../../img/icons/material/share.svg");

var _share2 = _interopRequireDefault(_share);

var _quest = require("../../img/icons/material/quest.svg");

var _quest2 = _interopRequireDefault(_quest);

var _leaf = require("../../img/icons/material/leaf.svg");

var _leaf2 = _interopRequireDefault(_leaf);

var _team = require("../../img/icons/material/team.svg");

var _team2 = _interopRequireDefault(_team);

var _disc = require("../../img/icons/material/disc2.svg");

var _disc2 = _interopRequireDefault(_disc);

var _contact = require("../../img/icons/material/contact2.svg");

var _contact2 = _interopRequireDefault(_contact);

require("./footer.css");

var _carp = require("../../img/icons/services/carp.svg");

var _carp2 = _interopRequireDefault(_carp);

var _rent = require("../../img/icons/services/rent.svg");

var _rent2 = _interopRequireDefault(_rent);

var _park = require("../../img/icons/services/park.svg");

var _park2 = _interopRequireDefault(_park);

var _el = require("../../img/icons/services/el.svg");

var _el2 = _interopRequireDefault(_el);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//Icons


// Default (desktop, tablet) and mobile setup
var Huge = function Huge(_ref) {
    var children = _ref.children;
    return _react2.default.createElement(_reactResponsive2.default, { minWidth: 1218, children: children });
};
var NotHuge = function NotHuge(_ref2) {
    var children = _ref2.children;
    return _react2.default.createElement(_reactResponsive2.default, { maxWidth: 1218, children: children });
};

var Footer = function (_Component) {
    _inherits(Footer, _Component);

    function Footer() {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
    }

    _createClass(Footer, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "footer",
                { className: "footer", id: "footer" },
                _react2.default.createElement(
                    "section",
                    { className: "section section-footer" },
                    _react2.default.createElement(
                        _reactBootstrap.Row,
                        null,
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { xs: 4, md: 3 },
                            " ",
                            _react2.default.createElement(_reactBootstrap.Image, { responsive: true, src: _autoqe_txt_w2.default })
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { xs: 8, md: 9 },
                            _react2.default.createElement(
                                "h4",
                                null,
                                " Sobre nosotros"
                            ),
                            _react2.default.createElement(
                                "p",
                                null,
                                "Autoqe es una soluci\xF3n de transporte dentro de la econom\xEDa colaborativa. Te permite compartir trayectos, alquilar autos y cocheras entre particulares a tu alrededor. "
                            ),
                            _react2.default.createElement(
                                Huge,
                                null,
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    " Es m\xE1s barato, facil, y r\xE1pido ya que elimina los intermediarios y permite poner en contacto a los particulares. Adem\xE1s permite reducir el tr\xE1fico de veh\xEDculos en las grandes ciudades, ayudando al medio ambiente y reducir as\xED el impacto nocivo en la capa de ozono."
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Row,
                        null,
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { xs: 5, md: 3 },
                            _react2.default.createElement(
                                "ul",
                                null,
                                _react2.default.createElement(
                                    "h4",
                                    null,
                                    "Servicios"
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement("img", { alt: "", className: "footer-icon", src: _carp2.default }),
                                    _react2.default.createElement(
                                        _reactRouterHashLink.HashLink,
                                        { to: "/trips" },
                                        " Carpooling"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement("img", { alt: "", className: "footer-icon", src: _rent2.default }),
                                    _react2.default.createElement(
                                        _reactRouterHashLink.HashLink,
                                        { to: "/carrent" },
                                        " Alquiler de Autos"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement("img", { alt: "", className: "footer-icon", src: _park2.default }),
                                    _react2.default.createElement(
                                        _reactRouterHashLink.HashLink,
                                        { to: "/parkrent" },
                                        " Alquiler de Cocheras"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement("img", { alt: "", className: "footer-icon", src: _el2.default }),
                                    _react2.default.createElement(
                                        _reactRouterHashLink.HashLink,
                                        { to: "/electric" },
                                        " Autos El\xE9ctricos "
                                    ),
                                    _react2.default.createElement(
                                        _reactBootstrap.Label,
                                        { bsStyle: "warning" },
                                        "Pr\xF3x."
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { xs: 5, md: 3 },
                            _react2.default.createElement(
                                "ul",
                                null,
                                _react2.default.createElement(
                                    "h4",
                                    null,
                                    "Aprend\xE9 mas"
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement("img", { alt: "", className: "footer-icon", src: _howWorks2.default }),
                                    _react2.default.createElement(
                                        _reactRouterHashLink.HashLink,
                                        { to: "/howWorks" },
                                        " \xBFC\xF3mo funciona?"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement("img", { alt: "", className: "footer-icon", src: _quest2.default }),
                                    _react2.default.createElement(
                                        _reactRouterHashLink.HashLink,
                                        { to: "/faq" },
                                        " Preguntas frecuentes"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement("img", { alt: "", className: "footer-icon", src: _share2.default }),
                                    _react2.default.createElement(
                                        _reactRouterHashLink.HashLink,
                                        { to: "/collaborative" },
                                        " Econom\xEDa Colaborativa"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement("img", { alt: "", className: "footer-icon", src: _leaf2.default }),
                                    _react2.default.createElement(
                                        _reactRouterHashLink.HashLink,
                                        { to: "/green" },
                                        " Huella ecol\xF3gica"
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { xs: 5, md: 3 },
                            _react2.default.createElement(
                                "ul",
                                null,
                                _react2.default.createElement(
                                    "h4",
                                    null,
                                    " Autoqe"
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement("img", { alt: "", className: "footer-icon", src: _world2.default }),
                                    _react2.default.createElement(
                                        _reactRouterHashLink.HashLink,
                                        { to: "/next" },
                                        " Pr\xF3ximos paises"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement("img", { alt: "", className: "footer-icon", src: _design2.default }),
                                    _react2.default.createElement(
                                        _reactRouterHashLink.HashLink,
                                        { to: "/design" },
                                        "Rinc\xF3n de Dise\xF1o"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement("img", { alt: "", className: "footer-icon", src: _code2.default }),
                                    _react2.default.createElement(
                                        _reactRouterHashLink.HashLink,
                                        { to: "/dev" },
                                        "Rinc\xF3n de Desarrollo"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement("img", { alt: "", className: "footer-icon", src: _press2.default }),
                                    _react2.default.createElement(
                                        _reactRouterHashLink.HashLink,
                                        { to: "/press" },
                                        " Espacio de Prensa"
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { xs: 5, md: 3 },
                            _react2.default.createElement(
                                "ul",
                                null,
                                _react2.default.createElement(
                                    "h4",
                                    null,
                                    "Contacto"
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement("img", { alt: "", className: "footer-icon", src: _disc2.default }),
                                    _react2.default.createElement(
                                        _reactRouterHashLink.HashLink,
                                        { to: "/promotion" },
                                        " Promos"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement("img", { alt: "", className: "footer-icon", src: _team2.default }),
                                    _react2.default.createElement(
                                        _reactRouterHashLink.HashLink,
                                        { to: "/team" },
                                        " Equipo"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement("img", { alt: "", className: "footer-icon", src: _job2.default }),
                                    _react2.default.createElement(
                                        _reactRouterHashLink.HashLink,
                                        { to: "/work" },
                                        " Trabajos "
                                    ),
                                    _react2.default.createElement(
                                        _reactBootstrap.Label,
                                        {
                                            bsStyle: "success" },
                                        "Contratando!"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    _react2.default.createElement("img", { alt: "", className: "footer-icon", src: _contact2.default }),
                                    _react2.default.createElement(
                                        _reactRouterHashLink.HashLink,
                                        { to: "/contact" },
                                        " Contacto"
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Row,
                        { className: "social-container" },
                        _react2.default.createElement(
                            "h2",
                            null,
                            _react2.default.createElement(
                                _reactRouterHashLink.HashLink,
                                { to: "https://www.facebook.com/autoqe" },
                                _react2.default.createElement("i", { className: "social-icon fa fa-facebook" })
                            ),
                            _react2.default.createElement(
                                _reactRouterHashLink.HashLink,
                                { to: "https://www.twitter.com/autoqe" },
                                _react2.default.createElement("i", { className: "social-icon fa fa-twitter" })
                            ),
                            _react2.default.createElement(
                                _reactRouterHashLink.HashLink,
                                { to: "https://www.instagram.com/autoqe" },
                                _react2.default.createElement("i", { className: "social-icon fa fa-instagram" })
                            ),
                            _react2.default.createElement(
                                _reactRouterHashLink.HashLink,
                                { to: "https://www.youtube.com/channel/UC7RUb3Ieez8Pl9uLIhZclyQ" },
                                _react2.default.createElement("i", { className: "social-icon fa fa-youtube" })
                            ),
                            _react2.default.createElement(
                                _reactRouterHashLink.HashLink,
                                { to: "https://www.linkedin.com/company/16232988/" },
                                _react2.default.createElement("i", { className: "social-icon fa fa-linkedin" })
                            ),
                            _react2.default.createElement(
                                _reactRouterHashLink.HashLink,
                                { to: "https://google.com/+autoqe" },
                                _react2.default.createElement("i", { className: "fa fa-google-plus" })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Row,
                        null,
                        _react2.default.createElement(
                            "p",
                            { style: { textAlign: 'center' } },
                            "Autoqe.com \xA9 2017 - Todos los derechos reservados. Creado entre Buenos Aires y Barcelona "
                        )
                    )
                )
            );
        }
    }]);

    return Footer;
}(_react.Component);

exports.default = Footer;
//# sourceMappingURL=Footer.js.map