import React from "react";
import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  headerStyle: {
    background: "red"
  },
  headingStyle: {
    fontSize: 100
  },
  subHeaderStyle: {
  	color: "gray",
    text-align: "center"
  }
};

// We use JSX curly braces to evaluate the style object

const Header = () => (
  <div className="jumbotron">
    <h1>New York Times Article Scrubber</h1>
    <h3 style={styles.subHeaderStyle}>Search for and annotate articles of interest!</h3>
  </div>
);

export default Header;
