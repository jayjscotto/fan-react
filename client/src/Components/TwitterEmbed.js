// TwitterContainer.js
import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { Typography } from '@material-ui/core';

const TwitterContainer = props => {
  return (
    <>
      {props.screenName ? (
        <section className='twitterContainer'>
          <div className='twitter-embed'>
            <TwitterTimelineEmbed
              sourceType='profile'
              screenName={props.screenName}
              options={{
                tweetLimit: '15',
                width: '100%',
                height: '100%'
              }}
              theme='light'
              noHeader='true'
              noBorders='true'
              noFooter='true'
            ></TwitterTimelineEmbed>
          </div>
        </section>
      ) : (
        <Typography
          variant='h3'
          component='h3'
          style={{ margin: 'auto 1em' }}
        >
          Looks like there's nothing here... Link your social networks via the
          Dashboard!
        </Typography>
      )}
    </>
  );
};

export default TwitterContainer;
