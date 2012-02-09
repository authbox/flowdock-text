var testers = {
  getTester: function(suite, section){
    switch (suite) {
      case "autolink":
        switch (section) {
        case "urls":
          return function(test) {
          return FlowdockText.autoLinkUrlsCustom(test.text);
        };
        case "hashtags":
          return function(test) {
          return FlowdockText.autoLinkHashtags(test.text);
        };
        case "usernames":
          return function(test) {
          return FlowdockText.autoLinkMentions(test.text);
        };
        case "lists":
          return function(test) {
          return FlowdockText.autoLinkUsernamesOrLists(test.text);
        };
        case "all":
          return function(test) {
          return FlowdockText.autoLink(test.text);
        };
      }
      case "extract":
        switch (section) {
        case "mentions":
          return function(test) {
          return FlowdockText.extractMentions(test.text);
        };
        case "mentions_with_predefined_usertags":
          return function(test) {
          return FlowdockText.extractMentions(test.text, ["@username", "@everyone", "@everybody", "@all", "@anyone", "@anybody"]);
        };
        case "mentions_with_indices":
          return function(test) {
          return FlowdockText.extractMentionsWithIndices(test.text);
        };
        case "mentions_with_indices_with_predefined_usertags":
          return function(test) {
          return FlowdockText.extractMentionsWithIndices(test.text, ["@username", "@everyone", "@everybody", "@all", "@anyone", "@anybody"]);
        };
        case "mentions_or_lists_with_indices":
          return function(test) {
          var results = FlowdockText.extractMentionsOrListsWithIndices(test.text);
          return results.map(function(res) {
            res['screen_name'] = res.screenName;
            res['list_slug'] = res.listSlug;
            delete res.screenName;
            delete res.listSlug;
            return res;
          });
        };
        case "replies":
          return function(test) {
          return FlowdockText.extractReplies(test.text);
        };
        case "urls":
          return function(test) {
          return FlowdockText.extractUrls(test.text);
        };
        case "urls_with_indices":
          return function(test) {
          return FlowdockText.extractUrlsWithIndices(test.text);
        };
        case "hashtags":
          return function(test) {
          return FlowdockText.extractHashtags(test.text);
        };
        case "hashtags_with_indices":
          return function(test) {
          return FlowdockText.extractHashtagsWithIndices(test.text);
        };
      }
      case "hit_highlighting":
        return function(test) {
        return FlowdockText.hitHighlight(test.text, test.hits);
      };
      case "validate":
        switch (section) {
        case "tweets":
          return function(test) {
          return FlowdockText.isValidTweetText(test.text);
        };
        case "usernames":
          return function(test) {
          return FlowdockText.isValidUsername(test.text);
        };
        case "lists":
          return function(test) {
          return FlowdockText.isValidList(test.text);
        };
        case "hashtags":
          return function(test) {
          return FlowdockText.isValidHashtag(test.text);
        };
        case "urls":
          return function(test) {
          return FlowdockText.isValidUrl(test.text);
        };
        case "urls_without_protocol":
          return function(test) {
          return FlowdockText.isValidUrl(test.text, true, false);
        };
      }
    }
  }
};
if(exports){
  exports.testers = testers;
}
