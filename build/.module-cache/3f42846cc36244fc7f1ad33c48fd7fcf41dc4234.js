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

var Calculator = React.createClass({displayName: "Calculator",
    calculateTolerance: function() {
        return this.bandOptions[this.state.bands[4]].tolerance;
    },
    getMultiplier: function() {
        if(this.state.bands[3] == 10){
            return 0.1;
        } else if(this.state.bands[3] == 11){
            return 0.01;  
        } else {
            return Math.pow(10, this.state.bands[3]);     
        }

    },
    bandOptions: [
        {value: 0, tolerance: 0, color: "black", label: "None" },
        {value: 1, tolerance: 1, color: "brown", label: "Brown"},
        {value: 2, tolerance: 2, color: "red", label: "Red"},
        {value: 3, color: "orange", label: "Orange"},
        {value: 4, color: "yellow", label: "Yellow"},
        {value: 5, tolerance: 0.5, color: "green", label: "Green"},
        {value: 6, tolerance: 0.25, color: "blue", label: "Blue"},
        {value: 7, tolerance: 0.10, color: "violet", label: "Violet"},
        {value: 8, tolerance: 0.05, color: "grey", label: "Grey"},
        {value: 9, color: "white", label: "White"},
        {value: 10, tolerance: 5, color: "#FFD700", label: "Gold"},
        {value: 11, tolerance: 10, color: "#C0C0C0", label: "Silver"},
    ],
    updateBandState: function(band, value) {
        var state = this.state;
        state.bands[band] = value;
        state.resistance = this.calculateResistance();
        state.tolerance = this.calculateTolerance();
        this.setState(state);
    },
    getInitialState: function() {
        return {bands: [0,0,0,0,0], resistance: 0, tolerance: 0};
    },
    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement(OhmageIndicator, {resistance: this.state.resistance}), 
                React.createElement(ToleranceIndicator, {tolerance: this.state.tolerance}), 
                React.createElement(SVGResistor, {bandOptions: this.bandOptions, bands: this.state.bands}), 
                React.createElement(BandSelector, {bandOptions: this.bandOptions, omitOptions: [10,11], band: 1, 
                changeHandler: this.updateBandState}), 
                React.createElement(BandSelector, {bandOptions: this.bandOptions, omitOptions: [10,11], band: 2, 
                changeHandler: this.updateBandState}), 
                React.createElement(BandSelector, {bandOptions: this.bandOptions, omitOptions: [10,11], band: 3, 
                changeHandler: this.updateBandState}), 
                React.createElement(BandSelector, {bandOptions: this.bandOptions, omitOptions: [8,9], band: 4, 
                changeHandler: this.updateBandState}), 
                React.createElement(BandSelector, {bandOptions: this.bandOptions, omitOptions: [3,4,9], band: 5, 
                changeHandler: this.updateBandState})
            )
            );
    }
});

var calc = React.renderComponent(
    React.createElement(Calculator, null), 
    document.getElementById('container')
);




var calculatorDisplay = React.createClass({displayName: "calculatorDisplay",

    printSum: function() {
        var displayValue = parseFloat(this.props.displayValue);
    },
    render: function() {
        return (
            React.createElement("p", {id: "displayValue"}, this.printSum())
        );
    }

  /*toggleLiked: function() {
    this.setState({
      liked: !this.state.liked
    });
  },

  getInitialState: function() {
    return {
      liked: false
    };
  },

  render: function() {
    var buttonClass = this.state.liked ? 'active' : '';

    return (
      <div className='photo'>
        <img src={this.props.src} />

        <div className='bar'>
          <button onClick={this.toggleLiked} className={buttonClass}>
            ♥
          </button>
          <span>{this.props.caption}</span>
        </div>
      </div>
    );
  }*/
});

var PhotoGallery = React.createClass({displayName: "PhotoGallery",

  render: function() {

    var photos = this.props.photos.map(function(photo) {
      return React.createElement(Photo, {src: photo.url, caption: photo.caption})
    });

    return (
      React.createElement("div", {className: "photo-gallery"}, 
        photos
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
  }
];

React.render(React.createElement(PhotoGallery, {photos: data}), document.body);