var Calculator = React.createClass({displayName: "Calculator",

    handleClick: function() {
        //var displayValue = parseFloat(this.props.displayValue);
        var displayValue = 1;
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
                React.createElement("p", {id: "calculatorDisplay", ref: "calculatorDisplay"}, this.props.displayValue), 
                React.createElement("div", {className: "calculatorButtons"}, 
                    buttons
                )
            )
        );
    }
});

var displayValue = 2;

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