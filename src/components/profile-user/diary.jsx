import * as React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import FilmCard from "../home/film-card.jsx";

export const Diary = () => {
    const [count, setCount] = React.useState("123");
    return (
        <Box>
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"baseline"} color={"#fff"}>
                <Typography variant={"body1"} textTransform={"uppercase"} mt={5}>
                    diary
                </Typography>
                <Typography variant={"caption"} mt={5}>
                    {count}
                </Typography>
            </Box>
            <Divider variant="fullWidth" color={"#fff"} />
            <section className="section">
                <ul className="logged-summary">
                    <li><h3>Mar</h3><dl>
                        <dt>13</dt>
                        <dd><a href="/gooeycheese/film/my-big-fat-greek-wedding/">My Big Fat Greek Wedding</a></dd>
                        <dt>13</dt>
                        <dd><a href="/gooeycheese/film/airplane/">Airplane!</a></dd>
                        <dt>13</dt>
                        <dd><a href="/gooeycheese/film/letter-from-an-unknown-woman/">Letter from an Unknown Woman</a></dd>
                        <dt>12</dt>
                        <dd><a href="/gooeycheese/film/a-matter-of-life-and-death/">A Matter of Life and Death</a></dd>
                        <dt>11</dt>
                        <dd><a href="/gooeycheese/film/the-defiant-ones/">The Defiant Ones</a></dd>
                        <dt>10</dt>
                        <dd><a href="/gooeycheese/film/i-want-you-back/">I Want You Back</a></dd>
                        <dt>9</dt>
                        <dd><a href="/gooeycheese/film/true-heart-susie/">True Heart Susie</a></dd>
                        <dt>7</dt>
                        <dd><a href="/gooeycheese/film/high-and-dizzy/">High and Dizzy</a></dd>
                        <dt>2</dt>
                        <dd><a href="/gooeycheese/film/charade/">Charade</a></dd>
                    </dl></li>
                    <li><h3>Feb</h3><dl>
                        <dt>27</dt>
                        <dd><a href="/gooeycheese/film/baby-face/">Baby Face</a></dd>
                    </dl></li>
                </ul>
            </section>
        </Box>
    );
};