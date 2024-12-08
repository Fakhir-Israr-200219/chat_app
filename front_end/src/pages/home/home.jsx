
import React from 'react';
import Main_Side_Bar from './components/main_side_bar';
import Chat_bar from './components/chat_bar';
import Chat_Area from './components/chat_area';

const Home = () => {
    return (
        <>
        <div className='
        border-4
        border-neutral-500
        rounded-md
        flex
        justify-start
        flex-row
        h-[48rem]
        bg-slate-200
      '>
            <Main_Side_Bar/>
            <Chat_bar/>
            <Chat_Area/>
        </div>
      
        </>
    );
}

export default Home;