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
                React.createElement("div", {className: "small-3 large-12 columns"}, 
                    React.createElement("p", {id: "calculatorDisplay"}, this.props.displayValue)
                )
            )
        );
    }
});

var CalculatorButtons = React.createClass({displayName: "CalculatorButtons",
    render: function() {
        var buttons = this.props.buttons.map(function(button) {
            return  React.createElement("input", {className: button.class, type: "button", value: button.title, onClick: this.props.onButtonClicked.bind(this,button), key: button.title})
        },this);
        return (  
            React.createElement("div", {className: "row"}, 
                React.createElement("div", {className: "small-3 large-4 columns"}, 
                    buttons
                )
            )
        );
    }
});

var data = [
  {
    title: '1',
    class: 'button'
  },
  {
    title : '2',
    class: 'button'
  },
  {
    title : '3',
    class: 'button'
  },  
  {
    title : '4',
    class: 'button'
  },
  {
    title : '5',
    class: 'button'
  },
  {
    title : '6',
    class: 'button'
  },
  {
    title : '7',
    class: 'button'
  },
  {
    title : '8',
    class: 'button'
  },
  {
    title : '9',
    class: 'button'
  },
  {
    title : '0',
    class: 'button'
  },
  {
    title : '+',
    class: 'button'
  },
  {
    title : '-',
    class: 'button'
  },
  {
    title : '*',
    class: 'button'
  },
  {
    title : '/',
    class: 'button'
  },
  {
    title : '=',
    class: 'button success'
  },
  {
    title : 'C',
    class: 'button alert'
  }
];

React.render(React.createElement(Calculator, null), document.body);