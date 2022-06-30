import React, {useContext} from "react";

// //Firebase context for Consumer and Provider components
// const FirebaseContext = React.createContext(null);

// //create higher-order component
// export const withFirebase = Component => props => (
//     <FirebaseContext.Consumer>
//         {firebase => <Component {...props} firebase={firebase} />}
//     </FirebaseContext.Consumer>
// )

// export default FirebaseContext;

const AuthContext = React.createContext();

export function AuthProvider({children, value}) {
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthValue(){
    return useContext(AuthContext)
}