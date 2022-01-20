test
18035＝10000＋8000＋30＋5


suh_p_0401_01_0003_401_1.html 문제8
suh_p_0401_01_0004_401_1.html 문제4



======





document.addEventListener('DOMContentLoaded', function (){

    //스텝 클릭
		var arrow = $ts.getEl('.page_2 .clickObj');
		var pages = $ts.getEl('.page_2 .basicSlider_slides > li');

		arrow.forEach(function (objs, index){
			objs.addEventListener('click', function () {
				for(var i = 0; i < pages.length; i++){
					pages[i].classList.remove('on');
				}
				pages[index+1].classList.add('on');
			});
			objs.addEventListener('click', $efSound.click);
		});
    
	}, false);


이미지작업
suh_p_0401_01_0004_203_1
suh_p_0401_01_0005_203_1
