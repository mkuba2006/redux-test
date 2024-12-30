import React from "react";
import { Link, useLocation } from "react-router-dom"; 
import { printItem } from "../checklist";
import { Button } from "@chakra-ui/react";



const Single_Card = () => {
  const location = useLocation();
  const { card } = location.state || {}; 

  if (!card) {
    return <div>Card not found</div>;
  }

  const handleClick = () => {
    printItem(card);
  };

  return (
    <div>
      <h1 onClick={handleClick}>{card.name}</h1>
      <p>{card.lista.length} zadań</p>
      <p>{card.left} dni pozostało</p>
      <Button variant="outline" type="submit" ><Link to="/items">Back</Link></Button>
    </div>
  );
};

export default Single_Card;
