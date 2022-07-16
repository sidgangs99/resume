import React, { useEffect, useRef, useState } from "react";
import { Link, navigate } from "gatsby";

// styles
const pageStyles = {
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundColor: "#000000",
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
};

const titleStyles = {
  color: "#bef264",
  fontSize: "100px",
  width: "50%",
};

const textStyles = {
  display: "flex",
  color: "#bef264",
  fontSize: "15px",
  width: "50%",
};

const buttonStyles = {
  color: "#f87171",
  border: "1px solid #f87171",
  padding: "0.5rem 2rem",
  borderRadius: "10px",
  // width: "10rem",
  margin: "3rem 0rem",
};

const buttonTextStyles = {
  width: "50%",
  marginTop: "3rem",
};

const timerStyle = {
  color: "#f87171",
  fontSize: "15px",
  padding: "0rem 0.5rem",
};

// markup
const NotFoundPage = () => {
  const Ref = useRef(null);

  // The state for our timer
  const [timer, setTimer] = useState("00:00:07");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the beginning of the variable
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }

    if (total === 1) navigate("/");
  };

  useEffect(() => {
    if (timer === "00:00:00") {
      console.log(true);
      navigate("/");
    }
  }, [timer]);

  const clearTimer = (e) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setTimer("00:00:07");

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    // This is where you need to adjust if
    // you entend to add more time
    deadline.setSeconds(deadline.getSeconds() + 7);
    return deadline;
  };

  // We can use useEffect so that when the component
  // mount the timer will start as soon as possible

  // We put empty array to act as componentDid
  // mount only
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  return (
    <main style={pageStyles}>
      <div style={titleStyles}>404</div>
      <div style={textStyles}>
        The page you are looking is still under progress ......
      </div>
      <div style={textStyles}>
        Let's get you back in: <div style={timerStyle}>{timer}</div>
      </div>
      <div style={buttonTextStyles}>
        <Link to="/" style={buttonStyles}>
          Go Back
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
