function cuelinksJSON(pubID) {
  const bool;
  var url = "https://cdn0.cuelinks.com/api/v1/users/" + pubID + ".json";
  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    throw new Error('CORS not supported');
  }
  xhr.onload = function() {
    text = xhr.responseText;
    let array = JSON.parse(text);
    cueLinks = array.cuelinks_enabled;
    console.log(cueLinks);
    bool = cueLinks;
  };
  
 
  //console.log("enable"+enable);
  xhr.send();

  function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
      // Check if the XMLHttpRequest object has a "withCredentials" property.
      // "withCredentials" only exists on XMLHTTPRequest2 objects.
      xhr.open(method, url, true);

    }else if (typeof XDomainRequest != "undefined") {
      // Otherwise, check if XDomainRequest.
      // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
      xhr = new XDomainRequest();
      xhr.open(method, url);
    } else {
      // Otherwise, CORS is not supported by the browser.
      xhr = null;
    }
    return xhr;
  }
  return bool;
};

export default cuelinksJSON
