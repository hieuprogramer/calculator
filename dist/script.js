class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVal: '0',
      evaluated: false };

    this.handleNumber = this.handleNumber.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleInitialize = this.handleInitialize.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleEvaluate = this.handleEvaluate.bind(this);
  }

  handleInitialize() {
    this.setState({
      currentVal: '0',
      evaluated: false });

  }
  handleNumber(e) {
    let tmp = e.target.value;
    if (this.state.currentVal == '0')
    this.setState({
      currentVal: e.target.value });else

    if (this.state.evaluated == false) {
      if (/[\d\+\-\/×]$/.test(this.state.currentVal) || /\d+\.$/.test(this.state.currentVal)) {
        this.setState(state => ({
          currentVal: state.currentVal + tmp }));

      }
    }

  }
  handleOperator(e) {
    let tmp = e.target.value;
    let tmpVal = this.state.currentVal;
    if (/\d+$/.test(tmpVal)) {
      this.setState(state => ({
        currentVal: state.currentVal + tmp }));

    } else if (tmp != '-') {
      while (/[\+\-\/×]$/.test(tmpVal)) tmpVal = tmpVal.slice(0, -1);
      this.setState({
        currentVal: tmpVal + tmp });

    } else {
      this.setState({
        currentVal: tmpVal + tmp });

    }
  }
  handleDecimal(e) {
    let tmp = e.target.value;
    if (/[\+\-×\/]\d+$/.test(this.state.currentVal) || /^\d+$/.test(this.state.currentVal))
    this.setState(state => ({
      currentVal: state.currentVal + tmp }));


  }
  handleEvaluate() {
    let tmp = Number(eval(this.state.currentVal.replace('×', '*')));
    tmp = Math.round(tmp * 100000000000000) / 100000000000000;
    this.setState(state => ({
      currentVal: tmp + '' }));

  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/
    React.createElement("div", { className: "calculator" }, /*#__PURE__*/
    React.createElement(Output, { currentValue: this.state.currentVal }), /*#__PURE__*/
    React.createElement(Buttons, {
      initialize: this.handleInitialize,
      operators: this.handleOperator,
      numbers: this.handleNumber,
      decimal: this.handleDecimal,
      evaluate: this.handleEvaluate })));




  }}

class Buttons extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("button", {
        className: "jumbo",
        id: "clear",
        onClick: this.props.initialize,
        value: "AC" }, "AC"), /*#__PURE__*/



      React.createElement("button", {
        id: "divide",
        onClick: this.props.operators,
        value: "/" }, "/"), /*#__PURE__*/



      React.createElement("button", {
        id: "multiply",
        onClick: this.props.operators,
        value: "\xD7" }, "x"), /*#__PURE__*/



      React.createElement("button", {
        id: "seven",
        onClick: this.props.numbers,
        value: "7" }, "7"), /*#__PURE__*/



      React.createElement("button", {
        id: "eight",
        onClick: this.props.numbers,
        value: "8" }, "8"), /*#__PURE__*/



      React.createElement("button", {
        id: "nine",
        onClick: this.props.numbers,
        value: "9" }, "9"), /*#__PURE__*/



      React.createElement("button", {
        id: "subtract",
        onClick: this.props.operators,
        value: "-" }, "-"), /*#__PURE__*/



      React.createElement("button", {
        id: "four",
        onClick: this.props.numbers,
        value: "4" }, "4"), /*#__PURE__*/



      React.createElement("button", {
        id: "five",
        onClick: this.props.numbers,
        value: "5" }, "5"), /*#__PURE__*/



      React.createElement("button", {
        id: "six",
        onClick: this.props.numbers,
        value: "6" }, "6"), /*#__PURE__*/



      React.createElement("button", {
        id: "add",
        onClick: this.props.operators,
        value: "+" }, "+"), /*#__PURE__*/



      React.createElement("button", {
        id: "one",
        onClick: this.props.numbers,
        value: "1" }, "1"), /*#__PURE__*/



      React.createElement("button", {
        id: "two",
        onClick: this.props.numbers,
        value: "2" }, "2"), /*#__PURE__*/



      React.createElement("button", {
        id: "three",
        onClick: this.props.numbers,
        value: "3" }, "3"), /*#__PURE__*/



      React.createElement("button", {
        className: "jumbo",
        id: "zero",
        onClick: this.props.numbers,
        value: "0" }, "0"), /*#__PURE__*/



      React.createElement("button", { id: "decimal", onClick: this.props.decimal, value: "." }, "."), /*#__PURE__*/


      React.createElement("button", {
        id: "equals",
        onClick: this.props.evaluate,
        value: "=" }, "=")));





  }}


class Output extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "outputScreen", id: "display" },
      this.props.currentValue));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Calculator, null), document.getElementById('app'));