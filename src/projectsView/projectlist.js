import React from 'react';
import Media from './media.js';
import Play from '../icons/components/play.js'

function Projectlist (props) {
    console.log(props.data);
    const projectlist =props.data.categories[1].playlist
    return(
<div>
  <Play
    size={50}
    color="red"
  />
{
  projectlist.map((item) =>{
    return  <Media {...item} key={item.id}/>
  })
}

</div>
    )
}

export default Projectlist;
