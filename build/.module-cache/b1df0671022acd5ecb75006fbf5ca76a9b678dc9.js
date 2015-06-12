var sumIndicator = React.createClass({displayName: "sumIndicator",
    printSum: function() {
        var resistance = parseFloat(this.props.resistance);
    },
    render: function() {
        return (
            React.createElement("p", {id: "resistorValue"}, this.printResistance())
        );
    }
});