function ServerCall(params) {
    
    if(!Ti.Network.online) {
        Ti.UI.createAlertDialog({
            title: 'Error',
            message: 'Internet connection required'
        }).show();
        return;
    }
    
    var feed = params.feed;
    var onSuccess = params.onSuccess;
    var onError = params.onError;
    
    var xhr = Ti.Network.createHTTPClient();
    
    xhr.onload = function() {
        onSuccess( JSON.parse(this.responseText) );        
    };
    xhr.onerror = function() {
        onError({ message: 'Error'});            
    }

    xhr.open('GET', 'http://betabeers.com/' + feed + '/feed/?json');
    xhr.send();   
}

exports.getEvents = function(params) {
    var onSuccess = params.onSuccess || function(){};
    var onError = params.onError || function(){};
    
    ServerCall({
        feed: 'event',
        onSuccess: onSuccess,
        onError: onError
    });
}

exports.getJobOffers = function(params) {
    var onSuccess = params.onSuccess || function(){};
    var onError = params.onError || function(){};
    
    ServerCall({
        feed: 'post',
        onSuccess: onSuccess,
        onError: onError
    });
}

exports.getCourses = function(params) {
    var onSuccess = params.onSuccess || function(){};
    var onError = params.onError || function(){};
    
    ServerCall({
        feed: 'curso',
        onSuccess: onSuccess,
        onError: onError
    });    
}
