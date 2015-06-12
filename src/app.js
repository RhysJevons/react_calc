var Calculator = React.createClass({
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
            <div className='calculator'>
                <CalculatorDisplay displayValue={this.state.displayValue.toString()} />
                <CalculatorButtons buttons={data} onButtonClicked={this.handleClick} />
            </div>
        );   
    }
});

var CalculatorDisplay = React.createClass({
    render: function() {
        return (
            <div className='row'>
                <p id='calculatorDisplay'>{this.props.displayValue}</p>
            </div>
        );
    }
});

var CalculatorButtons = React.createClass({
    render: function() {
        var buttons = this.props.buttons.map(function(button) {
            return  <input className={button.class} type="button" value={button.title} onClick={this.props.onButtonClicked.bind(this,button)} key={button.title} />
        },this);
        return (  
            <div className='row'>
                {buttons}
            </div>
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
    class: 'button success large'
  },
  {
    title : 'C',
    class: 'button alert large'
  }
];

React.render(<Calculator />, document.body);