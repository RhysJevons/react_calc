var Calculator = React.createClass({displayName: "Calculator",
    getInitialState: function(){
        return ({
            displayValue: ''
        });
    },
    handleClick: function(button) {
        if(button.title == '=') {
            this.state.displayValue = eval(this.state.displayValue);
        } else {
           var newValue = this.state.displayValue + button.title;
            this.setState({displayValue: newValue}); 
        }
        console.log('BUTTON CLICKED: ',button.title);
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
            React.createElement("p", {id: "calculatorDisplay"}, this.props.displayValue)
        );
    }
});

var CalculatorButtons = React.createClass({displayName: "CalculatorButtons",
    render: function() {
        var buttons = this.props.buttons.map(function(button) {
            return  React.createElement("input", {type: "button", value: button.title, onClick: this.props.onButtonClicked.bind(this,button), key: button.title})
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
  },
  {
    title : '+'
  },
  {
    title : '='
  }
];

React.render(React.createElement(Calculator, null), document.body);