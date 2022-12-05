import React, { useEffect } from 'react'
import styled from 'styled-components';
import { auth, provider } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectUserEmail,
    selectUserName,
    selectUserPhoto,
    setSignOutState,
    setUserLoginDetails
} from '../features/user/userSlice';
import { useHistory } from 'react-router';
function Header() {

    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user);
                history.push("/home");
            }
        });
    }, [userName]);
    const handleAuth = () => {
        if (!userName) {
            auth.signInWithPopup(provider)
                .then(result => setUser(result.user))
                .catch(error => { console.log(error.message) });
        } else if (userName) {
            auth.signOut().then(() => {
                dispatch(setSignOutState());
                history.push("/")
            }).catch(error => alert(error.message))
        }
    }

    const setUser = user => {
        dispatch(setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
        }))
    }
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            {!userName ? <>
                <NavMenu></NavMenu>
                <LoginBtn onClick={handleAuth}>Login</LoginBtn>
            </> :
                <>
                    <NavMenu>
                        <a>
                            <img src="/images/home-icon.svg" />
                            <span>Home</span>
                        </a>

                        <a>
                            <img src="/images/search-icon.svg" />
                            <span>Search</span>
                        </a>

                        <a>
                            <img src="/images/watchlist-icon.svg" />
                            <span>WhatchList</span>
                        </a>

                        <a>
                            <img src="/images/original-icon.svg" />
                            <span>original</span>
                        </a>

                        <a>
                            <img src="/images/movie-icon.svg" />
                            <span>Movie</span>
                        </a>

                        <a>
                            <img src="/images/series-icon.svg" />
                            <span>Series</span>
                        </a>
                    </NavMenu>
                    <SignOut>
                        <UserImg src={userPhoto} alt={userName} />
                        <DropDown>
                            <span onClick={handleAuth}>Sign out</span>
                        </DropDown>
                    </SignOut>
                </>
            }

        </Nav>
    )
}

export default Header;

const Nav = styled.nav`
    height:70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding:0 36px;
    overflow-x:hidden;
`
const Logo = styled.img`
    width :80px;
    

`
const NavMenu = styled.div`
    display:flex;
    flex: 1;
    margin-left:25px;
    cursor:pointer;
    align-items:center;

    a {
        display:flex;
        align-items:center;
        padding: 0 12px;
        img {
            height:20px;

        }
        span {
            text-transform:uppercase;
            font-size:13px;
            letter-spacing:1.4px;
            position: relative;


            &:after {
                content:"";
                height:2px;
                background:white;
                position:absolute;
                left:0;
                right:0;
                bottom:-6px;
                opacity:0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25 , 0.46 , 0.45 , 0.94) 0s;
                transform: scaleX(0);


            }
        }
        &:hover {
            span:after {
                opacity: 100%;
                transform: scaleX(1);
            }
        }
    }
    
`
const UserImg = styled.img`
    height:100%;
`
const LoginBtn = styled.button`
    width:80px;
    font-size:18px;
    background-color: rgb(0, 0, 0,0.8);
    border: 2px solid rgb(249, 249, 249,0.6);
    border-radius:5px;
    color:rgb(249, 249, 249,0.8);
    height:40px;
    cursor:pointer;
    
    &:hover {
        color:rgb(249, 249, 249,1);
        border-color:rgb(249, 249, 249, 1);
    }
`
const DropDown = styled.div`
    position:absolute;
    top:48px;
    right:10px;
    background; rgb(19, 19, 19);
    border: 1px solid rgba(151,151,151,0.34);
    border-radius:4px;
    box-shadow: rgb(0 0 0/50%) 0px 0px 18px 0px;
    padding:10px;
    font-size:14px;
    letter-spacing:3px;
    width:100px;
    opacity:0;
    
   
   
`
const SignOut = styled.div`
  
    height:48px;
    width:48px;
    display:flex;
    cursor:pointer;
    align-items:center;
    justify-content:center;
    ${UserImg} {
        width:100%;
        height:100%;
        border-radius: 50%;
        cursor:pointer;
    }
    &:hover {
        ${DropDown} {
            opacity:1;
            transition-duration: 1s;
        }
    }

`