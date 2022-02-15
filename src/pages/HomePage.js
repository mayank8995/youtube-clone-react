import React, { useState } from 'react';
import Mediaslider from 'ui/MediaSlider';
import Sidebar from 'ui/Sidebar';

import Header from '../ui/Header'

function HomeScreen() {
  const [isToggledSidebar, setIsToggledSideBar] = useState(true);
  return (
    <div>
     <Header 
        onClickMenu={() => setIsToggledSideBar((isToggled) => !isToggled)}
      />
      <Sidebar 
        toggleSidebar={isToggledSidebar}
      />
      <Mediaslider
        mediaType="tv"
        title="Youtube"
        path="/discover/tv"
        params={{ with_networks: 213 }}
        isLarge
      />
    </div>
  );
}

export default HomeScreen;
