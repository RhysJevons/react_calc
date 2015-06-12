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

    getInitialState: function() {
        return {selected: 0};
    },
    handleChange: function() {
        var newValue = this.refs.menu.getDOMNode().value;
        this.setState({selected: newValue});
        this.props.changeHandler(this.props.band - 1, newValue);
    },
    render: function(){
        var that = this;
        var optionNodes = this.props.bandOptions.map(function(option){
            if(that.props.omitOptions.indexOf(option.value) === -1)
                return React.createElement("option", {value: option.value}, option.label);
        });
        return (
            React.createElement("div", {className: "bandOption"}, 
                React.createElement("label", null, "Band ", this.props.band), 
                React.createElement("select", {ref: "menu", value: this.state.selected, onChange: this.handleChange}, 
                    optionNodes
                )
            )
        );
    }

});

var Calculator = React.createClass({displayName: "Calculator",

});

React.render(React.createElement(Calculator, {buttons: data}), document.body);


var Calculator = React.createClass({displayName: "Calculator",

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
    },
        handleClick: function() {
        //var displayValue = parseFloat(this.props.displayValue);
        var sum = this.props.displayValue;
        console.log('BUTTON CLICKED: ');
    }
});

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