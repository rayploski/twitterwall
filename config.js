var config = {
  // Twitter API (Proxy) URL
  //baseUrl: 'http://twitterproxy-jbossdeveloper.rhcloud.com',
  baseUrl: "",
  debug: true,
  title: 'DevNation Twitter Wall',

  //list: 'DevNationConf/speakers14',
  search: 'from:@devnationconf OR #devnation OR devnation.org OR #devnation14',
  timeline: '@devnationconf',

  timings: {
    showNextScheduleEarlyBy: '5m', // show the next schedule 10 minutes early
    defaultNoticeHoldTime: '25s',
    showTweetsEvery: '3s'
  }
};

// allows reuse in the node script
if (typeof exports !== 'undefined') {
  module.exports = config;
}
