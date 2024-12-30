import React, { useState, useEffect } from "react";
import "./card.css";
import { useColorModeValue } from "@chakra-ui/react";
import theme from "../chakra/theme";
import { Menu, MenuButton, MenuList, MenuItem, Portal, Button } from "@chakra-ui/react";
import { DeleteIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { DateActions } from "../../store/authentication";
import { Link, useNavigate } from "react-router-dom"; 
import { CheckList, printItem, DeleteItem } from "./checklist";

const Card = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(DateActions.getDate());
        fetchCheckList();
    }, [dispatch]);

    const fetchCheckList = async () => {
        setLoading(true);
        const dane = await CheckList();
        const updatedCards = dane.map(item => {
            const formattedDate = new Date(item[1].year, item[1].month - 1, item[1].day);
            const daysLeft = Math.ceil((formattedDate - new Date()) / (1000 * 60 * 60 * 24));
            return { 
                name: item[0], 
                data: formattedDate,  
                lista: item[1].tasks,
                left: daysLeft,
                color: getCardColor(daysLeft) 
            };
        });
        setCards(updatedCards);
        setLoading(false);
    };

    const getCardColor = (daysLeft) => {
        if (daysLeft >= 6) return '#45FFCA';
        if (daysLeft > 3) return '#FF8F00';
        if (daysLeft >= 0) return '#FF1E1E';
        return '#808080';
    };

    const handleDelete = async (name) => {
        await DeleteItem(name);
        fetchCheckList(); 
    };

    const navcolor = useColorModeValue(theme.colors.nav.light, theme.colors.nav.dark);

    return (
        <div id="sum">
            <div id="div_2">
                <Link to="/Form_card">
                    <Button variant="subtle" style={{ backgroundColor: navcolor }} id="to_form_card">
                        <span>&#43;</span> Add list
                    </Button>
                </Link>
                <Button id="button_check" variant="subtle" style={{ backgroundColor: navcolor }} onClick={fetchCheckList}>
                    CheckList
                </Button>
            </div>
            <div className="cards">
                {loading ? (<div>Loading...</div>) : (
                    cards.map((card) => {
                        const day = card.data.getDate();
                        const month = card.data.getMonth() + 1;
                        return (
                            <label key={card.name} id={card.name} >
                                <input id="chech" type="checkbox" />
                                <div className="card">
                                    <div className="front" style={{ backgroundColor: navcolor }}>
                                        <header>
                                            <div id="one">
                                                <div className="dane" onClick={() => navigate(`/items/${card.name}`, { state: { card } })}>
                                                    <h2>{`${String(day).padStart(2, '0')}.${String(month).padStart(2, '0')}`}</h2>
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
                                                            <MenuItem icon={<DeleteIcon />} onClick={() => handleDelete(card.name)}> Remove</MenuItem>
                                                            <MenuItem icon={<ViewIcon />}>Open</MenuItem>
                                                            <MenuItem icon={<ViewOffIcon />}>Close</MenuItem>
                                                        </MenuList>
                                                    </Portal>
                                                </Menu>
                                            </div>
                                            <div id="two">
                                                <h5>{card.lista.length} tasks</h5>
                                                <h5 style={{ color: card.color }}>{card.left} days left</h5>
                                            </div>
                                        </header>
                                    </div>
                                </div>
                            </label>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default Card;
