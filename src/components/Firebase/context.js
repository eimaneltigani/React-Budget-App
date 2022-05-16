import React from "react";

//Firebase context for Consumer and Provider components
const FirebaseContext = React.createContext(null);

//create higher-order component
export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
        {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
)

export default FirebaseContext;