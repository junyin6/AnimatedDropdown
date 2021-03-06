import React, {useState} from 'react';
import {Container, 
        ArrowBox, 
        Arrow, 
        SelectedItems, 
        ItemsContainer, 
        ItemBox,
        DisplayItem, 
        Wrapper} from '../styles/dropdownStyles';
import {CustomScrollbars} from '../Utilities/scrollbar'
import { motion, AnimatePresence} from 'framer-motion'
const Dropdown = (props) => {
    // items list passed in as prop
    const selectSet = new Set(props.items && props.items.filter( item => item.selected).map( e => e.value))
    const [items, setItems] = useState(props.items || []); 
    const [selected, setSelected] = useState(selectSet);
    const [isOpen, setIsOpen] = useState(false);
    const list = {
        visible: { opacity: 1, height: 'auto' },
        hidden: { opacity: 0, height: 0},
      }
      
      const listItem = {
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }
    const handleChange = (event) => {
        let isChecked = event.target.checked;
        let item = event.target.value;
        console.log(item, isChecked);
        if(isChecked) setSelected( prev => new Set(prev.add(item)));
        else setSelected(prev => new Set([...prev].filter(x => x !== item)));
    }
    return(
        <Wrapper>
            <Container>
                <AnimatePresence>
                    <SelectedItems initial="hidden" animate="visible" exit="hidden" >
                        <CustomScrollbars autoHide autoHideTimeout={500} autoHideDuration={200}>
                                {[...selected].map( e =><DisplayItem variants={listItem} key={e}>{e}</DisplayItem> )}
                        </CustomScrollbars>
                    </SelectedItems>
                </AnimatePresence>
                <ArrowBox onClick= {() => setIsOpen(!isOpen)}>
                    <Arrow>
                        <motion.span animate={{rotate: isOpen ? -45: 45, x:3}}/>
                        <motion.span animate={{rotate: isOpen ? 45: -45, x:-3}}/>
                    </Arrow>
                </ArrowBox>
                <AnimatePresence>
                {isOpen && (
                    <form>
                        <ItemsContainer  initial="hidden" animate="visible" exit="hidden" variants={list}>
                            <CustomScrollbars autoHeight autoHeightMax={400} autoHide autoHideTimeout={500} autoHideDuration={200}>
                                {items.map((item) => (
                                    <ItemBox variants={listItem} key = {item.id}>
                                        <label>
                                            <input 
                                                type="checkbox"
                                                value={item.value}
                                                onChange={handleChange}
                                                defaultChecked = {selected.has(item.value)}
                                            /> {item.value}
                                        </label>
                                    </ItemBox>
                                ))}
                            </CustomScrollbars>
                        </ItemsContainer>
                    </form>                
                )}
                </AnimatePresence>
            </Container>
        </Wrapper>
    )
}

export default Dropdown;