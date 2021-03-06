import styled from 'styled-components'
import {motion} from 'framer-motion'
export const Wrapper = styled.div`
    position: absolute;
    width: 20vw;
    left: 50%;
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
`
export const Container = styled.div`
    position: relative;
    height:40px;
    width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* border: 2px solid transparent; */
    border-radius: 3px; 
    background-color: #131113;
`
export const ArrowBox = styled.div`
   position: absolute;
   width: 30px;
   height: 100%;
   right: 0px;
   top: 0px;
   margin: 0;
   padding: 0;
   border-radius: 3px; 
   display: inline-block;
   background: #131113;
`
export const SelectedItems = styled(motion.div)`
    position: relative;
    display: flex;
    flex-direction: row;
    height: 100%; 
    width: 90%;
    padding-left: 4px ;
    align-items: center;
    justify-content: flex-start;
    overflow: auto;
    overflow-y: hidden;
`
export const ItemsContainer = styled(motion.ul)`
    position: relative;
    top: 0;
    max-height: 40vh;
    margin-top: 0px;
    padding: 0;
    overflow: scroll;
    list-style-type: none;
    background-color: #131113;
    border-radius: 0px 0px 5px 5px;
    overflow: auto;
    overflow-x: hidden;
    overflow-y:hidden;
`
export const ItemBox = styled(motion.li)`
    border-bottom: 1px solid #0084ff;
    padding:6px;
    padding-left: 20px;
`
export const Arrow = styled(motion.div)`
    display: flex;
    align-items: center;
    height: 100%;
    margin-right: 8px;
    span{
        width: 14px;
        height: 4px;
        background: #0084ff;
        transition: 0.1 ease-in-out;
    }
`
export const DisplayItem = styled(motion.span)`
    position: relative;
    height: 60%;
    padding: 2px;
    top: 10px;
    margin-right: 2px;
    color: #131113;
    background-color: #0084ff;
    border: 1px solid transparent;
    border-radius: 3px;
    
`


