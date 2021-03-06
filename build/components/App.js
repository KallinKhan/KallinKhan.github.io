'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SplitPane = require('./helpers/SplitPane');

var _SplitPane2 = _interopRequireDefault(_SplitPane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styleA = { background: '#aaa4ba' };

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _SplitPane2.default,
                { split: 'vertical', defaultSize: '20%', pane1Style: styleA },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'h3',
                        { style: { textAlign: 'center' } },
                        'Links about Me'
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: { textAlign: 'center' } },
                        _react2.default.createElement(
                            'a',
                            { href: 'https://www.linkedin.com/in/kallin-khan-454521b9/' },
                            'LinkedIn'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: { textAlign: 'center' } },
                        _react2.default.createElement(
                            'a',
                            { href: 'https://github.com/kallinkhan' },
                            'Github'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: { textAlign: 'center' } },
                        _react2.default.createElement(
                            'a',
                            { href: 'https://twitter.com/kallinkhan' },
                            'Twitter'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'h1',
                        null,
                        'Welcome To My Webpage!'
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        '-Began learning JavaScript for my job and decided to make my own website'
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        '-Practicing of JavaScript and ReactJS'
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        '-Spent a lot of time figuring out the "right" framework to build this on, hope I chose well!'
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        '-Feel free to email me at kallinkhan@gmail.com if you have any comments/suggestions'
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        '-Began development on 9/23/17'
                    )
                )
            );
        }
    }]);

    return App;
}(_react2.default.Component);

exports.default = App;