import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; 
import { printItem } from "../checklist";
import { Button, Card, CardBody, CardHeader, CardFooter, Heading, Text, VStack, Collapse, Box, Flex, Checkbox, useColorModeValue } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { DeleteTask } from "../checklist";
import { CheckList } from "../checklist";
import theme from "../../chakra/theme";
import './single_card.css';

const Single_Card = () => {
  const [isTaskListOpen, setIsTaskListOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const location = useLocation();
  const { card } = location.state || {}; 
  const fetchCheckList = async () => {
    try {
      const dane = await CheckList();
      const updatedCard = dane.find(([name]) => name === card.name);
      updatedCard && setTasks(updatedCard[1].tasks);
    } catch (error) {
      console.error(error);
    }
  };
  fetchCheckList()
  useEffect(() => {fetchCheckList()}, [card.name])

  const toggleTaskList = () => setIsTaskListOpen(!isTaskListOpen);
  const handleClick = () => printItem(card);

  const formattedDate = card.data instanceof Date ? card.data.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '.') : card.data;
  
  const handleDeleteTask = async (taskToRemove) => {
    try {
      const updatedTasks = await DeleteTask(card, taskToRemove);
      fetchCheckList();
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  const cardBgColor = useColorModeValue(theme.colors.card.light, theme.colors.card.dark);

  return (
    <Card id="Single_Card" maxW="md" borderRadius="lg" overflow="hidden" bg={cardBgColor} boxShadow='none'>
      <CardHeader p="2">
        <Flex justify="space-between" align="center" width="100%">
          <Heading fontSize="4xl" m="0" onClick={handleClick} cursor="pointer">
            {card.name}
          </Heading>
          <Text fontSize="2xl" fontWeight="700" m="0" opacity="0.7">{formattedDate}</Text>
        </Flex>
      </CardHeader>

      <CardBody px="8">
        <Text>{card.left || 0} dni pozostało</Text>
        <Button variant="ghost" onClick={toggleTaskList}>{tasks.length} Tasków</Button>

        <Collapse in={isTaskListOpen} animateOpacity>
          <VStack align="start" mt={4} spacing={2}>
            {tasks.map((task, index) => (
              <Box key={index} p={2} bg="teal.700" color="white" w="full" borderRadius="md">
                <Flex justify="space-between" align="center" width="100%">
                  <Checkbox colorScheme="green">
                    <p id="p_task">{task}</p>
                  </Checkbox>
                  <Button variant="link" colorScheme="white" leftIcon={<DeleteIcon />} size="md" _hover={{ color: "red.500" }} onClick={() => handleDeleteTask(task)} />
                </Flex>
              </Box>
            ))}
          </VStack>
        </Collapse>
      </CardBody>

      <CardFooter justifyContent="flex-end" gap="2" p="0" pt="10" pb="4">
        <Button as={Link} to="/items" variant="solid" colorScheme="green" size="md"> Add Task </Button>
        <Button as={Link} to="/items" variant="ghost" size="md"> Back </Button>
      </CardFooter>
    </Card>
  );
};

export default Single_Card;
