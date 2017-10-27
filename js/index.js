'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultText = 'HEADING\n=====\nsubheading\n-----\nYou can make it **bold**  \nor *italic*  \nor type some `code`  \ndelete it ~~`code`~~  \ncreate a [link](http://blahblahblah.com)\n### smaller heading\n#### ul\n* Eat\n* Pray\n* Love (no I didn\'t read the book)\n\n#### ol\n1. Learn to code\n2. Practice coding\n3. Live and breath code';

var MarkDown = function (_React$Component) {
    _inherits(MarkDown, _React$Component);

    function MarkDown(props) {
        _classCallCheck(this, MarkDown);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.state = { text: defaultText };
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    MarkDown.prototype.handleChange = function handleChange(e) {
        var newText = e.target.value;
        this.setState({ text: newText });
    };

    MarkDown.prototype.render = function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(Input, { handleChange: this.handleChange, text: this.state.text }),
            React.createElement(Preview, { text: this.state.text }),
            React.createElement(Footer, null)
        );
    };

    return MarkDown;
}(React.Component);

var Input = function Input(props) {
    return React.createElement('textarea', { onChange: props.handleChange, value: props.text });
};

var Preview = function Preview(props) {
    var markUp = function markUp() {
        return { __html: marked(props.text) };
    };
    return React.createElement('div', { id: 'preview', dangerouslySetInnerHTML: markUp() });
};

var Footer = function Footer(props) {
    return React.createElement(
        'footer',
        null,
        'Created by YH'
    );
};

ReactDOM.render(React.createElement(MarkDown, null), document.getElementById('app'));