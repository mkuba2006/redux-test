import React, { useState, useEffect } from "react";
import "./card.css";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import theme from "../chakra/theme";
import { Menu, MenuButton, MenuList, MenuItem, Portal, Button } from "@chakra-ui/react";
import { DeleteIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { DateActions } from "../../store/authentication";


const initialCards = [
    { name: "Monday", day: "20", month: "10", total: 19, left: 0, color:'red' },
    { name: "Tuesday", day: "21", month: "10", total: 11, left: 0, color:'red' },
    { name: "Wednesday", day: "22", month: "10", total: 27, left: 0, color:'red' },
    { name: "Friday", day: "23", month: "10", total: 35, left: 0, color:'red' },
    { name: "Thursday", day: "24", month: "11", total: 22, left: 0, color:'red' }
];

const Card = () => {
    const dispatch = useDispatch();
    const date = useSelector(state => state.date);
    const [cards, setCards] = useState(initialCards);

    useEffect(() => {
        dispatch(DateActions.getDate());
        console.log(date);
        
    }, [dispatch]);

    useEffect(() => {
        const today = new Date();
        
        const currentDate = new Date(today.getFullYear(), date.month - 1, date.day);

        const updatedCards = cards.map(card => {
            const day = parseInt(card.day, 10);
            const month = parseInt(card.month, 10) -1;
            const cardDate = new Date(today.getFullYear(),month, day);
            const timeDiff = cardDate - currentDate;
            const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
            let color;

            if (daysLeft >= 6) {
                color = '#45FFCA'; 
            } else if (daysLeft > 3 && daysLeft <= 5) {
                color = '#FF8F00';
            } else {
                color = '#FF1E1E';
            }
        
            return { ...card, color, left: daysLeft };
        });

        setCards(updatedCards);
        // updatedCards.forEach(card => console.log(card));
    }, [date]); 

    const navcolor = useColorModeValue(theme.colors.nav.light, theme.colors.nav.dark);
    const color = useColorModeValue(theme.colors.text.light, theme.colors.text.dark);

    return(
        <div className="cards" >
            {cards.map((card)=>(
                <label key={card.name} id={card.name}>
                    <input id="chech" type="checkbox" />
                    <div className="card">

                        <div className="front" style={{ backgroundColor: navcolor }}>
                            <header>

                                <div id="one">
                                    <div className="dane">
                                        <h2>{card.day}.{card.month}</h2>
                                        <h3>{card.name}</h3>
                                    </div>
                                    <Menu className="n">
                                        <MenuButton as={Button} style={{ background: "none" }}>
                                            <div className="dots">
                                                <div className="dot"></div>
                                                <div className="dot"></div>
                                                <div className="dot"></div>
                                            </div>
                                        </MenuButton>
                                        <Portal>
                                            <MenuList>
                                                <MenuItem icon={<DeleteIcon />} >Remove</MenuItem>
                                                <MenuItem icon={<ViewIcon />}>Open</MenuItem>
                                                <MenuItem icon={<ViewOffIcon />}>Close</MenuItem>
                                            </MenuList>
                                        </Portal>
                                    </Menu>
                                </div>


                                <div id="two">
                                    <h5>{card.total} tasks</h5>
                                    <h5 style={{ color: card.color }}>{card.left} days left</h5>
                                </div>
                


                            </header>
                        </div>


                    </div>
                </label>
            ))}
        </div>
    )
};
export default Card;






// return(
//     <div className="cards" >
//         {cards.map((card)=>(
//             <label key={card.name} id={card.name}>
//                 <input id="chech" type="checkbox" />
//                 <div className="card">

//                     <div className="front" style={{ backgroundColor: navcolor }}>
//                         <header>

//                             <div className="dane">
//                                 <h2>{card.day}.{card.month}</h2>
//                                 <h3>{card.name}</h3>
//                             </div>
//                             <div>
//                                 <h5>{card.total} tasks</h5>
//                                 <h5 style={{ color: card.color }}>{card.left} days left</h5>
//                             </div>
            
//                             <Menu className="n">
//                                 <MenuButton as={Button} style={{ background: "none" }}>
//                                     <div className="dots">
//                                         <div className="dot"></div>
//                                         <div className="dot"></div>
//                                         <div className="dot"></div>
//                                     </div>
//                                 </MenuButton>
//                                 <Portal>
//                                     <MenuList>
//                                         <MenuItem icon={<DeleteIcon />} >Remove</MenuItem>
//                                         <MenuItem icon={<ViewIcon />}>Open</MenuItem>
//                                         <MenuItem icon={<ViewOffIcon />}>Close</MenuItem>
//                                     </MenuList>
//                                 </Portal>
//                             </Menu>

//                         </header>
//                     </div>


//                 </div>
//             </label>
//         ))}
//     </div>
// )