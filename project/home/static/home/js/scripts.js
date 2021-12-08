(function(a){if(typeof wpcf7==="undefined"||wpcf7===null){return}wpcf7=a.extend({cached:0,inputs:[]},wpcf7);a(function(){wpcf7.supportHtml5=(function(){var c={};var b=document.createElement("input");c.placeholder="placeholder" in b;var d=["email","url","tel","number","range","date"];a.each(d,function(e,f){b.setAttribute("type",f);c[f]=b.type!=="text"});return c})();a("div.wpcf7 > form").each(function(){var b=a(this);wpcf7.initForm(b);if(wpcf7.cached){wpcf7.refill(b)}})});wpcf7.getId=function(b){return parseInt(a('input[name="_wpcf7"]',b).val(),10)};wpcf7.initForm=function(c){var b=a(c);b.submit(function(d){if(!wpcf7.supportHtml5.placeholder){a("[placeholder].placeheld",b).each(function(e,f){a(f).val("").removeClass("placeheld")})}if(typeof window.FormData==="function"){wpcf7.submit(b);d.preventDefault()}});a(".wpcf7-submit",b).after('<span class="ajax-loader"></span>');wpcf7.toggleSubmit(b);b.on("click",".wpcf7-acceptance",function(){wpcf7.toggleSubmit(b)});a(".wpcf7-exclusive-checkbox",b).on("click","input:checkbox",function(){var d=a(this).attr("name");b.find('input:checkbox[name="'+d+'"]').not(this).prop("checked",false)});a(".wpcf7-list-item.has-free-text",b).each(function(){var e=a(":input.wpcf7-free-text",this);var d=a(this).closest(".wpcf7-form-control");if(a(":checkbox, :radio",this).is(":checked")){e.prop("disabled",false)}else{e.prop("disabled",true)}d.on("change",":checkbox, :radio",function(){var f=a(".has-free-text",d).find(":checkbox, :radio");if(f.is(":checked")){e.prop("disabled",false).focus()}else{e.prop("disabled",true)}})});if(!wpcf7.supportHtml5.placeholder){a("[placeholder]",b).each(function(){a(this).val(a(this).attr("placeholder"));a(this).addClass("placeheld");a(this).focus(function(){if(a(this).hasClass("placeheld")){a(this).val("").removeClass("placeheld")}});a(this).blur(function(){if(""===a(this).val()){a(this).val(a(this).attr("placeholder"));a(this).addClass("placeheld")}})})}if(wpcf7.jqueryUi&&!wpcf7.supportHtml5.date){b.find('input.wpcf7-date[type="date"]').each(function(){a(this).datepicker({dateFormat:"yy-mm-dd",minDate:new Date(a(this).attr("min")),maxDate:new Date(a(this).attr("max"))})})}if(wpcf7.jqueryUi&&!wpcf7.supportHtml5.number){b.find('input.wpcf7-number[type="number"]').each(function(){a(this).spinner({min:a(this).attr("min"),max:a(this).attr("max"),step:a(this).attr("step")})})}a(".wpcf7-character-count",b).each(function(){var g=a(this);var f=g.attr("data-target-name");var j=g.hasClass("down");var e=parseInt(g.attr("data-starting-value"),10);var i=parseInt(g.attr("data-maximum-value"),10);var h=parseInt(g.attr("data-minimum-value"),10);var d=function(n){var k=a(n);var m=k.val().length;var l=j?e-m:m;g.attr("data-current-value",l);g.text(l);if(i&&i<m){g.addClass("too-long")}else{g.removeClass("too-long")}if(h&&m<h){g.addClass("too-short")}else{g.removeClass("too-short")}};a(':input[name="'+f+'"]',b).each(function(){d(this);a(this).keyup(function(){d(this)})})});b.on("change",".wpcf7-validates-as-url",function(){var d=a.trim(a(this).val());if(d&&!d.match(/^[a-z][a-z0-9.+-]*:/i)&&-1!==d.indexOf(".")){d=d.replace(/^\/+/,"");d="http://"+d}a(this).val(d)})};wpcf7.submit=function(e){if(typeof window.FormData!=="function"){return}var b=a(e);a(".ajax-loader",b).addClass("is-active");wpcf7.clearResponse(b);var f=new FormData(b.get(0));var c={id:b.closest("div.wpcf7").attr("id"),status:"init",inputs:[],formData:f};a.each(b.serializeArray(),function(h,j){if("_wpcf7"==j.name){c.contactFormId=j.value}else{if("_wpcf7_version"==j.name){c.pluginVersion=j.value}else{if("_wpcf7_locale"==j.name){c.contactFormLocale=j.value}else{if("_wpcf7_unit_tag"==j.name){c.unitTag=j.value}else{if("_wpcf7_container_post"==j.name){c.containerPostId=j.value}else{if(j.name.match(/^_wpcf7_\w+_free_text_/)){var g=j.name.replace(/^_wpcf7_\w+_free_text_/,"");c.inputs.push({name:g+"-free-text",value:j.value})}else{if(j.name.match(/^_/)){}else{c.inputs.push(j)}}}}}}}});wpcf7.triggerEvent(b.closest("div.wpcf7"),"beforesubmit",c);var d=function(k,g,l,h){c.id=a(k.into).attr("id");c.status=k.status;c.apiResponse=k;var i=a(".wpcf7-response-output",h);switch(k.status){case"validation_failed":a.each(k.invalidFields,function(m,o){a(o.into,h).each(function(){wpcf7.notValidTip(this,o.message);a(".wpcf7-form-control",this).addClass("wpcf7-not-valid");a("[aria-invalid]",this).attr("aria-invalid","true")})});i.addClass("wpcf7-validation-errors");h.addClass("invalid");wpcf7.triggerEvent(k.into,"invalid",c);break;case"acceptance_missing":i.addClass("wpcf7-acceptance-missing");h.addClass("unaccepted");wpcf7.triggerEvent(k.into,"unaccepted",c);break;case"spam":i.addClass("wpcf7-spam-blocked");h.addClass("spam");wpcf7.triggerEvent(k.into,"spam",c);break;case"aborted":i.addClass("wpcf7-aborted");h.addClass("aborted");wpcf7.triggerEvent(k.into,"aborted",c);break;case"mail_sent":i.addClass("wpcf7-mail-sent-ok");h.addClass("sent");wpcf7.triggerEvent(k.into,"mailsent",c);break;case"mail_failed":i.addClass("wpcf7-mail-sent-ng");h.addClass("failed");wpcf7.triggerEvent(k.into,"mailfailed",c);break;default:var j="custom-"+k.status.replace(/[^0-9a-z]+/i,"-");i.addClass("wpcf7-"+j);h.addClass(j)}wpcf7.refill(h,k);wpcf7.triggerEvent(k.into,"submit",c);if("mail_sent"==k.status){h.each(function(){this.reset()});wpcf7.toggleSubmit(h)}if(!wpcf7.supportHtml5.placeholder){h.find("[placeholder].placeheld").each(function(m,o){a(o).val(a(o).attr("placeholder"))})}i.html("").append(k.message).slideDown("fast");i.attr("role","alert");a(".screen-reader-response",h.closest(".wpcf7")).each(function(){var m=a(this);m.html("").attr("role","").append(k.message);if(k.invalidFields){var n=a("<ul></ul>");a.each(k.invalidFields,function(o,q){if(q.idref){var p=a("<li></li>").append(a("<a></a>").attr("href","#"+q.idref).append(q.message))}else{var p=a("<li></li>").append(q.message)}n.append(p)});m.append(n)}m.attr("role","alert").focus()})};a.ajax({type:"POST",url:wpcf7.apiSettings.getRoute("/contact-forms/"+wpcf7.getId(b)+"/feedback"),data:f,dataType:"json",processData:false,contentType:false}).done(function(h,g,i){d(h,g,i,b);a(".ajax-loader",b).removeClass("is-active")}).fail(function(j,g,i){var h=a('<div class="ajax-error"></div>').text(i.message);b.after(h)})};wpcf7.triggerEvent=function(f,c,d){var b=a(f);var e=new CustomEvent("wpcf7"+c,{bubbles:true,detail:d});b.get(0).dispatchEvent(e);b.trigger("wpcf7:"+c,d);b.trigger(c+".wpcf7",d)};wpcf7.toggleSubmit=function(c,d){var b=a(c);var e=a("input:submit",b);if(typeof d!=="undefined"){e.prop("disabled",!d);return}if(b.hasClass("wpcf7-acceptance-as-validation")){return}e.prop("disabled",false);a(".wpcf7-acceptance",b).each(function(){var f=a(this);var g=a("input:checkbox",f);if(!f.hasClass("optional")){if(f.hasClass("invert")&&g.is(":checked")||!f.hasClass("invert")&&!g.is(":checked")){e.prop("disabled",true);return false}}})};wpcf7.notValidTip=function(e,d){var b=a(e);a(".wpcf7-not-valid-tip",b).remove();a('<span role="alert" class="wpcf7-not-valid-tip"></span>').text(d).appendTo(b);if(b.is(".use-floating-validation-tip *")){var c=function(f){a(f).not(":hidden").animate({opacity:0},"fast",function(){a(this).css({"z-index":-100})})};b.on("mouseover",".wpcf7-not-valid-tip",function(){c(this)});b.on("focus",":input",function(){c(a(".wpcf7-not-valid-tip",b))})}};wpcf7.refill=function(d,e){var b=a(d);var f=function(h,g){a.each(g,function(k,l){h.find(':input[name="'+k+'"]').val("");h.find("img.wpcf7-captcha-"+k).attr("src",l);var j=/([0-9]+)\.(png|gif|jpeg)$/.exec(l);h.find('input:hidden[name="_wpcf7_captcha_challenge_'+k+'"]').attr("value",j[1])})};var c=function(h,g){a.each(g,function(j,k){h.find(':input[name="'+j+'"]').val("");h.find(':input[name="'+j+'"]').siblings("span.wpcf7-quiz-label").text(k[0]);h.find('input:hidden[name="_wpcf7_quiz_answer_'+j+'"]').attr("value",k[1])})};if(typeof e==="undefined"){a.ajax({type:"GET",url:wpcf7.apiSettings.getRoute("/contact-forms/"+wpcf7.getId(b)+"/refill"),beforeSend:function(h){var g=b.find(':input[name="_wpnonce"]').val();if(g){h.setRequestHeader("X-WP-Nonce",g)}},dataType:"json"}).done(function(h,g,i){if(h.captcha){f(b,h.captcha)}if(h.quiz){c(b,h.quiz)}})}else{if(e.captcha){f(b,e.captcha)}if(e.quiz){c(b,e.quiz)}}};wpcf7.clearResponse=function(c){var b=a(c);b.removeClass("invalid spam sent failed");b.siblings(".screen-reader-response").html("").attr("role","");a(".wpcf7-not-valid-tip",b).remove();a("[aria-invalid]",b).attr("aria-invalid","false");a(".wpcf7-form-control",b).removeClass("wpcf7-not-valid");a(".wpcf7-response-output",b).hide().empty().removeAttr("role").removeClass("wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked")};wpcf7.apiSettings.getRoute=function(c){var b=wpcf7.apiSettings.root;b=b.replace(wpcf7.apiSettings.namespace,wpcf7.apiSettings.namespace+c);return b}})(jQuery);(function(){if(typeof window.CustomEvent==="function"){return false}function a(c,d){d=d||{bubbles:false,cancelable:false,detail:undefined};var b=document.createEvent("CustomEvent");b.initCustomEvent(c,d.bubbles,d.cancelable,d.detail);return b}a.prototype=window.Event.prototype;window.CustomEvent=a})();