(function(){
    $(document).ready(function(){
        var tabs = config.tab;
        // console.log($("html").css("height"));
        for(var i=0; i<tabs.length; i++){
            var tabParamter = {
                className : config.tabStyleName[tabs[i].style],
                title : tabs[i].title,
                titleImgUrl : tabs[i].titleImgUrl,
                bodyImgUrl: tabs[i].bodyImgUrl,
                bodyHref : tabs[i].bodyHref,
                tabWidth : "50%"
            };
            tabParamter.tabWidth = (tabs[i].style == "small") ? ((100/tabs.length) + '%') : "50%";
            tabParamter.maxHeight = ($("html").css("width") < "500px") ? "350px" : "9999px";
            var tabHtmlStr = "<div class='"+ tabParamter.className +"' style='width:"+ tabParamter.tabWidth +";height:100%;min-width:400px;max-height:"+ tabParamter.maxHeight +"'>";
            tabHtmlStr += "<div class='tab-normal-title'><table align='center'><tr><td>"+ tabParamter.title +"</td></tr><tr><td><img src='"+ tabParamter.titleImgUrl +"'></img></td></tr></table></div>"
            tabHtmlStr += "<a class='tab-normal-body' href='"+ tabParamter.bodyHref +"'><table align='center'><tr><td><img src='"+ tabParamter.bodyImgUrl +"'></img></td></tr></table></a>"
            tabHtmlStr += "</div>"
            var tabHtml= $.parseHTML(tabHtmlStr);
            $(".container").append(tabHtml);
        }
        tabParamter.setTabWidth = this.setTabWidth = function(mode){
            tabParamter.tabWidth = (mode == "small") ? ((100/tabs.length) + '%') : "50%";
            $("."+tabParamter.className).css("width",tabParamter.tabWidth);
        }
        $(".display-mode").change(function(){
            var display_mode = $(this).children('option:selected').val();
            tabParamter.setTabWidth(display_mode);
        });
    });
})()
