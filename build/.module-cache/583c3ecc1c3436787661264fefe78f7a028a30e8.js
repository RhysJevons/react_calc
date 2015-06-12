var CalculatorDisplay = React.createClass({displayName: "CalculatorDisplay",

    printSum: function() {
        var displayValue = parseFloat(this.props.displayValue);
    },
    render: function() {
        return (
            React.createElement("p", {id: "displayValue"}, this.printSum())
        );
    }
});

var CalculatorButtons = React.createClass({displayName: "CalculatorButtons",

    onButtonClicked: function() {
        console.log('BUTTON CLICKED: ');
    },
    render: function() {
        var buttons = this.props.buttons.map(function(button) {
            return React.createElement("button", null, button.title);//onClick={this.onButtonClicked}>{button.title}<button/>;
        });
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

React.render(React.createElement("div", null, React.createElement(CalculatorDisplay, null), React.createElement(CalculatorButtons, {buttons: data})), document.body);