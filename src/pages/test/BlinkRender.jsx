import React, {
  useState,
  // useEffect,
  useLayoutEffect
} from "react";
  
const BlinkyRender = () => {
  const [value, setValue] = useState(0);
  
  useLayoutEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);

  // useEffect(() => {
  //   if (value === 0) {
  //     setValue(10 + Math.random() * 200);
  //   }
  // }, [value]);
  
  console.log("render", value);
  
  return (<div style={{ height: 200}}>
    <div 
      style={{ border:"1px solid red", padding:4}}
      onClick={() => setValue(0)}>
        value: {value}
    </div>
  </div>);
};

export default BlinkyRender;