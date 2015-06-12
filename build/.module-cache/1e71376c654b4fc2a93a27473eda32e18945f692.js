//Sum viewer
var sumIndicator = React.createClass({displayName: "sumIndicator",
    printSum: function() {
        var indicatorValue = parseFloat(this.props.indicatorValue);
    },
    render: function() {
        return (
            React.createElement("p", {id: "indicatorValue"}, this.printSum())
        );
    }
});

//Calculator buttons
var calculatorButtons = React.createClass({displayName: "calculatorButtons",
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