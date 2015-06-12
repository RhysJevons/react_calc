var CalculatorDisplay = React.createClass({displayName: "CalculatorDisplay",
    printResistance: function() {
        var resistance = parseFloat(this.props.resistance);
        return resistance;
    },
    render: function() {
        return (
            React.createElement("p", {id: "resistorValue"}, this.printResistance())
        );
    }
});

var CalculatorButtons = React.createClass({displayName: "CalculatorButtons",

    handleClick: function() {
        //var displayValue = parseFloat(this.props.displayValue);
        var sum = this.props.displayValue;
        console.log('BUTTON CLICKED: ');
    },
    render: function() {
        var buttons = this.props.buttons.map(function(button) {
            return  React.createElement("input", {
              type: "button", 
              value: button.title, 
              onClick: this.handleClick, 
              key: button.title}
            )
        });
        return (
            React.createElement("div", {className: "calculator"}, 
                React.createElement("p", {id: "calculatorDisplay"}, "111111"), 
                React.createElement("div", {className: "calculatorButtons"}, 
                    buttons
                )
            )
        );
    }

});

var Calculator = React.createClass({displayName: "Calculator",
    render: function() {

    }
});

React.render(React.createElement(Calculator, {buttons: data}), document.body);


var displayValue = 1;

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

React.render(React.createElement(Calculator, {buttons: data}), document.body);