import Navigation from "./components/Navigation/Navigation"
import "./App.css"
import ContactFrom from "./components/ContactForm/ContactFrom";
import ContactHeader from "./components/ContactHeader/ContactHeader";
 const App = () => {
   return (
     <div>
       <Navigation/>
       <ContactHeader/>
       <ContactFrom/>
     </div>
   )
 };
 
 export default App;
 