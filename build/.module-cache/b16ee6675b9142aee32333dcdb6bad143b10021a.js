var displayValue = '';
var Calculator = React.createClass({displayName: "Calculator",
    render: function() {
        return (
            React.createElement("div", {className: "calculator"}, 
                React.createElement(CalculatorDisplay, null), 
                React.createElement(CalculatorButtons, {buttons: data, onSomeEvent: this.handleClick})
            )
        );   
    }
});

var CalculatorDisplay = React.createClass({displayName: "CalculatorDisplay",
    render: function() {
        return (
            React.createElement("p", {id: "calculatorDisplay"}, this.props.displayValue)
        );
    }
});

var CalculatorButtons = React.createClass({displayName: "CalculatorButtons",
    handleClick: function(button) {
        displayValue = displayValue + button.title;
        console.log('BUTTON CLICKED: ',button.title);
    },
    render: function() {
        var buttons = this.props.buttons.map(function(button) {
            return  React.createElement("input", {type: "button", value: button.title, onClick: this.handleClick.bind(this,button), key: button.title})
        },this);
        return (  
            React.createElement("div", {className: "calculatorButtons"}, 
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
  }
];

React.render(React.createElement(Calculator, null), document.body);