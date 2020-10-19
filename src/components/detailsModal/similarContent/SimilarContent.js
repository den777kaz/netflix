import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { apiKey, configV3 } from '../../../api/api';
import { motion } from 'framer-motion';

const Line = styled.div`
  width: 80%;
  margin: 100px auto;
  border-bottom: 1px solid lightgray;
  position: relative;
  height: 1px;
`;
const Button = styled.button`
  width: 80px;
  height: 80px;
  position: absolute;
  border-radius: 50%;
  border: none;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: dimgrey;
  color: white;
  font-size: 1.3rem;
  //bottom: -24px;
`;
const Title = styled.h3`
  font-size: min(2vw, 2rem);
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  margin: 40px 0;
`;

const Card = styled(motion.div)`
  flex: 0 0 32%;
  height: 200px;
  background-color: dimgrey;
  margin-bottom: 10px;
`;

const SimilarContent = ({ id }) => {
  const [data, setData] = useState([]);
  const [similarCount, setSimilarCount] = useState(6);

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  const fetchData = async () => {
    try {
      let data = await configV3.get(`movie/${id}/similar${apiKey}`);
      setData(data.data.results);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(data);
  return (
    <div>
      <Title>More Like This</Title>
      <Wrapper>
        {data &&
          [...data].slice(0, similarCount).map((m) => (
            <Card layout animate={{ opacity: [0, 1] }} key={m.id}>
              <span>{m.original_title}</span>
            </Card>
          ))}
      </Wrapper>
      <Line>
        <Button onClick={(e) => setSimilarCount(similarCount + 3)}>
          show more
        </Button>
      </Line>
    </div>
  );
};

export default SimilarContent;
