ppsEmbedObject={};jQuery(document).ready(function($){var formClass={jetPack:'.contact-form-submission',gravityForms:'.gform_wrapper .validation_error, .gform_confirmation_message',contactForms:'.wpcf7-validation-errors, .wpcf7-mail-sent-ok'};jQuery('.pps-popup').each(function(index,element){var data=jQuery(this).data('popuppress');var ids=jQuery('[id=\''+this.id+'\']');if(ids.length>1){ids.slice(1).remove();}
var idPopup=jQuery(this).attr('id').replace('popuppress-','');var popup=jQuery("#popuppress-"+idPopup);var $wp_video=popup.find('.wp-video');if($wp_video.length){if($wp_video.find('video').first().attr('autoplay')!==undefined){$wp_video.find('video').trigger('pause');}}
manageWidthsPopupPress(idPopup);if(jQuery(this).find(formClass.jetPack+','+formClass.gravityForms+','+formClass.contactForms).length){jQuery(document).ready(function(){if(jQuery('.pps-button-popup-'+idPopup).length){jQuery('.pps-button-popup-'+idPopup).trigger('click');}
else if(jQuery('a[href*="pps-button-popup-'+idPopup+'"]').length){jQuery('a[href*="pps-button-popup-'+idPopup+'"]').trigger('click');}else if(data.class_run&&jQuery('.'+data.class_run).length){jQuery('.'+data.class_run).trigger('click');}});}});jQuery('.pps-popup .pps-btn').on('click',function(e){e.preventDefault();idPopupParent=jQuery(this).closest('.pps-popup').attr('id').replace(/[^0-9\.]/g,'');});jQuery('a.restore-views').on('click',function(e){e.preventDefault();idPopup=jQuery(this).attr('href').replace('?popup_id=','');if(confirm("Really you want restore values?"))
updateViewsPopupPress(idPopup,"restore");});$(window).on("resize",function(event){var popup=jQuery('.pps-popup').last();if(popup.css('display')=='block'){var id=popup.attr('id').replace('popuppress-','');manageResponsiveVideoPopupPress(id);manageWidthsPopupPress(id);manageHeightsPopupPress(id,'.pps-embed',100);manageHeightsPopupPress(id,'.pps-iframe',100);manageHeightsPopupPress(id,'.pps-pdf',100);}});});function onStartSliderPopupPress(id){var popup=jQuery("#popuppress-"+id);if(popup.find('.popupslider').length){lazyLoadContentPopupPress(id);}}
function beforeSliderPopupPress(id){var popup=jQuery("#popuppress-"+id);setHeightContentPopupPress(id);removeLazyLoadContentPopupPress(id);}
function afterSliderPopupPress(id,pps_popup){var popup=jQuery("#popuppress-"+id);lazyLoadContentPopupPress(id);pps_popup.reposition(180);}
function openedPopupPress(id){var popup=jQuery("#popuppress-"+id);var formClass={jetPack:'.contact-form-submission',gravityForms:'.gform_wrapper .validation_error, .gform_confirmation_message',contactForms:'.wpcf7-validation-errors, .wpcf7-mail-sent-ok'};if(popup.find(formClass.jetPack+','+formClass.gravityForms+','+formClass.contactForms).length){repositionPopupPress(id);}}
function onOpenPopupPress(id){var popup=jQuery("#popuppress-"+id);var pps_data=popup.data('popuppress');manageResponsiveVideoPopupPress(id);popup.find('video,audio').trigger('pause');setTimeout(function(){updateOverflowPopupPress(id,0);},50);if(isMobile.any){popup.addClass('pps-mobile');}
lazyLoadContentPopupPress(id);if(pps_data.close_mouseleave=='true'){popup.mouseleave(function(){popup.bPopup().close();jQuery('.b-modal').remove();removeLazyLoadContentPopupPress(id);});}
if(popup.find('.pps-direction-nav').length){popup.find('.pps-wrap').append(popup.find('.pps-direction-nav'));}
if(popup.find('.pps-control-nav').length){popup.find('.pps-wrap').append(popup.find('.pps-control-nav'));}
updateViewsPopupPress(id);popup.trigger("ppsOnOpen");}
function manageResponsiveVideoPopupPress(id){var popup=jQuery("#popuppress-"+id);var device_width=jQuery(window).width();var $wp_video=popup.find('.wp-video');if($wp_video.length){if(device_width<=$wp_video.width()){$wp_video.addClass('pps-responsive-video');}else{$wp_video.removeClass('pps-responsive-video');}
if($wp_video.find('video').first().attr('autoplay')!==undefined){setTimeout(function(){$wp_video.find('video').trigger('play');},50);}}}
function lazyLoadSliderImagesPopupPress(id){var popup=jQuery("#popuppress-"+id);if(popup.find('.pps-content').hasClass('pps-images-loaded')){return;}
var $items=popup.find('.pps-img-slider');$items.each(function(index,el){jQuery(el).attr('src',jQuery(el).closest('.pps-item-content').data('src'));});popup.find('.pps-content').addClass('pps-images-loaded');}
function lazyLoadContentPopupPress(id){var popup=jQuery("#popuppress-"+id);var $li;if(popup.find('.pps-single-popup').length){$li=popup.find('.pps-single-popup > li');}else{$li=popup.find('.popupslider > ul > li.pps-active-slide');}
if($li.find('.pps-embed').length&&!$li.find('.pps-embed').hasClass('pps-embed-loaded')){lazyLoadEmbedPopupPress($li);}
if($li.find('.pps-iframe').length&&!$li.find('.pps-iframe').hasClass('pps-iframe-loaded')){lazyLoadIframePopupPress($li);}
if($li.find('.pps-pdf').length&&!$li.find('.pps-pdf').hasClass('pps-pdf-loaded')){lazyLoadPdfPopupPress($li);}}
function removeLazyLoadContentPopupPress(id){var popup=jQuery("#popuppress-"+id);var $li;if(popup.find('.pps-single-popup').length){$li=popup.find('.pps-single-popup > li');}else{$li=popup.find('.popupslider > ul > li.pps-active-slide');}
if($li.find('.pps-embed').length){removeLazyLoadEmbedPopupPress($li,id);}
if($li.find('.pps-iframe').length){removeLazyLoadIframePopupPress($li,id);}
if($li.find('.pps-pdf').length){}}
function lazyLoadEmbedPopupPress($li){var $pps_embed=$li.find('.pps-embed');$pps_embed.append('<span class="pps-loading"></span>');$pps_embed.find('iframe').first().attr('src',$pps_embed.data('src'));$pps_embed.addClass('pps-embed-loaded');setTimeout(function(){$pps_embed.find('.pps-loading').remove();},2500);}
function lazyLoadIframePopupPress($li){var $pps_iframe=$li.find('.pps-iframe');$pps_iframe.append('<span class="pps-loading"></span>');$pps_iframe.find('iframe').first().attr('src',$pps_iframe.data('src'));$pps_iframe.addClass('pps-iframe-loaded');setTimeout(function(){$pps_iframe.find('.pps-loading').remove();},1500);}
function lazyLoadPdfPopupPress($li){var $pps_pdf=$li.find('.pps-pdf');$pps_pdf.append('<span class="pps-loading"></span>');$pps_pdf.find('iframe').first().attr('src','//docs.google.com/gview?embedded=true&url='+$pps_pdf.data('src'));$pps_pdf.addClass('pps-pdf-loaded');setTimeout(function(){$pps_pdf.find('.pps-loading').remove();},1500);}
function removeLazyLoadEmbedPopupPress($li){var $pps_embed=$li.find('.pps-embed');$pps_embed.find('iframe').first().attr('src','about:blank');$pps_embed.removeClass('pps-embed-loaded');}
function removeLazyLoadIframePopupPress($li){var $pps_iframe=$li.find('.pps-iframe');$pps_iframe.find('iframe').first().attr('src','about:blank');$pps_iframe.removeClass('pps-iframe-loaded');}
function updateOverflowPopupPress(id,time){setTimeout(function(){var popup=jQuery("#popuppress-"+id);var popupHeight=popup.height();var contentHeight=popup.find('.pps-wrap').height();if(popup.find('li.pps-active-slide img.pps-img-slider').length){return;}
if(popup.find('li.pps-active-slide .pps-embed iframe').length){return;}
if(popup.find('.pps-header').length){popup.find('.pps-content').css({'height':contentHeight-popup.find('.pps-header h3').outerHeight(true),});}else{popup.find('.pps-content').css({'height':'100%',});}
popup.find('.pps-content').css('overflow','auto');},time);}
function manageWidthsPopupPress(id){var popup=jQuery("#popuppress-"+id);var pps_data=popup.data('popuppress');var device_width=jQuery(window).width();if(pps_data.width_units=='px'){if(pps_data.width>=(device_width-40)){popup.addClass('pps-width-overflow');}else{popup.removeClass('pps-width-overflow');}}else{var newWidth=parseInt((device_width*(pps_data.width)/100));if(device_width>600){popup.removeClass('pps-width-overflow');popup.css({'width':newWidth+'px',});}else{popup.addClass('pps-width-overflow');}}}
function setHeightContentPopupPress(id){var popup=jQuery("#popuppress-"+id);popup.find('li.pps-item-content').each(function(index,el){var $li=jQuery(el);if($li.find('.pps-iframe').length||$li.find('.pps-pdf').length||$li.find('.pps-embed').length){var $iframe=$li.find('iframe').first();var height=$iframe.parent().data('height');var headerHeight=0;if(popup.find('.pps-header').length){headerHeight=popup.find('.pps-header h3').outerHeight(true);}
if(!isNaN(height)){if(height==100){height=popup.find('.pps-wrap').height();}
height=height-headerHeight;$iframe.css({'height':height});}}});}
function manageHeightsPopupPress(id,medio,height){var popup=jQuery("#popuppress-"+id);setTimeout(function(){var popupHeight=popup.height();var contentHeight=popup.find(medio).height();var deviceHeight=jQuery(window).height();if(popup.find(medio).find('iframe').length){var newContentHeight=contentHeight;if(height==100){newContentHeight=popup.find('.pps-wrap').height();if(popup.find(medio+'-bellow').length){newContentHeight=newContentHeight-popup.find(medio+'-bellow').outerHeight(true);}
popup.find(medio).find('iframe').css({'height':newContentHeight+'px',});}
var headerHeight=0;if(popup.find('.pps-header').length){headerHeight=popup.find('.pps-header h3').outerHeight(true);}
if(medio=='.pps-embed'){if(contentHeight>deviceHeight-60){var newPopupHeight=deviceHeight-80;popup.css({'height':newPopupHeight+'px',});newContentHeight=popup.find('.pps-wrap').height();}}
newContentHeight=newContentHeight-headerHeight;popup.find(medio).find('iframe').css({'height':newContentHeight+'px',});}},20);}
function manageSizeEmbedPopupPress(id,height){manageHeightsPopupPress(id,'.pps-embed',height);}
function manageSizeIframePopupPress(id,height){manageHeightsPopupPress(id,'.pps-iframe',height);}
function manageSizePdfPopupPress(id,height){manageHeightsPopupPress(id,'.pps-pdf',height);}
function setImageOverlayPopupPress(id,img_overlay){if(jQuery.trim(img_overlay)!==""){setTimeout(function(){jQuery('.b-modal').last().css({'background-image':' url('+img_overlay+')','background-position':'0px 0px','background-repeat':'repeat',});},60);}}
function onClosePopupPress(id){removeLazyLoadContentPopupPress(id);removeMessageFormsPopupPress();var popup=jQuery("#popuppress-"+id);popup.find('video,audio').trigger('pause');var $wp_video=popup.find('.wp-video');if($wp_video.length){$wp_video.removeClass('pps-responsive-video');}
setTimeout(function(){var popup=jQuery("#popuppress-"+id);if(popup.find('#pps-slider-'+id).length){jQuery("#pps-slider-"+id).popupslider("destroy");}},150);if(popup.find('label.pps-not-show-again').length&&popup.find('label.pps-not-show-again > input').is(':checked')){notShowAgainPopupPress(id);}
popup.trigger("ppsOnClose");}
function repositionPopupPress(id){}
function removeMessageFormsPopupPress(){var formClass={jetPack:'.contact-form-submission',gravityForms:'.gform_wrapper .validation_error, .gform_confirmation_message',contactForms:'.wpcf7-validation-errors, .wpcf7-mail-sent-ok'};var reload=false;jQuery('.pps-popup').each(function(index,element){if(jQuery(this).find(formClass.jetPack).length){reload=true;}});if(reload){window.location=window.location.href.split("?")[0];}}
function updateViewsPopupPress(id,restore){restore=restore||'false';var datos={action:'update_views_popups',id:id,plugin:'popuppress',restore:restore};jQuery.ajax({type:"POST",url:PPS.ajaxurlPps,data:datos,success:function(result){var data=jQuery.parseJSON(result);if(data.success===true){if(jQuery('table.wp-list-table').length){jQuery('tr#post-'+id+' td.column-views > p > span:eq(0)').html(data.views);}}}});}
function notShowAgainPopupPress(id){jQuery.cookie("pps_not_show_"+id,"not_show_again",{expires:20*365,path:"/"});jQuery(document).unbind("mouseleave.pps");}
function disclaimerPopupPress(id,activated,agreeRedirect,disagreeRestriction,useCookie,$cookie_expire,$cookie_days){if(activated=='true'){jQuery('#pps-btn-agree-'+id).on('click',function(event){if(agreeRedirect=='same_page'){event.preventDefault();jQuery('#popuppress-'+id).bPopup().close();}
if(useCookie=='true'&&jQuery(location).attr("href").indexOf("/wp-admin/")<0){if($cookie_expire=='number_days'){jQuery.cookie("pps_disclaimer_"+id,$cookie_days+"_days",{expires:$cookie_days,path:"/"});}
else{jQuery.cookie("pps_disclaimer_"+id,"current_session",{path:"/"});}}});jQuery('#pps-btn-disagree'+id).on('click',function(event){if(disagreeRestriction=='close_page'){event.preventDefault();window.close();}});}}
!function(a){var b=/iPhone/i,c=/iPod/i,d=/iPad/i,e=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,f=/Android/i,g=/(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,h=/(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,i=/IEMobile/i,j=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,k=/BlackBerry/i,l=/BB10/i,m=/Opera Mini/i,n=/(CriOS|Chrome)(?=.*\bMobile\b)/i,o=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,p=new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),q=function(a,b){return a.test(b)},r=function(a){var r=a||navigator.userAgent,s=r.split("[FBAN");return"undefined"!=typeof s[1]&&(r=s[0]),this.apple={phone:q(b,r),ipod:q(c,r),tablet:!q(b,r)&&q(d,r),device:q(b,r)||q(c,r)||q(d,r)},this.amazon={phone:q(g,r),tablet:!q(g,r)&&q(h,r),device:q(g,r)||q(h,r)},this.android={phone:q(g,r)||q(e,r),tablet:!q(g,r)&&!q(e,r)&&(q(h,r)||q(f,r)),device:q(g,r)||q(h,r)||q(e,r)||q(f,r)},this.windows={phone:q(i,r),tablet:q(j,r),device:q(i,r)||q(j,r)},this.other={blackberry:q(k,r),blackberry10:q(l,r),opera:q(m,r),firefox:q(o,r),chrome:q(n,r),device:q(k,r)||q(l,r)||q(m,r)||q(o,r)||q(n,r)},this.seven_inch=q(p,r),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet,"undefined"==typeof window?this:void 0},s=function(){var a=new r;return a.Class=r,a};"undefined"!=typeof module&&module.exports&&"undefined"==typeof window?module.exports=r:"undefined"!=typeof module&&module.exports&&"undefined"!=typeof window?module.exports=s():"function"==typeof define&&define.amd?define("isMobile",[],a.isMobile=s()):a.isMobile=s()}(this);
;!function(a,b){"use strict";function c(){if(!e){e=!0;var a,c,d,f,g=-1!==navigator.appVersion.indexOf("MSIE 10"),h=!!navigator.userAgent.match(/Trident.*rv:11\./),i=b.querySelectorAll("iframe.wp-embedded-content");for(c=0;c<i.length;c++){if(d=i[c],!d.getAttribute("data-secret"))f=Math.random().toString(36).substr(2,10),d.src+="#?secret="+f,d.setAttribute("data-secret",f);if(g||h)a=d.cloneNode(!0),a.removeAttribute("security"),d.parentNode.replaceChild(a,d)}}}var d=!1,e=!1;if(b.querySelector)if(a.addEventListener)d=!0;if(a.wp=a.wp||{},!a.wp.receiveEmbedMessage)if(a.wp.receiveEmbedMessage=function(c){var d=c.data;if(d.secret||d.message||d.value)if(!/[^a-zA-Z0-9]/.test(d.secret)){var e,f,g,h,i,j=b.querySelectorAll('iframe[data-secret="'+d.secret+'"]'),k=b.querySelectorAll('blockquote[data-secret="'+d.secret+'"]');for(e=0;e<k.length;e++)k[e].style.display="none";for(e=0;e<j.length;e++)if(f=j[e],c.source===f.contentWindow){if(f.removeAttribute("style"),"height"===d.message){if(g=parseInt(d.value,10),g>1e3)g=1e3;else if(~~g<200)g=200;f.height=g}if("link"===d.message)if(h=b.createElement("a"),i=b.createElement("a"),h.href=f.getAttribute("src"),i.href=d.value,i.host===h.host)if(b.activeElement===f)a.top.location.href=d.value}else;}},d)a.addEventListener("message",a.wp.receiveEmbedMessage,!1),b.addEventListener("DOMContentLoaded",c,!1),a.addEventListener("load",c,!1)}(window,document);
;function vc_js(){vc_toggleBehaviour(),vc_tabsBehaviour(),vc_accordionBehaviour(),vc_teaserGrid(),vc_carouselBehaviour(),vc_slidersBehaviour(),vc_prettyPhoto(),vc_googleplus(),vc_pinterest(),vc_progress_bar(),vc_plugin_flexslider(),vc_google_fonts(),vc_gridBehaviour(),vc_rowBehaviour(),vc_prepareHoverBox(),vc_googleMapsPointer(),vc_ttaActivation(),jQuery(document).trigger("vc_js"),window.setTimeout(vc_waypoints,500)}function getSizeName(){var screen_w=jQuery(window).width();return 1170<screen_w?"desktop_wide":960<screen_w&&1169>screen_w?"desktop":768<screen_w&&959>screen_w?"tablet":300<screen_w&&767>screen_w?"mobile":300>screen_w?"mobile_portrait":""}function loadScript(url,$obj,callback){var script=document.createElement("script");script.type="text/javascript",script.readyState&&(script.onreadystatechange=function(){"loaded"!==script.readyState&&"complete"!==script.readyState||(script.onreadystatechange=null,callback())}),script.src=url,$obj.get(0).appendChild(script)}function vc_ttaActivation(){jQuery("[data-vc-accordion]").on("show.vc.accordion",function(e){var $=window.jQuery,ui={};ui.newPanel=$(this).data("vc.accordion").getTarget(),window.wpb_prepare_tab_content(e,ui)})}function vc_accordionActivate(event,ui){if(ui.newPanel.length&&ui.newHeader.length){var $pie_charts=ui.newPanel.find(".vc_pie_chart:not(.vc_ready)"),$round_charts=ui.newPanel.find(".vc_round-chart"),$line_charts=ui.newPanel.find(".vc_line-chart"),$carousel=ui.newPanel.find('[data-ride="vc_carousel"]');void 0!==jQuery.fn.isotope&&ui.newPanel.find(".isotope, .wpb_image_grid_ul").isotope("layout"),ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length&&ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function(){var grid=jQuery(this).data("vcGrid");grid&&grid.gridBuilder&&grid.gridBuilder.setMasonry&&grid.gridBuilder.setMasonry()}),vc_carouselBehaviour(ui.newPanel),vc_plugin_flexslider(ui.newPanel),$pie_charts.length&&jQuery.fn.vcChat&&$pie_charts.vcChat(),$round_charts.length&&jQuery.fn.vcRoundChart&&$round_charts.vcRoundChart({reload:!1}),$line_charts.length&&jQuery.fn.vcLineChart&&$line_charts.vcLineChart({reload:!1}),$carousel.length&&jQuery.fn.carousel&&$carousel.carousel("resizeAction"),ui.newPanel.parents(".isotope").length&&ui.newPanel.parents(".isotope").each(function(){jQuery(this).isotope("layout")})}}function initVideoBackgrounds(){return window.console&&window.console.warn&&window.console.warn("this function is deprecated use vc_initVideoBackgrounds"),vc_initVideoBackgrounds()}function vc_initVideoBackgrounds(){jQuery("[data-vc-video-bg]").each(function(){var youtubeUrl,youtubeId,$element=jQuery(this);$element.data("vcVideoBg")?(youtubeUrl=$element.data("vcVideoBg"),youtubeId=vcExtractYoutubeId(youtubeUrl),youtubeId&&($element.find(".vc_video-bg").remove(),insertYoutubeVideoAsBackground($element,youtubeId)),jQuery(window).on("grid:items:added",function(event,$grid){$element.has($grid).length&&vcResizeVideoBackground($element)})):$element.find(".vc_video-bg").remove()})}function insertYoutubeVideoAsBackground($element,youtubeId,counter){if("undefined"==typeof YT||void 0===YT.Player)return 100<(counter=void 0===counter?0:counter)?void console.warn("Too many attempts to load YouTube api"):void setTimeout(function(){insertYoutubeVideoAsBackground($element,youtubeId,counter++)},100);var $container=$element.prepend('<div class="vc_video-bg vc_hidden-xs"><div class="inner"></div></div>').find(".inner");new YT.Player($container[0],{width:"100%",height:"100%",videoId:youtubeId,playerVars:{playlist:youtubeId,iv_load_policy:3,enablejsapi:1,disablekb:1,autoplay:1,controls:0,showinfo:0,rel:0,loop:1,wmode:"transparent"},events:{onReady:function(event){event.target.mute().setLoop(!0)}}}),vcResizeVideoBackground($element),jQuery(window).bind("resize",function(){vcResizeVideoBackground($element)})}function vcResizeVideoBackground($element){var iframeW,iframeH,marginLeft,marginTop,containerW=$element.innerWidth(),containerH=$element.innerHeight();containerW/containerH<16/9?(iframeW=containerH*(16/9),iframeH=containerH,marginLeft=-Math.round((iframeW-containerW)/2)+"px",marginTop=-Math.round((iframeH-containerH)/2)+"px",iframeW+="px",iframeH+="px"):(iframeW=containerW,iframeH=containerW*(9/16),marginTop=-Math.round((iframeH-containerH)/2)+"px",marginLeft=-Math.round((iframeW-containerW)/2)+"px",iframeW+="px",iframeH+="px"),$element.find(".vc_video-bg iframe").css({maxWidth:"1000%",marginLeft:marginLeft,marginTop:marginTop,width:iframeW,height:iframeH})}function vcExtractYoutubeId(url){if(void 0===url)return!1;var id=url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);return null!==id&&id[1]}function vc_googleMapsPointer(){var $=window.jQuery,$wpbGmapsWidget=$(".wpb_gmaps_widget");$wpbGmapsWidget.click(function(){$("iframe",this).css("pointer-events","auto")}),$wpbGmapsWidget.mouseleave(function(){$("iframe",this).css("pointer-events","none")}),$(".wpb_gmaps_widget iframe").css("pointer-events","none")}function vc_setHoverBoxPerspective(hoverBox){hoverBox.each(function(){var $this=jQuery(this),width=$this.width(),perspective=4*width+"px";$this.css("perspective",perspective)})}function vc_setHoverBoxHeight(hoverBox){hoverBox.each(function(){var $this=jQuery(this),hoverBoxInner=$this.find(".vc-hoverbox-inner");hoverBoxInner.css("min-height",0);var frontHeight=$this.find(".vc-hoverbox-front-inner").outerHeight(),backHeight=$this.find(".vc-hoverbox-back-inner").outerHeight(),hoverBoxHeight=frontHeight>backHeight?frontHeight:backHeight;hoverBoxHeight<250&&(hoverBoxHeight=250),hoverBoxInner.css("min-height",hoverBoxHeight+"px")})}function vc_prepareHoverBox(){var hoverBox=jQuery(".vc-hoverbox");vc_setHoverBoxHeight(hoverBox),vc_setHoverBoxPerspective(hoverBox)}document.documentElement.className+=" js_active ",document.documentElement.className+="ontouchstart"in document.documentElement?" vc_mobile ":" vc_desktop ",function(){for(var prefix=["-webkit-","-moz-","-ms-","-o-",""],i=0;i<prefix.length;i++)prefix[i]+"transform"in document.documentElement.style&&(document.documentElement.className+=" vc_transform ")}(),"function"!=typeof window.vc_plugin_flexslider&&(window.vc_plugin_flexslider=function($parent){($parent?$parent.find(".wpb_flexslider"):jQuery(".wpb_flexslider")).each(function(){var this_element=jQuery(this),sliderTimeout=1e3*parseInt(this_element.attr("data-interval")),sliderFx=this_element.attr("data-flex_fx"),slideshow=!0;0===sliderTimeout&&(slideshow=!1),this_element.is(":visible")&&this_element.flexslider({animation:sliderFx,slideshow:slideshow,slideshowSpeed:sliderTimeout,sliderSpeed:800,smoothHeight:!0})})}),"function"!=typeof window.vc_googleplus&&(window.vc_googleplus=function(){0<jQuery(".wpb_googleplus").length&&function(){var po=document.createElement("script");po.type="text/javascript",po.async=!0,po.src="//apis.google.com/js/plusone.js";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(po,s)}()}),"function"!=typeof window.vc_pinterest&&(window.vc_pinterest=function(){0<jQuery(".wpb_pinterest").length&&function(){var po=document.createElement("script");po.type="text/javascript",po.async=!0,po.src="//assets.pinterest.com/js/pinit.js";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(po,s)}()}),"function"!=typeof window.vc_progress_bar&&(window.vc_progress_bar=function(){void 0!==jQuery.fn.waypoint&&jQuery(".vc_progress_bar").waypoint(function(){jQuery(this).find(".vc_single_bar").each(function(index){var $this=jQuery(this),bar=$this.find(".vc_bar"),val=bar.data("percentage-value");setTimeout(function(){bar.css({width:val+"%"})},200*index)})},{offset:"85%"})}),"function"!=typeof window.vc_waypoints&&(window.vc_waypoints=function(){void 0!==jQuery.fn.waypoint&&jQuery(".wpb_animate_when_almost_visible:not(.wpb_start_animation)").waypoint(function(){jQuery(this).addClass("wpb_start_animation animated")},{offset:"85%"})}),"function"!=typeof window.vc_toggleBehaviour&&(window.vc_toggleBehaviour=function($el){function event(e){e&&e.preventDefault&&e.preventDefault();var title=jQuery(this),element=title.closest(".vc_toggle"),content=element.find(".vc_toggle_content");element.hasClass("vc_toggle_active")?content.slideUp({duration:300,complete:function(){element.removeClass("vc_toggle_active")}}):content.slideDown({duration:300,complete:function(){element.addClass("vc_toggle_active")}})}$el?$el.hasClass("vc_toggle_title")?$el.unbind("click").click(event):$el.find(".vc_toggle_title").unbind("click").click(event):jQuery(".vc_toggle_title").unbind("click").on("click",event)}),"function"!=typeof window.vc_tabsBehaviour&&(window.vc_tabsBehaviour=function($tab){if(jQuery.ui){var $call=$tab||jQuery(".wpb_tabs, .wpb_tour"),ver=jQuery.ui&&jQuery.ui.version?jQuery.ui.version.split("."):"1.10",old_version=1===parseInt(ver[0])&&9>parseInt(ver[1]);$call.each(function(index){var $tabs,interval=jQuery(this).attr("data-interval"),tabs_array=[];if($tabs=jQuery(this).find(".wpb_tour_tabs_wrapper").tabs({show:function(event,ui){wpb_prepare_tab_content(event,ui)},beforeActivate:function(event,ui){1!==ui.newPanel.index()&&ui.newPanel.find(".vc_pie_chart:not(.vc_ready)")},activate:function(event,ui){wpb_prepare_tab_content(event,ui)}}),interval&&0<interval)try{$tabs.tabs("rotate",1e3*interval)}catch(e){window.console&&window.console.log&&console.log(e)}jQuery(this).find(".wpb_tab").each(function(){tabs_array.push(this.id)}),jQuery(this).find(".wpb_tabs_nav li").click(function(e){return e.preventDefault(),old_version?$tabs.tabs("select",jQuery("a",this).attr("href")):$tabs.tabs("option","active",jQuery(this).index()),!1}),jQuery(this).find(".wpb_prev_slide a, .wpb_next_slide a").click(function(e){if(e.preventDefault(),old_version){var index=$tabs.tabs("option","selected");jQuery(this).parent().hasClass("wpb_next_slide")?index++:index--,0>index?index=$tabs.tabs("length")-1:index>=$tabs.tabs("length")&&(index=0),$tabs.tabs("select",index)}else{var index=$tabs.tabs("option","active"),length=$tabs.find(".wpb_tab").length;index=jQuery(this).parent().hasClass("wpb_next_slide")?index+1>=length?0:index+1:0>index-1?length-1:index-1,$tabs.tabs("option","active",index)}})})}}),"function"!=typeof window.vc_accordionBehaviour&&(window.vc_accordionBehaviour=function(){jQuery(".wpb_accordion").each(function(index){var $tabs,$this=jQuery(this),active_tab=($this.attr("data-interval"),!isNaN(jQuery(this).data("active-tab"))&&0<parseInt($this.data("active-tab"))&&parseInt($this.data("active-tab"))-1),collapsible=!1===active_tab||"yes"===$this.data("collapsible");$tabs=$this.find(".wpb_accordion_wrapper").accordion({header:"> div > h3",autoHeight:!1,heightStyle:"content",active:active_tab,collapsible:collapsible,navigation:!0,activate:vc_accordionActivate,change:function(event,ui){void 0!==jQuery.fn.isotope&&ui.newContent.find(".isotope").isotope("layout"),vc_carouselBehaviour(ui.newPanel)}}),!0===$this.data("vcDisableKeydown")&&($tabs.data("uiAccordion")._keydown=function(){})})}),"function"!=typeof window.vc_teaserGrid&&(window.vc_teaserGrid=function(){var layout_modes={fitrows:"fitRows",masonry:"masonry"};jQuery(".wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)").each(function(){var $container=jQuery(this),$thumbs=$container.find(".wpb_thumbnails"),layout_mode=$thumbs.attr("data-layout-mode");$thumbs.isotope({itemSelector:".isotope-item",layoutMode:void 0===layout_modes[layout_mode]?"fitRows":layout_modes[layout_mode]}),$container.find(".categories_filter a").data("isotope",$thumbs).click(function(e){e.preventDefault();var $thumbs=jQuery(this).data("isotope");jQuery(this).parent().parent().find(".active").removeClass("active"),jQuery(this).parent().addClass("active"),$thumbs.isotope({filter:jQuery(this).attr("data-filter")})}),jQuery(window).bind("load resize",function(){$thumbs.isotope("layout")})})}),"function"!=typeof window.vc_carouselBehaviour&&(window.vc_carouselBehaviour=function($parent){($parent?$parent.find(".wpb_carousel"):jQuery(".wpb_carousel")).each(function(){var $this=jQuery(this);if(!0!==$this.data("carousel_enabled")&&$this.is(":visible")){$this.data("carousel_enabled",!0),getColumnsCount(jQuery(this)),jQuery(this).hasClass("columns_count_1");var carousele_li=jQuery(this).find(".wpb_thumbnails-fluid li");carousele_li.css({"margin-right":carousele_li.css("margin-left"),"margin-left":0});var fluid_ul=jQuery(this).find("ul.wpb_thumbnails-fluid");fluid_ul.width(fluid_ul.width()+300),jQuery(window).resize(function(){var before_resize=screen_size;screen_size=getSizeName(),before_resize!=screen_size&&window.setTimeout("location.reload()",20)})}})}),"function"!=typeof window.vc_slidersBehaviour&&(window.vc_slidersBehaviour=function(){jQuery(".wpb_gallery_slides").each(function(index){var $imagesGrid,this_element=jQuery(this);if(this_element.hasClass("wpb_slider_nivo")){var sliderTimeout=1e3*this_element.attr("data-interval");0===sliderTimeout&&(sliderTimeout=9999999999),this_element.find(".nivoSlider").nivoSlider({effect:"boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse",slices:15,boxCols:8,boxRows:4,animSpeed:800,pauseTime:sliderTimeout,startSlide:0,directionNav:!0,directionNavHide:!0,controlNav:!0,keyboardNav:!1,pauseOnHover:!0,manualAdvance:!1,prevText:"Prev",nextText:"Next"})}else this_element.hasClass("wpb_image_grid")&&(jQuery.fn.imagesLoaded?$imagesGrid=this_element.find(".wpb_image_grid_ul").imagesLoaded(function(){$imagesGrid.isotope({itemSelector:".isotope-item",layoutMode:"fitRows"})}):this_element.find(".wpb_image_grid_ul").isotope({itemSelector:".isotope-item",layoutMode:"fitRows"}))})}),"function"!=typeof window.vc_prettyPhoto&&(window.vc_prettyPhoto=function(){try{jQuery&&jQuery.fn&&jQuery.fn.prettyPhoto&&jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({animationSpeed:"normal",hook:"data-rel",padding:15,opacity:.7,showTitle:!0,allowresize:!0,counter_separator_label:"/",hideflash:!1,deeplinking:!1,modal:!1,callback:function(){location.href.indexOf("#!prettyPhoto")>-1&&(location.hash="")},social_tools:""})}catch(err){window.console&&window.console.log&&console.log(err)}}),"function"!=typeof window.vc_google_fonts&&(window.vc_google_fonts=function(){return!1}),window.vcParallaxSkroll=!1,"function"!=typeof window.vc_rowBehaviour&&(window.vc_rowBehaviour=function(){function fullWidthRow(){var $elements=$('[data-vc-full-width="true"]');$.each($elements,function(key,item){var $el=$(this);$el.addClass("vc_hidden");var $el_full=$el.next(".vc_row-full-width");if($el_full.length||($el_full=$el.parent().next(".vc_row-full-width")),$el_full.length){var el_margin_left=parseInt($el.css("margin-left"),10),el_margin_right=parseInt($el.css("margin-right"),10),offset=0-$el_full.offset().left-el_margin_left,width=$(window).width();if($el.css({position:"relative",left:offset,"box-sizing":"border-box",width:$(window).width()}),!$el.data("vcStretchContent")){var padding=-1*offset;0>padding&&(padding=0);var paddingRight=width-padding-$el_full.width()+el_margin_left+el_margin_right;0>paddingRight&&(paddingRight=0),$el.css({"padding-left":padding+"px","padding-right":paddingRight+"px"})}$el.attr("data-vc-full-width-init","true"),$el.removeClass("vc_hidden"),$(document).trigger("vc-full-width-row-single",{el:$el,offset:offset,marginLeft:el_margin_left,marginRight:el_margin_right,elFull:$el_full,width:width})}}),$(document).trigger("vc-full-width-row",$elements)}function fullHeightRow(){var $element=$(".vc_row-o-full-height:first");if($element.length){var $window,windowHeight,offsetTop,fullHeight;$window=$(window),windowHeight=$window.height(),offsetTop=$element.offset().top,offsetTop<windowHeight&&(fullHeight=100-offsetTop/(windowHeight/100),$element.css("min-height",fullHeight+"vh"))}$(document).trigger("vc-full-height-row",$element)}var $=window.jQuery;$(window).off("resize.vcRowBehaviour").on("resize.vcRowBehaviour",fullWidthRow).on("resize.vcRowBehaviour",fullHeightRow),fullWidthRow(),fullHeightRow(),function(){(window.navigator.userAgent.indexOf("MSIE ")>0||navigator.userAgent.match(/Trident.*rv\:11\./))&&$(".vc_row-o-full-height").each(function(){"flex"===$(this).css("display")&&$(this).wrap('<div class="vc_ie-flexbox-fixer"></div>')})}(),vc_initVideoBackgrounds(),function(){var vcSkrollrOptions,callSkrollInit=!1;window.vcParallaxSkroll&&window.vcParallaxSkroll.destroy(),$(".vc_parallax-inner").remove(),$("[data-5p-top-bottom]").removeAttr("data-5p-top-bottom data-30p-top-bottom"),$("[data-vc-parallax]").each(function(){var skrollrSpeed,skrollrSize,skrollrStart,skrollrEnd,$parallaxElement,parallaxImage,youtubeId;callSkrollInit=!0,"on"===$(this).data("vcParallaxOFade")&&$(this).children().attr("data-5p-top-bottom","opacity:0;").attr("data-30p-top-bottom","opacity:1;"),skrollrSize=100*$(this).data("vcParallax"),$parallaxElement=$("<div />").addClass("vc_parallax-inner").appendTo($(this)),$parallaxElement.height(skrollrSize+"%"),parallaxImage=$(this).data("vcParallaxImage"),youtubeId=vcExtractYoutubeId(parallaxImage),youtubeId?insertYoutubeVideoAsBackground($parallaxElement,youtubeId):void 0!==parallaxImage&&$parallaxElement.css("background-image","url("+parallaxImage+")"),skrollrSpeed=skrollrSize-100,skrollrStart=-skrollrSpeed,skrollrEnd=0,$parallaxElement.attr("data-bottom-top","top: "+skrollrStart+"%;").attr("data-top-bottom","top: "+skrollrEnd+"%;")}),!(!callSkrollInit||!window.skrollr)&&(vcSkrollrOptions={forceHeight:!1,smoothScrolling:!1,mobileCheck:function(){return!1}},window.vcParallaxSkroll=skrollr.init(vcSkrollrOptions),window.vcParallaxSkroll)}()}),"function"!=typeof window.vc_gridBehaviour&&(window.vc_gridBehaviour=function(){jQuery.fn.vcGrid&&jQuery("[data-vc-grid]").vcGrid()}),"function"!=typeof window.getColumnsCount&&(window.getColumnsCount=function(el){for(var find=!1,i=1;!1===find;){if(el.hasClass("columns_count_"+i))return find=!0,i;i++}});var screen_size=getSizeName();"function"!=typeof window.wpb_prepare_tab_content&&(window.wpb_prepare_tab_content=function(event,ui){var $ui_panel,$google_maps,panel=ui.panel||ui.newPanel,$pie_charts=panel.find(".vc_pie_chart:not(.vc_ready)"),$round_charts=panel.find(".vc_round-chart"),$line_charts=panel.find(".vc_line-chart"),$carousel=panel.find('[data-ride="vc_carousel"]');if(vc_carouselBehaviour(),vc_plugin_flexslider(panel),ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length&&ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function(){var grid=jQuery(this).data("vcGrid");grid&&grid.gridBuilder&&grid.gridBuilder.setMasonry&&grid.gridBuilder.setMasonry()}),panel.find(".vc_masonry_media_grid, .vc_masonry_grid").length&&panel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function(){var grid=jQuery(this).data("vcGrid");grid&&grid.gridBuilder&&grid.gridBuilder.setMasonry&&grid.gridBuilder.setMasonry()}),$pie_charts.length&&jQuery.fn.vcChat&&$pie_charts.vcChat(),$round_charts.length&&jQuery.fn.vcRoundChart&&$round_charts.vcRoundChart({reload:!1}),$line_charts.length&&jQuery.fn.vcLineChart&&$line_charts.vcLineChart({reload:!1}),$carousel.length&&jQuery.fn.carousel&&$carousel.carousel("resizeAction"),$ui_panel=panel.find(".isotope, .wpb_image_grid_ul"),$google_maps=panel.find(".wpb_gmaps_widget"),0<$ui_panel.length&&$ui_panel.isotope("layout"),$google_maps.length&&!$google_maps.is(".map_ready")){var $frame=$google_maps.find("iframe");$frame.attr("src",$frame.attr("src")),$google_maps.addClass("map_ready")}panel.parents(".isotope").length&&panel.parents(".isotope").each(function(){jQuery(this).isotope("layout")})}),window.vc_googleMapsPointer,jQuery(document).ready(vc_prepareHoverBox),jQuery(window).resize(vc_prepareHoverBox),jQuery(document).ready(function($){window.vc_js()});