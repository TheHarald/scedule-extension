
function setData(key,value){
 
    chrome.storage.local.set({schedule: value},function() {
        // console.log(`value is set with key=${key}`);
    })
}

function getData(key){
    chrome.storage.local.get([key], function(result) {
        console.log('Value currently is ' + JSON.stringify(result));
    });
}

export { getData, setData}