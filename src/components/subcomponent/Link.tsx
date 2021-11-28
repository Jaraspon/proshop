import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';


interface NewsFeedItemProps {
   to:string,
   style:string
}


const Link: NextPage<NewsFeedItemProps> = ({ to, style, children }) => {
   const router = useRouter();
   return (
      <div>
         <a onClick={() => router.push(`${to}`)} className={`${style}`}>{children}</a>
      </div>
   )
}

export default Link

