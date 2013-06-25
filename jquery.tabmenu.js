(function ($) {
    $.fn.tabmenu = function () {
        var _changeTab = function(parent, selectedTabBodyId){
        
            $(parent).find('li a').each(function(index, element){
                var targetId = $(element).attr('href');
                
                if(targetId === selectedTabBodyId) {
                    $(element).parent().addClass('active');
                    $(targetId).show();
                } else {
                    $(element).parent().removeClass('active');
                    $(targetId).hide();
                }
            });
            
        }

        this.find('li a').click(function () {
            var listItemParent = $(this).parent('li').parent(); //Allows plugin to work on ul and ol
            var selectedTabBodyId = $(this).attr('href');
            
            _changeTab(listItemParent, selectedTabBodyId);
            return false;
        });
        
        // Open first tab
        _changeTab(
            this,
            this.find('li a:first').attr('href')
        );
    };
})(jQuery);
