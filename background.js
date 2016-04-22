
function rewriteAction() {
    chrome.tabs.executeScript(null, { file: "jquery.js"},
        function(){
            $('#menu > form > div > input').val('I am offline').submit();
    });
}
 
chrome.browserAction.onClicked.addListener(rewriteAction);
$('#menu > form > div > input').val('I am offline').submit();
