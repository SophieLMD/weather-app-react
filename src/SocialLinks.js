import React from "react";
export default function SocialLinks() {
  return (
    <footer>
      Coded by {}
      <a href="https://github.com/SophieLMD" target="blank">
        Sophie Davies
      </a>
      , open sourced on {}
      <a
        href="https://github.com/SophieLMD/weather-forecast-app"
        target="blank"
      >
        Github {}
      </a>
      and website hosted on {}
      <a
        href="https://weather-forecasting-app-slmd.netlify.app/"
        target="blank"
      >
        Netlify
      </a>
    </footer>
  );
}
