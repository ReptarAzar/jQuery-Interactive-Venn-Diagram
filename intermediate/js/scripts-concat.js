window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){arguments.callee=arguments.callee.caller;var b=[].slice.call(arguments);(typeof console.log==="object"?log.apply.call(console.log,console,b):console.log.apply(console,b))}};(function(e){function h(){}for(var g="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),f;f=g.pop();){e[f]=e[f]||h}})((function(){try{console.log();return window.console}catch(a){return window.console={}}})());$(function(){$("#network").hover(function(){$(this).removeClass("network");$(this).addClass("hover");$("#info1").animate({width:"100%",opacity:1,marginLeft:"20px",},400)},function(){$(this).removeClass("hover");$(this).addClass("network");$("#info1").animate({width:"100%",opacity:0,marginLeft:"20px",},700)})});$(function(){$("#context").hover(function(){$(this).removeClass("context");$(this).addClass("hover");$("#info2").animate({width:"100%",opacity:1,marginLeft:"20px",},400)},function(){$(this).removeClass("hover");$(this).addClass("context");$("#info2").animate({width:"100%",opacity:0,marginLeft:"20px",},700)})});$(function(){$("#self").hover(function(){$(this).removeClass("self");$(this).addClass("hover");$("#info3").animate({width:"100%",opacity:1,marginLeft:"20px",},400)},function(){$(this).removeClass("hover");$(this).addClass("self");$("#info3").animate({width:"100%",opacity:0,marginLeft:"20px",},700)})});