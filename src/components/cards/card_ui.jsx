import "./card.css"
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import theme from "../chakra/theme";
import { Menu, MenuButton, Icon, MenuList, MenuItem, Portal, Button } from "@chakra-ui/react";
import { CloseIcon, DeleteIcon ,ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const cards=[
    {
        name: "Mon",
        data:"10.01",
        total: 19
    },
    {
        name: "Tue",
        data:"10.01",
        total: 11
    },
    {
        name: "Wed",
        data:"10.01",
        total: 27
    },
    {
        name: "Fri",
        data:"10.01",
        total: 35
    },
    {
        name: "Thu",
        data:"10.01",
        total: 22
    }
    
];

const Card = () =>{
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

                                <div className="dane">
                                    <h2>{card.data}</h2>
                                    <h3>{card.name}</h3>
                                </div>
                                <div>
                                    <h5>{card.total} tasks</h5>
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

                            </header>
                        </div>


                    </div>
                </label>
            ))}
        </div>
    )
};
export default Card;

































// import "./card.css"
// import { useColorMode, useColorModeValue } from "@chakra-ui/react";
// import theme from "../chakra/theme";
// import { Menu, MenuButton, Icon, MenuList, MenuItem, Portal, Button } from "@chakra-ui/react";
// import { CloseIcon, DeleteIcon ,ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

// const cards=[
//     {
//         name: "Poniedziałek",
//         total: 19,
//         description:"Zadania",
//         footer: "Completed: 13",
//     },
//     {
//         name: "Wtorek",
//         total: 11,
//         description:"Zadania",
//         footer: "Completed: 0",
//     },
//     {
//         name: "Środa",
//         total: 27,
//         description:"Projekty",
//         footer: "Ukończone: 21",
//     },
//     {
//         name: "Piątek",
//         total: 35,
//         description:"Spotkania",
//         footer: "Zakończone: 29",
//     },
//     {
//         name: "Czwartek",
//         total: 22,
//         description:"Prezentacje",
//         footer: "Wykonane: 18",
//     }
    
// ];

// const Card = () =>{
//     const navcolor = useColorModeValue(theme.colors.nav.light, theme.colors.nav.dark);
//     const color = useColorModeValue(theme.colors.text.light, theme.colors.text.dark);

//     return(
//         <div className="cards" >
//             {cards.map((card)=>(
//                 <label key={card.name} id={card.name}>
//                     <input id="chech" type="checkbox" />
//                     <div className="card">
//                         <div className="front" style={{ backgroundColor: navcolor }}>
//                             <header>
//                                 <h2 style={{ color: color }} >{card.name}</h2>
//                                 <Menu className="n">
//                                     <MenuButton as={Button} style={{ background: "none" }}>
//                                         <div className="dots">
//                                             <div className="dot"></div>
//                                             <div className="dot"></div>
//                                             <div className="dot"></div>
//                                         </div>
//                                     </MenuButton>
//                                     <Portal>
//                                         <MenuList>
//                                             <MenuItem icon={<DeleteIcon />} >Remove</MenuItem>
//                                             <MenuItem icon={<ViewIcon />}>Open</MenuItem>
//                                             <MenuItem icon={<ViewOffIcon />}>Close</MenuItem>
//                                         </MenuList>
//                                     </Portal>
//                                 </Menu>


//                             </header>
//                             <h5 style={{ color: color }}>{card.total}</h5>
//                             <h3 style={{ color: color }}>{card.description}</h3>
//                             <h4 style={{ color: color }}>{card.footer}</h4>
//                         </div>
//                         <div className="back" style={{ backgroundColor: navcolor }}>
//                             <header>
//                                 <h2 style={{ color: color }}>{card.name}</h2>
//                                 <Icon as={CloseIcon} style={{ color: color }} />
//                             </header>
//                             <p style={{ color: color }}>More Informations</p>
//                         </div>
//                     </div>
//                 </label>
//             ))}
//         </div>
//     )
// };
// export default Card
