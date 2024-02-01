import { mount } from 'marketing/Marketing';

import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';

const MarketingApp = () => {
  const ref = useRef(null);
  useEffect(()=>{
    mount (ref.current)
  },[])
  return (
    <div ref = {ref}></div>
  )
}

export default MarketingApp
