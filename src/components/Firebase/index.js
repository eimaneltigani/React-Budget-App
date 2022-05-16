import FirebaseContext, { withFirebase } from "./context";
import Firebase from "./firebase";

// Module exports Firebase class and context

//used to provide Firebase instance to entire application in src/index.js 
export default Firebase;

export { FirebaseContext, withFirebase };