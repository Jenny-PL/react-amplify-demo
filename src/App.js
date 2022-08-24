// import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
import "./App.css";

function App({ signOut }) {
  return (
    <View className="App">
      <Card>
        <Image
          src={
            "https://images.unsplash.com/photo-1660811136764-c4c0ded63dc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          }
          alt="pic of plants"
        />
        <h1>Hello from Jenny!</h1>
        <Heading level={2}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img
//           src={
//             "https://images.unsplash.com/photo-1660811136764-c4c0ded63dc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
//           }
//           alt="pic of plants"
//         />

//         <h1>Hello from Jenny!</h1>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default withAuthenticator(App);
