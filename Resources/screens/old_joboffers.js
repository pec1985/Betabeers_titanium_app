function JobOffersController() {
    var BetaBeers = require('common/com.pec1985.betabeers');
    var TabGroup = require('common/tabgroup').sharedInstance();

    var win = Ti.UI.createWindow();
    var tableView = Ti.UI.createTableView();
    
    tableView.addEventListener('click', onTableViewClick);

    win.add(tableView);
    
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
        BetaBeers.getJobOffers({
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

module.exports = JobOffersController;