import React from 'react';
import {SearchContainer,SearchWrapper,SearchH1,SearchPic,SearchPicWrapper} from './SearchElements';
import pic from '../../Images/svg-6.svg';
function Search(){
    return(
        <>
        <SearchContainer id='search'>
            <SearchWrapper>
              <SearchH1> Search-bar </SearchH1>
              <SearchPicWrapper> 
                  <SearchPic src={pic} alt="loading"/>
              </SearchPicWrapper>
            </SearchWrapper>
        </SearchContainer>
        </> 
    );           
}

export default Search;
