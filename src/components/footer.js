import React from 'react';
import { List, ListInlineItem } from 'reactstrap';
import styled from 'styled-components'

const Footer =  styled.div`
position: fixed;
left: 0;
bottom: 0;
width: 100%;
margin-left:1vw;
`
const ListInlineItem1 =  styled(ListInlineItem)`
border-bottom:1px solid black;

`
function NavComponent() {
  return (
   <Footer>
        <List type="inline">
      <ListInlineItem1><a href="https://www.linkedin.com/in/jonathan-lee-905152174/" style={{textDecoration:'none',color:'black'}}>Linkedin</a></ListInlineItem1>
      <ListInlineItem1><a href="https://www.instagram.com/jonathannnleee/" style={{textDecoration:'none',color:'black'}}>Instagram</a></ListInlineItem1>
      <ListInlineItem1><a href="mailto:jonathanlee543211@gmail.com" style={{textDecoration:'none',color:'black'}}>Email</a></ListInlineItem1>
    </List>
   </Footer>
    
  );
}

export default NavComponent; 