import {
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  AccordionItem,
  Box,
  Flex,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Input } from "@chakra-ui/react";

const Home = () => {
  const [inputtext, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  let data = [
    { title: "The Matrix", rating: 7.5, category: "Action" },
    { title: "Focus", rating: 6.9, category: "Comedy" },
    { title: "The Lazarus Effect", rating: 6.4, category: "Thriller" },
    { title: "Everly", rating: 5.0, category: "Action" },
    { title: "Maps to the stars", rating: 7.5, category: "Drama" },
  ];

  function handleinput(e) {
    setInput(e.target.value);
  }

  const debounce = (fn, delay) => {
    let timerId;
    return function () {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        fn();
      }, delay);
    };
  };

  const handlesearch = debounce(() => {
    if (inputtext === "") {
      setSearchResults([]);
      return;
    }
    const results = data.filter((item) => {
      return item.title.toLowerCase().includes(inputtext.toLowerCase());
    });

    setSearchResults(results);
  }, 300);

  useEffect(() => {
    handlesearch();
  }, [inputtext]);

  return (
    <Flex
      margin="auto"
      justifyContent="center"
      width={["100%", "80%", "60%"]}
      gap="2rem"
      direction="column"
      textAlign="left"
    >
      <Flex>
        <Input
          placeholder="medium size"
          size="md"
          width="250px"
          onChange={handleinput}
          value={inputtext}
        />
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Rating
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {Array(10)
                .fill(0)
                .map((item, i) => (
                  <Flex key={i}>
                    <input type="checkbox" />
                    {Array(10)
                      .fill(0)
                      .map((item, k) => (
                        <Flex key={k} lineHeight={"25px"}>
                          {k <= i ? (
                            <h2 style={{ color: "black", fontSize: "50px" }}>
                              &#11089;
                            </h2>
                          ) : (
                            <h2 style={{ color: "black", fontSize: "50px" }}>
                              &#11090;
                            </h2>
                          )}
                        </Flex>
                      ))}
                  </Flex>
                ))}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Genre
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {data.map((item, i) => (
                <Flex gap="10px" key={i}>
                  <input type="checkbox" />
                  <h1>{item.category}</h1>
                </Flex>
              ))}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>

      {searchResults.length > 0 ? (
        <Box padding={"20px"} border="1px solid black" width={["25%"]}>
          {searchResults.map((item, i) => (
            <div key={i}>{item.title}</div>
          ))}
        </Box>
      ) : (
        <div></div>
      )}
    </Flex>
  );
};

export default Home;
