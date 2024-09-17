import React from "react";
import CountUp from "react-countup";

const NumberAnimation = ({
  start = 0,
  end = 100,
  duration = 2,
  suffix = "+",
  prefix = "-",
}) => {
  return (
    <div>
      <h2>
        <CountUp
          start={start}
          end={end}
          duration={duration}
          suffix={suffix}
          prefix={prefix}
        />
      </h2>
    </div>
  );
};

export default NumberAnimation;
