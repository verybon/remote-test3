suh_h_0401_01_0007_301_1.html
: 부등호 수정
∙∙∙∙∙∙
![image](https://user-images.githubusercontent.com/2328191/151127682-fc61a52e-b4e4-40ed-9592-f86545c0499f.png)

㉠, ㉡, ㉢, ㉣![image](https://user-images.githubusercontent.com/2328191/151111739-dd71f20e-4770-4738-b790-21d16967af75.png)

test
18035＝10000＋8000＋30＋5

    //
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



====


    //이미지 작업
        suh_p_0401_01_0004_203_1, 
        suh_p_0401_01_0005_201_3, 
        suh_p_0401_01_0005_203_1, 
	suh_p_0401_01_0006_201_3
	suh_p_0401_01_0009_206_1
    //슬라이드 순서체크
    suhi_p_0401_01_0007.html
