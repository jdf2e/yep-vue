/* index-1.0.0 particles.js Date:2018-01-11 18:06:28 */
var pJS=function(a,b){var c=document.querySelector("#"+a+" > .particles-js-canvas-el");this.pJS={canvas:{el:c,w:c.offsetWidth,h:c.offsetHeight},particles:{number:{value:400,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#ff0000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:2,opacity_min:0,sync:!1}},size:{value:20,random:!1,anim:{enable:!1,speed:20,size_min:0,sync:!1}},line_linked:{enable:!0,distance:100,color:"#fff",opacity:1,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:3e3,rotateY:3e3}},array:[]},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:200,size:80,duration:.4},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}},mouse:{}},retina_detect:!1,fn:{interact:{},modes:{},vendors:{}},tmp:{}};var d=this.pJS;b&&Object.deepExtend(d,b),d.tmp.obj={size_value:d.particles.size.value,size_anim_speed:d.particles.size.anim.speed,move_speed:d.particles.move.speed,line_linked_distance:d.particles.line_linked.distance,line_linked_width:d.particles.line_linked.width,mode_grab_distance:d.interactivity.modes.grab.distance,mode_bubble_distance:d.interactivity.modes.bubble.distance,mode_bubble_size:d.interactivity.modes.bubble.size,mode_repulse_distance:d.interactivity.modes.repulse.distance},d.fn.retinaInit=function(){d.retina_detect&&window.devicePixelRatio>1?(d.canvas.pxratio=window.devicePixelRatio,d.tmp.retina=!0):(d.canvas.pxratio=1,d.tmp.retina=!1),d.canvas.w=d.canvas.el.offsetWidth*d.canvas.pxratio,d.canvas.h=d.canvas.el.offsetHeight*d.canvas.pxratio,d.particles.size.value=d.tmp.obj.size_value*d.canvas.pxratio,d.particles.size.anim.speed=d.tmp.obj.size_anim_speed*d.canvas.pxratio,d.particles.move.speed=d.tmp.obj.move_speed*d.canvas.pxratio,d.particles.line_linked.distance=d.tmp.obj.line_linked_distance*d.canvas.pxratio,d.interactivity.modes.grab.distance=d.tmp.obj.mode_grab_distance*d.canvas.pxratio,d.interactivity.modes.bubble.distance=d.tmp.obj.mode_bubble_distance*d.canvas.pxratio,d.particles.line_linked.width=d.tmp.obj.line_linked_width*d.canvas.pxratio,d.interactivity.modes.bubble.size=d.tmp.obj.mode_bubble_size*d.canvas.pxratio,d.interactivity.modes.repulse.distance=d.tmp.obj.mode_repulse_distance*d.canvas.pxratio},d.fn.canvasInit=function(){d.canvas.ctx=d.canvas.el.getContext("2d")},d.fn.canvasSize=function(){d.canvas.el.width=d.canvas.w,d.canvas.el.height=d.canvas.h,d&&d.interactivity.events.resize&&window.addEventListener("resize",function(){d.canvas.w=d.canvas.el.offsetWidth,d.canvas.h=d.canvas.el.offsetHeight,d.tmp.retina&&(d.canvas.w*=d.canvas.pxratio,d.canvas.h*=d.canvas.pxratio),d.canvas.el.width=d.canvas.w,d.canvas.el.height=d.canvas.h,d.particles.move.enable||(d.fn.particlesEmpty(),d.fn.particlesCreate(),d.fn.particlesDraw(),d.fn.vendors.densityAutoParticles()),d.fn.vendors.densityAutoParticles()})},d.fn.canvasPaint=function(){d.canvas.ctx.fillRect(0,0,d.canvas.w,d.canvas.h)},d.fn.canvasClear=function(){d.canvas.ctx.clearRect(0,0,d.canvas.w,d.canvas.h)},d.fn.particle=function(a,b,c){if(this.radius=(d.particles.size.random?Math.random():1)*d.particles.size.value,d.particles.size.anim.enable&&(this.size_status=!1,this.vs=d.particles.size.anim.speed/100,d.particles.size.anim.sync||(this.vs=this.vs*Math.random())),this.x=c?c.x:Math.random()*d.canvas.w,this.y=c?c.y:Math.random()*d.canvas.h,this.x>d.canvas.w-2*this.radius?this.x=this.x-this.radius:this.x<2*this.radius&&(this.x=this.x+this.radius),this.y>d.canvas.h-2*this.radius?this.y=this.y-this.radius:this.y<2*this.radius&&(this.y=this.y+this.radius),d.particles.move.bounce&&d.fn.vendors.checkOverlap(this,c),this.color={},"object"==typeof a.value)if(a.value instanceof Array){var e=a.value[Math.floor(Math.random()*d.particles.color.value.length)];this.color.rgb=hexToRgb(e)}else void 0!=a.value.r&&void 0!=a.value.g&&void 0!=a.value.b&&(this.color.rgb={r:a.value.r,g:a.value.g,b:a.value.b}),void 0!=a.value.h&&void 0!=a.value.s&&void 0!=a.value.l&&(this.color.hsl={h:a.value.h,s:a.value.s,l:a.value.l});else"random"==a.value?this.color.rgb={r:Math.floor(256*Math.random())+0,g:Math.floor(256*Math.random())+0,b:Math.floor(256*Math.random())+0}:"string"==typeof a.value&&(this.color=a,this.color.rgb=hexToRgb(this.color.value));this.opacity=(d.particles.opacity.random?Math.random():1)*d.particles.opacity.value,d.particles.opacity.anim.enable&&(this.opacity_status=!1,this.vo=d.particles.opacity.anim.speed/100,d.particles.opacity.anim.sync||(this.vo=this.vo*Math.random()));var f={};switch(d.particles.move.direction){case"top":f={x:0,y:-1};break;case"top-right":f={x:.5,y:-.5};break;case"right":f={x:1,y:-0};break;case"bottom-right":f={x:.5,y:.5};break;case"bottom":f={x:0,y:1};break;case"bottom-left":f={x:-.5,y:1};break;case"left":f={x:-1,y:0};break;case"top-left":f={x:-.5,y:-.5};break;default:f={x:0,y:0}}d.particles.move.straight?(this.vx=f.x,this.vy=f.y,d.particles.move.random&&(this.vx=this.vx*Math.random(),this.vy=this.vy*Math.random())):(this.vx=f.x+Math.random()-.5,this.vy=f.y+Math.random()-.5),this.vx_i=this.vx,this.vy_i=this.vy;var g=d.particles.shape.type;if("object"==typeof g){if(g instanceof Array){var h=g[Math.floor(Math.random()*g.length)];this.shape=h}}else this.shape=g;if("image"==this.shape){var i=d.particles.shape;this.img={src:i.image.src,ratio:i.image.width/i.image.height},this.img.ratio||(this.img.ratio=1),"svg"==d.tmp.img_type&&void 0!=d.tmp.source_svg&&(d.fn.vendors.createSvgImg(this),d.tmp.pushing&&(this.img.loaded=!1))}},d.fn.particle.prototype.draw=function(){var a=this;if(void 0!=a.radius_bubble)var b=a.radius_bubble;else var b=a.radius;if(void 0!=a.opacity_bubble)var c=a.opacity_bubble;else var c=a.opacity;if(a.color.rgb)var e="rgba("+a.color.rgb.r+","+a.color.rgb.g+","+a.color.rgb.b+","+c+")";else var e="hsla("+a.color.hsl.h+","+a.color.hsl.s+"%,"+a.color.hsl.l+"%,"+c+")";switch(d.canvas.ctx.fillStyle=e,d.canvas.ctx.beginPath(),a.shape){case"circle":d.canvas.ctx.arc(a.x,a.y,b,0,2*Math.PI,!1);break;case"edge":d.canvas.ctx.rect(a.x-b,a.y-b,2*b,2*b);break;case"triangle":d.fn.vendors.drawShape(d.canvas.ctx,a.x-b,a.y+b/1.66,2*b,3,2);break;case"polygon":d.fn.vendors.drawShape(d.canvas.ctx,a.x-b/(d.particles.shape.polygon.nb_sides/3.5),a.y-b/.76,2.66*b/(d.particles.shape.polygon.nb_sides/3),d.particles.shape.polygon.nb_sides,1);break;case"star":d.fn.vendors.drawShape(d.canvas.ctx,a.x-2*b/(d.particles.shape.polygon.nb_sides/4),a.y-b/1.52,2*b*2.66/(d.particles.shape.polygon.nb_sides/3),d.particles.shape.polygon.nb_sides,2);break;case"image":function f(){d.canvas.ctx.drawImage(g,a.x-b,a.y-b,2*b,2*b/a.img.ratio)}if("svg"==d.tmp.img_type)var g=a.img.obj;else var g=d.tmp.img_obj;g&&f()}d.canvas.ctx.closePath(),d.particles.shape.stroke.width>0&&(d.canvas.ctx.strokeStyle=d.particles.shape.stroke.color,d.canvas.ctx.lineWidth=d.particles.shape.stroke.width,d.canvas.ctx.stroke()),d.canvas.ctx.fill()},d.fn.particlesCreate=function(){for(var a=0;a<d.particles.number.value;a++)d.particles.array.push(new d.fn.particle(d.particles.color,d.particles.opacity.value))},d.fn.particlesUpdate=function(){for(var a=0;a<d.particles.array.length;a++){var b=d.particles.array[a];if(d.particles.move.enable){var c=d.particles.move.speed/2;b.x+=b.vx*c,b.y+=b.vy*c}if(d.particles.opacity.anim.enable&&(1==b.opacity_status?(b.opacity>=d.particles.opacity.value&&(b.opacity_status=!1),b.opacity+=b.vo):(b.opacity<=d.particles.opacity.anim.opacity_min&&(b.opacity_status=!0),b.opacity-=b.vo),b.opacity<0&&(b.opacity=0)),d.particles.size.anim.enable&&(1==b.size_status?(b.radius>=d.particles.size.value&&(b.size_status=!1),b.radius+=b.vs):(b.radius<=d.particles.size.anim.size_min&&(b.size_status=!0),b.radius-=b.vs),b.radius<0&&(b.radius=0)),"bounce"==d.particles.move.out_mode)var e={x_left:b.radius,x_right:d.canvas.w,y_top:b.radius,y_bottom:d.canvas.h};else var e={x_left:-b.radius,x_right:d.canvas.w+b.radius,y_top:-b.radius,y_bottom:d.canvas.h+b.radius};switch(b.x-b.radius>d.canvas.w?(b.x=e.x_left,b.y=Math.random()*d.canvas.h):b.x+b.radius<0&&(b.x=e.x_right,b.y=Math.random()*d.canvas.h),b.y-b.radius>d.canvas.h?(b.y=e.y_top,b.x=Math.random()*d.canvas.w):b.y+b.radius<0&&(b.y=e.y_bottom,b.x=Math.random()*d.canvas.w),d.particles.move.out_mode){case"bounce":b.x+b.radius>d.canvas.w?b.vx=-b.vx:b.x-b.radius<0&&(b.vx=-b.vx),b.y+b.radius>d.canvas.h?b.vy=-b.vy:b.y-b.radius<0&&(b.vy=-b.vy)}if(isInArray("grab",d.interactivity.events.onhover.mode)&&d.fn.modes.grabParticle(b),(isInArray("bubble",d.interactivity.events.onhover.mode)||isInArray("bubble",d.interactivity.events.onclick.mode))&&d.fn.modes.bubbleParticle(b),(isInArray("repulse",d.interactivity.events.onhover.mode)||isInArray("repulse",d.interactivity.events.onclick.mode))&&d.fn.modes.repulseParticle(b),d.particles.line_linked.enable||d.particles.move.attract.enable)for(var f=a+1;f<d.particles.array.length;f++){var g=d.particles.array[f];d.particles.line_linked.enable&&d.fn.interact.linkParticles(b,g),d.particles.move.attract.enable&&d.fn.interact.attractParticles(b,g),d.particles.move.bounce&&d.fn.interact.bounceParticles(b,g)}}},d.fn.particlesDraw=function(){d.canvas.ctx.clearRect(0,0,d.canvas.w,d.canvas.h),d.fn.particlesUpdate();for(var a=0;a<d.particles.array.length;a++){var b=d.particles.array[a];b.draw()}},d.fn.particlesEmpty=function(){d.particles.array=[]},d.fn.particlesRefresh=function(){cancelRequestAnimFrame(d.fn.checkAnimFrame),cancelRequestAnimFrame(d.fn.drawAnimFrame),d.tmp.source_svg=void 0,d.tmp.img_obj=void 0,d.tmp.count_svg=0,d.fn.particlesEmpty(),d.fn.canvasClear(),d.fn.vendors.start()},d.fn.interact.linkParticles=function(a,b){var c=a.x-b.x,e=a.y-b.y,f=Math.sqrt(c*c+e*e);if(f<=d.particles.line_linked.distance){var g=d.particles.line_linked.opacity-f/(1/d.particles.line_linked.opacity)/d.particles.line_linked.distance;if(g>0){var h=d.particles.line_linked.color_rgb_line;d.canvas.ctx.strokeStyle="rgba("+h.r+","+h.g+","+h.b+","+g+")",d.canvas.ctx.lineWidth=d.particles.line_linked.width,d.canvas.ctx.beginPath(),d.canvas.ctx.moveTo(a.x,a.y),d.canvas.ctx.lineTo(b.x,b.y),d.canvas.ctx.stroke(),d.canvas.ctx.closePath()}}},d.fn.interact.attractParticles=function(a,b){var c=a.x-b.x,e=a.y-b.y,f=Math.sqrt(c*c+e*e);if(f<=d.particles.line_linked.distance){var g=c/(1e3*d.particles.move.attract.rotateX),h=e/(1e3*d.particles.move.attract.rotateY);a.vx-=g,a.vy-=h,b.vx+=g,b.vy+=h}},d.fn.interact.bounceParticles=function(a,b){var c=a.x-b.x,d=a.y-b.y,e=Math.sqrt(c*c+d*d),f=a.radius+b.radius;f>=e&&(a.vx=-a.vx,a.vy=-a.vy,b.vx=-b.vx,b.vy=-b.vy)},d.fn.modes.pushParticles=function(a,b){d.tmp.pushing=!0;for(var c=0;a>c;c++)d.particles.array.push(new d.fn.particle(d.particles.color,d.particles.opacity.value,{x:b?b.pos_x:Math.random()*d.canvas.w,y:b?b.pos_y:Math.random()*d.canvas.h})),c==a-1&&(d.particles.move.enable||d.fn.particlesDraw(),d.tmp.pushing=!1)},d.fn.modes.removeParticles=function(a){d.particles.array.splice(0,a),d.particles.move.enable||d.fn.particlesDraw()},d.fn.modes.bubbleParticle=function(a){if(d.interactivity.events.onhover.enable&&isInArray("bubble",d.interactivity.events.onhover.mode)){var b=a.x-d.interactivity.mouse.pos_x,c=a.y-d.interactivity.mouse.pos_y,e=Math.sqrt(b*b+c*c),f=1-e/d.interactivity.modes.bubble.distance;function g(){a.opacity_bubble=a.opacity,a.radius_bubble=a.radius}if(e<=d.interactivity.modes.bubble.distance){if(f>=0&&"mousemove"==d.interactivity.status){if(d.interactivity.modes.bubble.size!=d.particles.size.value)if(d.interactivity.modes.bubble.size>d.particles.size.value){var h=a.radius+d.interactivity.modes.bubble.size*f;h>=0&&(a.radius_bubble=h)}else{var i=a.radius-d.interactivity.modes.bubble.size,h=a.radius-i*f;a.radius_bubble=h>0?h:0}if(d.interactivity.modes.bubble.opacity!=d.particles.opacity.value)if(d.interactivity.modes.bubble.opacity>d.particles.opacity.value){var j=d.interactivity.modes.bubble.opacity*f;j>a.opacity&&j<=d.interactivity.modes.bubble.opacity&&(a.opacity_bubble=j)}else{var j=a.opacity-(d.particles.opacity.value-d.interactivity.modes.bubble.opacity)*f;j<a.opacity&&j>=d.interactivity.modes.bubble.opacity&&(a.opacity_bubble=j)}}}else g();"mouseleave"==d.interactivity.status&&g()}else if(d.interactivity.events.onclick.enable&&isInArray("bubble",d.interactivity.events.onclick.mode)){if(d.tmp.bubble_clicking){var b=a.x-d.interactivity.mouse.click_pos_x,c=a.y-d.interactivity.mouse.click_pos_y,e=Math.sqrt(b*b+c*c),k=((new Date).getTime()-d.interactivity.mouse.click_time)/1e3;k>d.interactivity.modes.bubble.duration&&(d.tmp.bubble_duration_end=!0),k>2*d.interactivity.modes.bubble.duration&&(d.tmp.bubble_clicking=!1,d.tmp.bubble_duration_end=!1)}function l(b,c,f,g,h){if(b!=c)if(d.tmp.bubble_duration_end){if(void 0!=f){var l=g-k*(g-b)/d.interactivity.modes.bubble.duration,m=b-l;j=b+m,"size"==h&&(a.radius_bubble=j),"opacity"==h&&(a.opacity_bubble=j)}}else if(e<=d.interactivity.modes.bubble.distance){if(void 0!=f)var i=f;else var i=g;if(i!=b){var j=g-k*(g-b)/d.interactivity.modes.bubble.duration;"size"==h&&(a.radius_bubble=j),"opacity"==h&&(a.opacity_bubble=j)}}else"size"==h&&(a.radius_bubble=void 0),"opacity"==h&&(a.opacity_bubble=void 0)}d.tmp.bubble_clicking&&(l(d.interactivity.modes.bubble.size,d.particles.size.value,a.radius_bubble,a.radius,"size"),l(d.interactivity.modes.bubble.opacity,d.particles.opacity.value,a.opacity_bubble,a.opacity,"opacity"))}},d.fn.modes.repulseParticle=function(a){if(d.interactivity.events.onhover.enable&&isInArray("repulse",d.interactivity.events.onhover.mode)&&"mousemove"==d.interactivity.status){var b=a.x-d.interactivity.mouse.pos_x,c=a.y-d.interactivity.mouse.pos_y,e=Math.sqrt(b*b+c*c);var f={x:b/e,y:c/e},g=d.interactivity.modes.repulse.distance,h=100,i=clamp(1/g*(-1*Math.pow(e/g,2)+1)*g*h,0,50);var j={x:a.x+f.x*i,y:a.y+f.y*i};"bounce"==d.particles.move.out_mode?(j.x-a.radius>0&&j.x+a.radius<d.canvas.w&&(a.x=j.x),j.y-a.radius>0&&j.y+a.radius<d.canvas.h&&(a.y=j.y)):(a.x=j.x,a.y=j.y)}else if(d.interactivity.events.onclick.enable&&isInArray("repulse",d.interactivity.events.onclick.mode))if(d.tmp.repulse_finish||(d.tmp.repulse_count++,d.tmp.repulse_count==d.particles.array.length&&(d.tmp.repulse_finish=!0)),d.tmp.repulse_clicking){var g=Math.pow(d.interactivity.modes.repulse.distance/6,3);var k=d.interactivity.mouse.click_pos_x-a.x,l=d.interactivity.mouse.click_pos_y-a.y,m=k*k+l*l;var n=-g/m*1;function o(){var b=Math.atan2(l,k);if(a.vx=n*Math.cos(b),a.vy=n*Math.sin(b),"bounce"==d.particles.move.out_mode){var c={x:a.x+a.vx,y:a.y+a.vy};c.x+a.radius>d.canvas.w?a.vx=-a.vx:c.x-a.radius<0&&(a.vx=-a.vx),c.y+a.radius>d.canvas.h?a.vy=-a.vy:c.y-a.radius<0&&(a.vy=-a.vy)}}g>=m&&o()}else 0==d.tmp.repulse_clicking&&(a.vx=a.vx_i,a.vy=a.vy_i)},d.fn.modes.grabParticle=function(a){if(d.interactivity.events.onhover.enable&&"mousemove"==d.interactivity.status){var b=a.x-d.interactivity.mouse.pos_x,c=a.y-d.interactivity.mouse.pos_y,e=Math.sqrt(b*b+c*c);if(e<=d.interactivity.modes.grab.distance){var f=d.interactivity.modes.grab.line_linked.opacity-e/(1/d.interactivity.modes.grab.line_linked.opacity)/d.interactivity.modes.grab.distance;if(f>0){var g=d.particles.line_linked.color_rgb_line;d.canvas.ctx.strokeStyle="rgba("+g.r+","+g.g+","+g.b+","+f+")",d.canvas.ctx.lineWidth=d.particles.line_linked.width,d.canvas.ctx.beginPath(),d.canvas.ctx.moveTo(a.x,a.y),d.canvas.ctx.lineTo(d.interactivity.mouse.pos_x,d.interactivity.mouse.pos_y),d.canvas.ctx.stroke(),d.canvas.ctx.closePath()}}}},d.fn.vendors.eventsListeners=function(){d.interactivity.el="window"==d.interactivity.detect_on?window:d.canvas.el,(d.interactivity.events.onhover.enable||d.interactivity.events.onclick.enable)&&(d.interactivity.el.addEventListener("mousemove",function(a){if(d.interactivity.el==window)var b=a.clientX,c=a.clientY;else var b=a.offsetX||a.clientX,c=a.offsetY||a.clientY;d.interactivity.mouse.pos_x=b,d.interactivity.mouse.pos_y=c,d.tmp.retina&&(d.interactivity.mouse.pos_x*=d.canvas.pxratio,d.interactivity.mouse.pos_y*=d.canvas.pxratio),d.interactivity.status="mousemove"}),d.interactivity.el.addEventListener("mouseleave",function(){d.interactivity.mouse.pos_x=null,d.interactivity.mouse.pos_y=null,d.interactivity.status="mouseleave"})),d.interactivity.events.onclick.enable&&d.interactivity.el.addEventListener("click",function(){if(d.interactivity.mouse.click_pos_x=d.interactivity.mouse.pos_x,d.interactivity.mouse.click_pos_y=d.interactivity.mouse.pos_y,d.interactivity.mouse.click_time=(new Date).getTime(),d.interactivity.events.onclick.enable)switch(d.interactivity.events.onclick.mode){case"push":d.particles.move.enable?d.fn.modes.pushParticles(d.interactivity.modes.push.particles_nb,d.interactivity.mouse):1==d.interactivity.modes.push.particles_nb?d.fn.modes.pushParticles(d.interactivity.modes.push.particles_nb,d.interactivity.mouse):d.interactivity.modes.push.particles_nb>1&&d.fn.modes.pushParticles(d.interactivity.modes.push.particles_nb);break;case"remove":d.fn.modes.removeParticles(d.interactivity.modes.remove.particles_nb);break;case"bubble":d.tmp.bubble_clicking=!0;break;case"repulse":d.tmp.repulse_clicking=!0,d.tmp.repulse_count=0,d.tmp.repulse_finish=!1,setTimeout(function(){d.tmp.repulse_clicking=!1},1e3*d.interactivity.modes.repulse.duration)}})},d.fn.vendors.densityAutoParticles=function(){if(d.particles.number.density.enable){var a=d.canvas.el.width*d.canvas.el.height/1e3;d.tmp.retina&&(a/=2*d.canvas.pxratio);var b=a*d.particles.number.value/d.particles.number.density.value_area;var c=d.particles.array.length-b;0>c?d.fn.modes.pushParticles(Math.abs(c)):d.fn.modes.removeParticles(c)}},d.fn.vendors.checkOverlap=function(a,b){for(var c=0;c<d.particles.array.length;c++){var e=d.particles.array[c];var f=a.x-e.x,g=a.y-e.y,h=Math.sqrt(f*f+g*g);h<=a.radius+e.radius&&(a.x=b?b.x:Math.random()*d.canvas.w,a.y=b?b.y:Math.random()*d.canvas.h,d.fn.vendors.checkOverlap(a))}},d.fn.vendors.createSvgImg=function(a){var b=d.tmp.source_svg,c=/#([0-9A-F]{3,6})/gi,e=b.replace(c,function(){if(a.color.rgb)var f="rgba("+a.color.rgb.r+","+a.color.rgb.g+","+a.color.rgb.b+","+a.opacity+")";else var f="hsla("+a.color.hsl.h+","+a.color.hsl.s+"%,"+a.color.hsl.l+"%,"+a.opacity+")";return f});var f=new Blob([e],{type:"image/svg+xml;charset=utf-8"}),g=window.URL||window.webkitURL||window,h=g.createObjectURL(f);var i=new Image;i.addEventListener("load",function(){a.img.obj=i,a.img.loaded=!0,g.revokeObjectURL(h),d.tmp.count_svg++}),i.src=h},d.fn.vendors.destroypJS=function(){cancelAnimationFrame(d.fn.drawAnimFrame),c.remove(),pJSDom=null},d.fn.vendors.drawShape=function(a,b,c,d,e,f){var g=e*f;var h=e/f;var i=180*(h-2)/h;var j=Math.PI-Math.PI*i/180;a.save(),a.beginPath(),a.translate(b,c),a.moveTo(0,0);for(var k=0;g>k;k++)a.lineTo(d,0),a.translate(d,0),a.rotate(j);a.fill(),a.restore()},d.fn.vendors.exportImg=function(){window.open(d.canvas.el.toDataURL("image/png"),"_blank")},d.fn.vendors.loadImg=function(a){if(d.tmp.img_error=void 0,""!=d.particles.shape.image.src)if("svg"==a){var b=new XMLHttpRequest;b.open("GET",d.particles.shape.image.src),b.onreadystatechange=function(a){4==b.readyState&&(200==b.status?(d.tmp.source_svg=a.currentTarget.response,d.fn.vendors.checkBeforeDraw()):(console.log("Error pJS - Image not found"),d.tmp.img_error=!0))},b.send()}else{var c=new Image;c.addEventListener("load",function(){d.tmp.img_obj=c,d.fn.vendors.checkBeforeDraw()}),c.src=d.particles.shape.image.src}else console.log("Error pJS - No image.src"),d.tmp.img_error=!0},d.fn.vendors.draw=function(){"image"==d.particles.shape.type?"svg"==d.tmp.img_type?d.tmp.count_svg>=d.particles.number.value?(d.fn.particlesDraw(),d.particles.move.enable?d.fn.drawAnimFrame=requestAnimFrame(d.fn.vendors.draw):cancelRequestAnimFrame(d.fn.drawAnimFrame)):d.tmp.img_error||(d.fn.drawAnimFrame=requestAnimFrame(d.fn.vendors.draw)):void 0!=d.tmp.img_obj?(d.fn.particlesDraw(),d.particles.move.enable?d.fn.drawAnimFrame=requestAnimFrame(d.fn.vendors.draw):cancelRequestAnimFrame(d.fn.drawAnimFrame)):d.tmp.img_error||(d.fn.drawAnimFrame=requestAnimFrame(d.fn.vendors.draw)):(d.fn.particlesDraw(),d.particles.move.enable?d.fn.drawAnimFrame=requestAnimFrame(d.fn.vendors.draw):cancelRequestAnimFrame(d.fn.drawAnimFrame))},d.fn.vendors.checkBeforeDraw=function(){"image"==d.particles.shape.type?"svg"==d.tmp.img_type&&void 0==d.tmp.source_svg?d.tmp.checkAnimFrame=requestAnimFrame(check):(cancelRequestAnimFrame(d.tmp.checkAnimFrame),d.tmp.img_error||(d.fn.vendors.init(),d.fn.vendors.draw())):(d.fn.vendors.init(),d.fn.vendors.draw())},d.fn.vendors.init=function(){d.fn.retinaInit(),d.fn.canvasInit(),d.fn.canvasSize(),d.fn.canvasPaint(),d.fn.particlesCreate(),d.fn.vendors.densityAutoParticles(),d.particles.line_linked.color_rgb_line=hexToRgb(d.particles.line_linked.color)},d.fn.vendors.start=function(){isInArray("image",d.particles.shape.type)?(d.tmp.img_type=d.particles.shape.image.src.substr(d.particles.shape.image.src.length-3),d.fn.vendors.loadImg(d.tmp.img_type)):d.fn.vendors.checkBeforeDraw()},d.fn.vendors.eventsListeners(),d.fn.vendors.start()};Object.deepExtend=function(a,b){for(var c in b)b[c]&&b[c].constructor&&b[c].constructor===Object?(a[c]=a[c]||{},arguments.callee(a[c],b[c])):a[c]=b[c];return a},window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}(),window.cancelRequestAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout}();function hexToRgb(a){var b=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;a=a.replace(b,function(a,b,c,d){return b+b+c+c+d+d});var c=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);return c?{r:parseInt(c[1],16),g:parseInt(c[2],16),b:parseInt(c[3],16)}:null}function clamp(a,b,c){return Math.min(Math.max(a,b),c)}function isInArray(a,b){return b.indexOf(a)>-1}window.pJSDom=[],window.particlesJS=function(a,b){"string"!=typeof a&&(b=a,a="particles-js"),a||(a="particles-js");var c=document.getElementById(a),d="particles-js-canvas-el",e=c.getElementsByClassName(d);if(e.length)for(;e.length>0;)c.removeChild(e[0]);var f=document.createElement("canvas");f.className=d,f.style.width="100%",f.style.height="100%";var g=document.getElementById(a).appendChild(f);null!=g&&pJSDom.push(new pJS(a,b))},window.particlesJS.load=function(a,b,c){var d=JSON.parse(b);window.particlesJS(a,d),c&&c()};