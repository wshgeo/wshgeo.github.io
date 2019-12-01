(function(){
    $(document).ready(function(){
        console.log(this.config);
        var tabs = config.tab;
        console.log($("html").css("height"));
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
            var tabHtmlStr = "<div class='"+ tabParamter.className +"' style='width:"+ tabParamter.tabWidth +";height:100%;'>";
            tabHtmlStr += "<div class='tab-normal-title'><table align='center'><tr><td>"+ tabParamter.title +"</td></tr><tr><td><img src='"+ tabParamter.titleImgUrl +"'></img></td></tr></table></div>"
            tabHtmlStr += "<a class='tab-normal-body' href='"+ tabParamter.bodyHref +"'><table align='center'><tr><td><img src='"+ tabParamter.bodyImgUrl +"'></img></td></tr></table></a>"
            tabHtmlStr += "</div>"
            var tabHtml= $.parseHTML(tabHtmlStr);
            $(".container").append(tabHtml);
        }
    });
})()