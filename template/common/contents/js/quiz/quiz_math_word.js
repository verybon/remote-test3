"use strict";function puzzleQuizInit(){$ts.getEl("[data-puzzle-container]").forEach(function(t){return new PUZZLEQUIZ({container:t})})}function PUZZLEQUIZ(t){this.container=t.container,this.puzzleContainer=$ts.getEl("[data-puzzle]",this.container)[0],this.puzzleBtn=$ts.getEl("li",this.puzzleContainer),this.answerBtn=$ts.getEl("[data-answer-btn]",this.container)[0],this.hintBtn=$ts.getEl("[data-hint-btn]",this.container)[0],this.timerContainer=$ts.getEl("[data-timer-container]",this.container)[0],this.popup=$ts.getEl("[data-popup-page]",this.container)[0],this.answer=$ts.getEl("[data-answer]"),this.answerLength=$ts.getEl("[data-answer]",this.container).length,this.answerCount=0,this.time=6e4,this.count=0,this.check=!0,this.intervalID=null,this.aniIntervalID=null;var i=this;this.set=function(){this.timerContainer&&(this.timerBtn=$ts.ce({tag:"button",class:"timerBtn",parent:this.timerContainer}),this.timerBar=$ts.ce({tag:"div",class:"timerBar",parent:this.timerContainer}),this.timerGageBar=$ts.ce({tag:"div",class:"timerGageBar",parent:this.timerBar}),this.bar=$ts.ce({tag:"div",class:"bar",parent:this.timerGageBar}),this.timerText=$ts.ce({tag:"div",class:"timerText",parent:this.timerContainer})),this.timerText.innerHTML='<span class="sec">'+this.time/1e3+'초</span> 타이머 <span class="state">OFF</span>',this.addEvent()},this.addEvent=function(){this.puzzleBtn.forEach(function(t){t.addEventListener("click",i.btnClick)}),this.timerBtn.addEventListener("click",this.timerControl),this.hintBtn.addEventListener("click",this.hintView),this.answerBtn.addEventListener("click",this.answerView),this.timerBtn.addEventListener("click",$efSound.click),this.hintBtn.addEventListener("click",$efSound.click),this.answerBtn.addEventListener("click",$efSound.click)},this.pointerOn=function(){this.puzzleBtn.forEach(function(t){t.classList.remove("pointerOff")}),this.hintBtn.classList.remove("pointerOff"),this.timerBtn.classList.remove("pointerOff")},this.pointerOff=function(){this.puzzleBtn.forEach(function(t){t.classList.add("pointerOff")})},this.timerControl=function(){i.puzzleContainer.classList.contains("suss")||(i.timerContainer.classList.contains("on")?i.stopTimer():i.startTimer())},this.startTimer=function(){this.timerContainer.classList.add("on"),this.intervalID=setInterval(function(){var t=i.time/1e3,e=i.time/1e3-i.count;i.count++,1e3*i.count>=i.time?(window.$efSound.wrong(),i.stopTimer()):(i.timerText.innerHTML='<span class="sec">'+parseInt(i.time/1e3-i.count)+"</span>초 남았습니다!",i.bar.style.width=e/t*100+"%")},1e3),i.timerText.innerHTML='<span class="sec">'+parseInt(i.time/1e3)+"</span>초 남았습니다!"},this.stopTimer=function(){clearInterval(this.intervalID),this.count=0,this.timerContainer.classList.remove("on"),this.timerText.innerHTML='<span class="sec">'+this.time/1e3+'초</span> 타이머 <span class="state">OFF</span>',i.bar.removeAttribute("style")},this.btnClick=function(){this.hasAttribute("data-answer")?(this.classList.contains("complete")?(this.classList.remove("complete"),i.answerCount=i.answerCount-1):(this.classList.add("complete"),i.answerCount=i.answerCount+1),window.$efSound.correct()):window.$efSound.incorrect(),i.answerCount===i.answerLength&&(i.complete(),i.pointerOff())},this.hintView=function(){if(!i.puzzleContainer.classList.contains("completed"))if(this.classList.contains("on"))i.answerCount=0,i.puzzleReset(),this.classList.remove("on");else{for(var t=i.answerLength<=3?1:2,e=[],n=i.answerCount=0;n<t;n++){e[n]=Math.floor(Math.random()*i.answerLength);for(var s=0;s<n;s++)if(e[n]===e[s]){--n;break}}i.puzzleReset();for(n=0;n<e.length;n++)i.answer[e[n]].classList.add("complete"),i.answerCount=i.answerCount+1;this.classList.add("on")}},this.answerView=function(){this.classList.contains("reset")?i.reset():(this.classList.add("reset"),i.complete(),i.check&&i.animationEnd())},this.complete=function(){i.timerContainer.classList.contains("on")&&i.stopTimer(),i.puzzleContainer.classList.add("completed"),i.puzzleComplete(),i.pointerOff(),i.timerBtn.classList.add("pointerOff"),i.hintBtn.classList.add("pointerOff"),i.answerBtn.classList.add("reset"),i.check&&i.animationEnd()},this.openPopup=function(){i.popup.classList.add("on"),i.buttonEVBlock(),clearInterval(i.aniIntervalID)},this.animationEnd=function(){i.aniIntervalID=setInterval(function(){i.openPopup()},2400),this.check=!1},this.puzzleComplete=function(){this.puzzleBtn.forEach(function(t){t.hasAttribute("data-answer")&&t.classList.add("complete")})},this.puzzleReset=function(){this.puzzleBtn.forEach(function(t){t.classList.remove("complete")})},this.buttonEVBlock=function(){this.answerBtn.classList.add("pointerOff"),this.hintBtn.classList.add("pointerOff"),this.timerBtn.classList.add("pointerOff"),this.timerContainer.classList.add("pointerOff")},this.reset=function(){this.answerBtn.classList.remove("reset"),this.puzzleContainer.classList.remove("completed"),this.startTimer(),this.pointerOn(),this.puzzleReset(),this.answerCount=0,this.check=!0,clearInterval(i.aniIntervalID)},this.set()}window.$popupCallBack={close:function(t){$ts.getEl("[data-timer-container]")[0].classList.remove("pointerOff"),$ts.getEl("[data-answer-btn]")[0].classList.remove("pointerOff")}};