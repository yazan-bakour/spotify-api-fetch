import React from 'react';
import { Avatar } from '@timechimp/tacugama';

export default function Profile({ me }) {
  
  return (
    <div className="sidebar__profile">
      <Avatar
        src={me?.data?.images[0]?.url}
        height='70px'
        size='100%'
        name="John Doe"
        type="default"
      />
      <p>{ me?.data?.display_name }</p>
    </div>
  );
}