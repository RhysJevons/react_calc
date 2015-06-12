jest.dontMock('../src/app.js');
describe('Calculator', function() {
  it('adds 1 + 2 to equal 3', function() {
    var React = require('../node-modules/react/addons.js');
    var Calculator = require('../src/app.js');
    var TestUtils = React.addons.TestUtils;

    var Calculator = TestUtils.renderIntoDocument(
      <Calculator />
    );

    //Simulate pressing the following buttons 1, +, 2, =
    var btn1 = React.findDOMNode(this.refs['1']);
	React.addons.TestUtils.Simulate.click(btn1);

	var btnPlus = React.findDOMNode(this.refs['+']);
	React.addons.TestUtils.Simulate.click(btnPlus);

	var btn2 = React.findDOMNode(this.refs['2']);
	React.addons.TestUtils.Simulate.click(btn2);

	var btnEquals = React.findDOMNode(this.refs['=']);
	React.addons.TestUtils.Simulate.click(btnEquals);

    // Verify that the display shows the correct answer, 3
    var calculatorDisplay = TestUtils.findRenderedDOMComponentWithTag(
      p, 'p');
    expect(calculatorDisplay.getDOMNode().textContent).toEqual('3');

  });
});