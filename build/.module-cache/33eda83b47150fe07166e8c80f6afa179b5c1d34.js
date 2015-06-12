var Calculator = React.createClass({displayName: "Calculator",
    getInitialState: function(){
        return ({
            displayValue: ''
        });
    },
    handleClick: function(button) {
        var newValue = '';
        if(button.title === '=') {
            newValue = eval(this.state.displayValue);
            this.setState({displayValue: newValue});
        } else if (button.title === 'C') {
            this.setState({displayValue: newValue}); 
        } else {
            newValue = this.state.displayValue + button.title;
            this.setState({displayValue: newValue}); 
        }
    },
    render: function() {
        return (
            React.createElement("div", {className: "calculator"}, 
                React.createElement(CalculatorDisplay, {displayValue: this.state.displayValue.toString()}), 
                React.createElement(CalculatorButtons, {buttons: data, onButtonClicked: this.handleClick})
            )
        );   
    }
});

var CalculatorDisplay = React.createClass({displayName: "CalculatorDisplay",
    render: function() {
        return (
            React.createElement("div", {className: "row"}, 
                React.createElement("p", {id: "calculatorDisplay"}, this.props.displayValue)
            )
        );
    }
});

var CalculatorButtons = React.createClass({displayName: "CalculatorButtons",
    render: function() {
        var buttons = this.props.buttons.map(function(button) {
            return  React.createElement("input", {className: "button", type: "button", value: button.title, onClick: this.props.onButtonClicked.bind(this,button), key: button.title})
        },this);
        return (  
            React.createElement("div", {className: "row"}, 
                buttons
            )
        );
    }
});

var data = [
  {
    title : '1'
  },
  {
    title : '2'
  },
  {
    title : '3'
  },  
  {
    title : '4'
  },
  {
    title : '5'
  },
  {
    title : '6'
  },
  {
    title : '7'
  },
  {
    title : '8'
  },
  {
    title : '9'
  },
  {
    title : '0'
  },
  {
    title : '+'
  },
  {
    title : '-'
  },
  {
    title : '*'
  },
  {
    title : '/'
  },
  {
    title : '='
  },
  {
    title : 'C'
  }
];

React.render(React.createElement(Calculator, null), document.body);