function EventsController() {
    var BetaBeers = require('common/com.pec1985.betabeers');
    var TabGroup = require('common/tabgroup').sharedInstance();
    
    var refreshButton = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.REFRESH
    });
    
    var win = Ti.UI.createWindow({
        backgroundColor: '#ccc',
        rightNavButton: refreshButton
    });
    
    var tableView = Ti.UI.createTableView({
        data: [
            { title: 'Loading...' }
        ]
    });
    
    win.add(tableView);
    
    refreshButton.addEventListener('click', refreshPage);
    tableView.addEventListener('click', onTableViewClick);
    function populateTable(json) {
        if(json && json.length > 0) {
            var tableData = [];
            for(var i = 0, len = json.length; i < len; i++) {
                tableData.push({
                    title: json[i].title,
                    hasChild: true,
                    info: json[i]
                });
            }
            tableView.setData(tableData);
        } 
    }
    
    function refreshPage() {
        BetaBeers.getEvents({
            onSuccess: function(result){
                populateTable(result)
            },
            onError: function(a){
                alert(a)
            }
        });
    }
    
    function onTableViewClick(e) {
        alert(e.rowData.info);
    }
    
    refreshPage();
    
    this.window = win;
}


module.exports = EventsController;