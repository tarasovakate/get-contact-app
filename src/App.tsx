import {Container} from 'react-bootstrap';
import Contacts from './components/Contacts';
import SidePanel from './components/SidePanel';
import {useEffect, useState} from "react";
import {ItemsList} from "./interface/Items";

const App = () => {

  const [items, setItems] = useState<ItemsList>([])

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setItems(json))
      .catch(err => {
        console.error(err);
      });
  }, [])

  return (
    <Container>
      <SidePanel items={items}/>
      <Contacts items={items}/>
    </Container>
  );
};

export default App;
