import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import {apiKey} from "../../../api/api";
import {useFetch} from "../../../hooks/useFetch";



const Line = styled.div`
      width: 80%;
      margin: 100px auto ;
      border-bottom: 1px solid lightgray;
      position: relative;
      height: 1px;
    `
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
      font-size: 1.3rem ;
      //bottom: -24px;
    `
const Title = styled.h3`
      font-size: min(2vw, 2rem);
    `
const Wrapper = styled.div`
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      justify-content: space-between;
      margin: 40px 0;
    `
const Card = styled.div`
      flex: 0 0 32%;
     
      height: 200px;
      background-color: dimgrey;
    `

const SimilarContent = ({id}) => {

    // const url = `https://api.themoviedb.org/3/movie/${id}/similar${apiKey}&language=en-US`;
    // const [response, loading, hasError] = useFetch(`https://api.themoviedb.org/3/movie/${id}/similar${apiKey}&language=en-US`)
    // console.log(id)
    // const [state, setState] = useState([])
    // const [filter, setFilter] = useState(null);
    // const [query, setQuery] = useState(null)
    // useEffect(() => {
    //     console.log("RENDER")
    //    if(id) {
    //        setFilter("similar")
    //        fetch(`https://api.themoviedb.org/3/movie/${id}/similar${apiKey}&language=en-US`)
    //            .then(response => response.json())
    //            .then(data => {
    //                // if(!data) setFilter("recommendations")
    //                console.log(data)
    //            });
    //    }
    //
    //
    // }, [ id ])

    // function App() {
    //     const [response, loading, hasError] = useFetch("api/data")
    //     return (
    //         <>
    //             {loading ? <div>Loading...</div> : (hasError ? <div>Error occured.</div> : (response.map(data => <div>{data}</div>)))}
    //         </>
    //     )
    // }





    return (
        <div>
            <Title>More Like This</Title>
            <Wrapper>
                <Card>

                </Card> <Card>

            </Card> <Card>

            </Card>
            </Wrapper>
            <Line>
                <Button>show more</Button>
            </Line>
        </div>
    );
};

export default SimilarContent;
