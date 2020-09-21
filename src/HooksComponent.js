import React, { useEffect, useRef } from "react";

const HooksComponent = () => {
  const text = useRef(null);

  useEffect(() => {
    if(text.current) {
      text.current.value = "text"
    }
  }, [text])

  // console.log('text', text)
  return (
    <div>
      <input
        type="text"
        ref={text}
      />
    </div>
  );
};

export default HooksComponent;
