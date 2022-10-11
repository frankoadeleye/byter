What Exactly Should We Write Test For?

1.) Test what the user interracts with: Say you have a button that when clicked
displays a div; you should test that the button is clickable and that the div
exists after the click.

let’s learn about a few important testing methods.

render(Component): Renders the given component on a mock screen. screen: A
reference to the mock screen with various useful testing functions. cleanup():
Resets the DOM. afterEach(callback function): Runs the callback function given
as a parameter after running each test suite. beforeEach(callback function):
Runs the callback function given as a parameter before running each test suite.
describe(nameOfTestSuite, callback function): Defines a test suite that contains
many unit tests(Callback Function contains the unit tests). test(nameOfTest,
callback function): Defines a test to be performed. fireEvent: Simulates a
specified event.
