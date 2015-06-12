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
                React.createElement("div", {className: "small-12 large-12 columns"}, 
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
                buttons
            )
        );
    }
});

var data = [
  {
    title: '1',
    class: 'button large'
  },
  {
    title : '2',
    class: 'button large'
  },
  {
    title : '3',
    class: 'button large'
  },  
  {
    title : '4',
    class: 'button large'
  },
  {
    title : '5',
    class: 'button large'
  },
  {
    title : '6',
    class: 'button large'
  },
  {
    title : '7',
    class: 'button large'
  },
  {
    title : '8',
    class: 'button large'
  },
  {
    title : '9',
    class: 'button large'
  },
  {
    title : '0',
    class: 'button large'
  },
  {
    title : '+',
    class: 'button large'
  },
  {
    title : '-',
    class: 'button large'
  },
  {
    title : '*',
    class: 'button large'
  },
  {
    title : '/',
    class: 'button large'
  },
  {
    title : '=',
    class: 'button success expand'
  },
  {
    title : 'C',
    class: 'button alert expand'
  }
];

React.render(React.createElement(Calculator, null), document.body);