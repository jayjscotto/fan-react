// TwitterContainer.js
import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const TwitterContainer = () => {
  return (
    <section className="twitterContainer">
      <div className="twitter-embed">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="JasonScotto"
          options={{
            tweetLimit: "15",
            width: "100%",
            height: "100%"
          }}
          theme="light"
          noHeader="true"
          noBorders="true"
          noFooter="true"
        ></TwitterTimelineEmbed>
      </div>
    </section>
  );
};

export default TwitterContainer;