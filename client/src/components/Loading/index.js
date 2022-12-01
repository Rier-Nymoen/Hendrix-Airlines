import React from 'react';
import hendrix_cube from "../../gifs/hendrix_cube.gif";
import airport_loading from "../../images/airport_loading.jpg";
import {LoadingGif,
    PageBody,
    PageWrap,
    LoadingText,
    BgImg
} from "./LoadingElements";


const Loading = () => {
    return (
        <PageWrap>
            <BgImg src={airport_loading} alt="airport_loading" />
            <PageBody>
                <LoadingText>Loading...</LoadingText>
            </PageBody>
            <LoadingGif src={hendrix_cube} alt="hendrix_cube" />
        </PageWrap>
    );
};

export default Loading;
