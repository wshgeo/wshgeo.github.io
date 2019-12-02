(function(){
    $(document).ready(function(){
        var documentWidth = parseInt($(window).width());
        var dynamicLoading = {
            css: function(path){
                if(!path || path.length === 0){
                    throw new Error('argument "path" is required !');
                }
                var head = document.getElementsByTagName('head')[0];
                var link = document.createElement('link');
                link.href = path;
                link.rel = 'stylesheet';
                link.type = 'text/css';
                head.appendChild(link);
            },
            js: function(path){
                if(!path || path.length === 0){
                    throw new Error('argument "path" is required !');
                }
                var head = document.getElementsByTagName('head')[0];
                var script = document.createElement('script');
                script.src = path;
                script.type = 'text/javascript';
                head.appendChild(script);
            }
        }
        // var cssPath = documentWidth
        // dynamicLoading.css("../css/wshgeo_pc.css");
        var tabs = config.tab;
        // console.log($("html").css("height"));
        for(var i=0; i<tabs.length; i++){
            var tabParamter = {
                className : config.tabStyleName[tabs[i].style],
                title : tabs[i].title,
                titleImgUrl : tabs[i].titleImgUrl,
                bodyImgUrl: tabs[i].bodyImgUrl,
                bodyHref : tabs[i].bodyHref,
                tabWidthScaler : 0.5
            };
            // tabParamter.tabWidth = (tabs[i].style == "small") ? ((100/tabs.length) + '%') : "50%";
            console.log(i+","+parseInt($(window).width()));
            tabParamter.tabWidth = documentWidth * (tabParamter.tabWidthScaler) -10;
            tabParamter.maxHeight = (documentWidth < 500) ? "350" : "9999";
            tabParamter.tabHeight = tabParamter.tabWidth * 0.75;
            var tabHtmlStr = "<div class='tab "+ tabParamter.className +"' style='width:"+ tabParamter.tabWidth +"px;height:"+ tabParamter.tabHeight +"px;min-width:400px;min-height:300px;max-height:"+ tabParamter.maxHeight +"px;'>";
            tabHtmlStr += "<div class='tab-normal-title'><table align='center'><tr><td>"+ tabParamter.title +"</td></tr><tr><td><img src='"+ tabParamter.titleImgUrl +"'></img></td></tr></table></div>"
            tabHtmlStr += "<a class='tab-normal-body' href='"+ tabParamter.bodyHref +"'><table align='center'><tr><td><img src='"+ tabParamter.bodyImgUrl +"'></img></td></tr></table></a>"
            tabHtmlStr += "</div>"
            var tabHtml= $.parseHTML(tabHtmlStr);
            $(".container").append(tabHtml);
        }
        tabParamter.setTabWidth = this.setTabWidth = function(mode){
            if(!$(".tab").hasClass("tab_"+mode)){
                if(mode == "small"){
                    $(".tab").removeClass("tab-normal");
                    $(".tab").addClass("tab-small");
                    $(".tab-normal-title").addClass("tab-small-title");
                    $(".tab-normal-title").removeClass("tab-normal-title");
                    $(".tab-normal-body").addClass("tab-small-body");
                    $(".tab-normal-body").removeClass("tab-normal-body");
                }
                if(mode == "normal"){
                    $(".tab").removeClass("tab-small");
                    $(".tab").addClass("tab-normal");
                    $(".tab-small-title").addClass("tab-normal-title");
                    $(".tab-small-title").removeClass("tab-small-title");
                    $(".tab-small-body").addClass("tab-normal-body");
                    $(".tab-small-body").removeClass("tab-small-body");
                }
                tabParamter.tabWidthScaler = (mode == "small") ? 1/tabs.length : 0.5;
                tabParamter.tabWidth = documentWidth * (tabParamter.tabWidthScaler) - 10;
                tabParamter.tabHeight = tabParamter.tabWidth * 0.75;
                $(".tab-"+mode).css("width" , tabParamter.tabWidth+"px");
                $(".tab-"+mode).css("height" , tabParamter.tabHeight+"px");
            }
        }
        $(".display-mode").change(function(){
            var display_mode = $(this).children('option:selected').val();
            tabParamter.setTabWidth(display_mode);
        });
    });
})()
