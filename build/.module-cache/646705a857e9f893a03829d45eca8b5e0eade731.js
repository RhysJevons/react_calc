var sumIndicator = React.createClass({displayName: "sumIndicator",
    printSum: function() {
        var indicatorValue = parseFloat(this.props.resistance);
    },
    render: function() {
        return (
            React.createElement("p", {id: "indicatorValue"}, this.printSum())
        );
    }
});