import React from "react";
import { Container } from "@mui/system";
import { useSearchParams } from "react-router-dom";

export default () => {

    const [searchParams, setSearchParams] = useSearchParams();

    console.log(searchParams.get("movieName"))

    return(
        <Container>
            Results
        </Container>
    )
}