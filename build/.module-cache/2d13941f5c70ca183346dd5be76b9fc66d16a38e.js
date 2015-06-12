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