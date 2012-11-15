var tabGroup = null;

function TabGroup() {
    this._tabGroup = Ti.UI.createTabGroup();
    this._tab = {};
}

TabGroup.prototype.addTab = function(_params) {

    var params = {};
        params.title    = _params.title || '';
        params.icon     = _params.icon || '';
        params.window   = _params.controller.window;
        params.window.title = params.title;
    var name = params.title.toLowerCase();    
    
    this._tab[name] = Ti.UI.createTab(params);
    this._tabGroup.addTab(this._tab[name]);
}

TabGroup.prototype.openInTab = function(_name, _controller) {
    this._tab[_name.toLowerCase()].open(_controller.window)
}

TabGroup.prototype.open = function() {
    this._tabGroup.open();
}

TabGroup.prototype.close = function() {
    this._tabGroup.close();
    tabGroup = null;
}

TabGroup.sharedInstance = function(){
    if(tabGroup == null) {
        tabGroup = new TabGroup();
    }
    return tabGroup;
}

module.exports = TabGroup;
