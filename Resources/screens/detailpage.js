function DetailController(_detail) {
    var win = Ti.UI.createWindow({
        title: _detail.title || '',
        backgroundColor: Ti.UI.iOS.COLOR_UNDER_PAGE_BACKGROUND,
        tabBarHidden: true
    });
    
    var scrollView = Ti.UI.createScrollView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        contentHeight: 'auto',
        layout: 'vertical'
    });
    
    var logo = Ti.UI.createImageView({
        width: 300,
        top: 10,
        height: Ti.UI.SIZE,
        image: '/assets/logo_color.png'
    });
    
    scrollView.add(logo);
    
    var titleLabel = Ti.UI.createLabel({
        left: 20,
        right: 20,
        top: 10,
        height: Ti.UI.SIZE,
        font: {
            fontSize: 18,
            fontWeigth: 'bold'
        },
        text: _detail.title
    });
    
    scrollView.add(titleLabel);

    var dateLabel = Ti.UI.createLabel({
        left: 20,
        right: 20,
        top: 10,
        height: Ti.UI.SIZE,
        font: {
            fontSize: 14
        },
        color: '#222',  
        text: _detail.date
    });
    
    scrollView.add(dateLabel);

    var descriptionLabel = Ti.UI.createLabel({
        left: 20,
        right: 20,
        top: 10,
        height: Ti.UI.SIZE,
        font: {
            fontSize: 18
        },
        text: _detail.description ? _detail.description : '' 
    });
    
    scrollView.add(descriptionLabel);

    var openLinkButton = Ti.UI.createButton({
        title: 'View in browser',
        height: Ti.UI.SIZE,
        left: 10, right: 10,
        top: 10
    });
    
    scrollView.add(openLinkButton);
    
    openLinkButton.addEventListener('click', onOpenLinkButton);

    win.add(scrollView);
    
    Ti.API.info(JSON.stringify(_detail));

    function onOpenLinkButton() {
        Ti.Platform.openURL(_detail.url);
    }
    
    this.window = win;
}

module.exports = DetailController;