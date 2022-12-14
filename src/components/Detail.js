import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import db from '../firebase';

function Detail() {
    const { id } = useParams();
    const [detailData, setDetailData] = useState({});
    useEffect(() => {
        db.collection("movies").doc(id)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    setDetailData(doc.data());
                } else {
                    console.log("داشم پیدا نشد داده چرتت");
                }
            }).catch(error => {
                console.log("error finding doc:", error);
            })

    }, [id]);
    return (
        <Container>
            <BackGround>
                <img src={detailData.backgroundImg} alt={detailData.title} />
            </BackGround>
            <ImageTitle>
                <img src={detailData.titleImg} alt="" />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt="" />
                    <span>Play</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" alt="" />
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" alt="" />
                </GroupWatchButton>
            </Controls>
            <SubTitle>
               {detailData.subTitle}
            </SubTitle>
            <Description>
                {detailData.description}
            </Description>
        </Container>
    )
}
export default Detail;

const Container = styled.div`
    min-height:calc(100vh - 70px);
    padding:calc(3.5vw - 5px);
    position:relative;

`
const BackGround = styled.div`
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index: -1;
    opacity:0.8;
    img {
        width:100%;
        height:100%;
        object-fit:cover;
        
    }


`
const ImageTitle = styled.div`
    height:30vh;
    min-height:170px;
    width:25vw;
    min-width:200px;

    img {
        width:100%;
        height:100%;
        object-fit:contain;
    }
`
const Controls = styled.div`
    display:flex;
    align-items:center;

`
const PlayButton = styled.button`
    border-radius:4px;
    font-size:15px;
    display:flex;
    align-items:center;
    height: 56px;
    background-color:rgb(249 , 249, 249);
    border:none;
    padding:0px 24px;
    margin-right:10px;
    letter-spacing:1.8px;
    cursor:pointer;
    text-transform:uppercase;
    &:hover {
        background-color: rgb(198 ,198 ,198)
    }
`
const TrailerButton = styled(PlayButton)`
    background-color:rgb(0 , 0, 0 ,0.3);
    border: 1px solid rgb(249 ,249 ,249);
    color: rgb(249, 249, 249);
    &:hover {
        background-color: rgb(198 ,198 ,198)
    }
`
const AddButton = styled.button`
    margin-right:16px;   
    width:44px;
    height:44px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    border:2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cusor:pointer;
    span {
        font-size: 30px;
        color:white;
    }
`
const GroupWatchButton = styled(AddButton)`
    background-color: rgba(0, 0, 0, 0.8);
`
const SubTitle = styled.div`
    color:rgb(249, 249, 249);
    font-size:15px;
    min-height:20px;
    margin-top:26px;
`
const Description = styled.div`
    line-height:1.4;
    color:rgb(249, 249, 249);
    font-size:20px;
    margin-top:16px;
    width:50vw;

`