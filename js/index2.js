	let obj = {}
	let obj1 = {}
	let obj2 = {}
	let obj3 = {}
	let obj4 = {}
	function gender(gen){
		let one = document.getElementById('one')
		one.style.display = 'none'
		obj.gender = gen
	}
	
	let img = document.getElementById('img')
	let negative = ['img/negative/1.jpg','img/negative/2.jpg','img/negative/3.jpg','img/negative/4.jpg','img/negative/5.jpg','img/negative/6.jpg'];
	let positive = ['img/positive/1.jpg','img/positive/2.jpg','img/positive/3.jpg','img/positive/4.jpg','img/positive/5.jpg','img/positive/6.jpg'];
	let driver = ['img/11.jpg']
	let ar1 = negative.concat(positive).concat(positive)
	
	let ar2 = [...negative,...negative,...negative,...negative,...positive,...positive]
	
	let ar3 = [...negative,...positive,...positive]
	
	let ar4 = [...negative,...negative,...positive,...positive,...positive,...positive]
	for(let i = 0;i<6;i++){
		ar1.push(driver[0])
		ar3.push(driver[0])
	}
	for(let i = 0;i<12;i++){
		ar2.push(driver[0])
		ar4.push(driver[0])
	}
	let arr1 = []
	let arr2 = []
	let arr3 = []
	let arr4 = []
	function randFun(arr) {
		for(let i= 0;i < arr.length; i++) {
			let index = parseInt(Math.random() * (arr.length - 1));
			let tempValue = arr[i];
			arr[i] = arr[index];
			arr[index] = tempValue;
		}
			return arr;
		}
	arr1 = randFun(ar1);
	arr2 = randFun(ar2);
	arr3 = randFun(ar3);
	arr4 = randFun(ar4);
	let arrs = ''
	let next = ''
	let i = 0;
	function firstOk(s,arr){
		let imgBox = document.getElementById('imgBox')
		imgBox.style.display = 'block'
		let imgBtn = document.getElementById('imgBtn')
		imgBtn.style.display = 'block'
		let num = document.getElementById(s)
		num.style.display = 'none'
		img.src = arr[0]
		start();
		next = s
		arrs = arr
	}
	let aa = []
	function judge(type){
		stop()
		let imgBtn = document.getElementById('imgBtn')
		imgBtn.style.display = 'block'
		let imgSrc = document.getElementById('img').getAttribute('src')
		if(next == 'first' || next == 'two'){
			if(imgSrc.indexOf('positive') != '-1' && type == 'positive'){
				aa.push('积极词')
				imgSrc = ''
				img.setAttribute('src','img/yes.jpg')
			}else if(imgSrc.indexOf('negative') != '-1' && type == 'negative'){
				aa.push('消极词')
				imgSrc = ''
				img.setAttribute('src','img/yes.jpg')
			}else if(imgSrc.indexOf('img/11') != '-1' && type == 'positive'){
				aa.push('女司机')
				imgSrc = ''
				img.setAttribute('src','img/yes.jpg')
			}else{
				if(imgSrc.indexOf('negative') != '-1'){
					aa.push('<span style="color:red ">消极词</span>')
				}else{
					aa.push('<span style="color:red ">积极词</span>')
				}
				imgSrc = ''
				img.setAttribute('src','img/no.jpg')
			}
		}else{
			if(imgSrc.indexOf('positive') != '-1' && type == 'positive'){
				aa.push('积极词')
				imgSrc = ''
				img.setAttribute('src','img/yes.jpg')
			}else if(imgSrc.indexOf('negative') != '-1' && type == 'negative'){
				aa.push('消极词')
				imgSrc = ''
				img.setAttribute('src','img/yes.jpg')
			}else if(imgSrc.indexOf('img/11') != '-1' && type == 'negative'){
				aa.push('女司机')
				imgSrc = ''
				img.setAttribute('src','img/yes.jpg')
			}else{
				if(imgSrc.indexOf('negative') != '-1'){
					aa.push('<span style="color:red ">消极词</span>')
				}else{
					aa.push('<span style="color:red ">积极词</span>')
				}
				imgSrc = ''
				img.setAttribute('src','img/no.jpg')
			}
		}
		imgBtn.style.display = 'none'
		i ++;
		if(i == arrs.length){
			setTimeout(function(){
				let imgBox = document.getElementById('imgBox')
				imgBox.style.display = 'none'
				i = 0
				if(next == 'four'){
					end()
					document.getElementsByClassName('contont')[0].style.display = 'none';
					document.getElementById('table').style.display = 'block'
				}
				
			},200);
		}else{
			setTimeout(function(){
				img.src = arrs[i];
				start();
				imgBtn.style.display = 'block'
			},200);
		}
		obj1.type = aa;
		obj1.type2 = a;
	}
	function end(){
		document.getElementById('a').innerHTML = obj.gender;
		let box = document.getElementById('tableBox');
		let box2 = document.getElementById('tableBox2');
		let box3 = document.getElementById('tableBox3');
		let box4 = document.getElementById('tableBox4');
		for(let i = 0;i<obj1.type.length;i++){
			if(i >= 24 && i < 72){
				box2.innerHTML += '<tr><td>' + obj1.type[i] + '</td><td>'+ obj1.type2[i] + '</td><tr>'
			}else if(i >= 72 && i < 96){
				box3.innerHTML += '<tr><td>' + obj1.type[i] + '</td><td>'+ obj1.type2[i] + '</td><tr>'
			}else if(i>=96){
				box4.innerHTML += '<tr><td>' + obj1.type[i] + '</td><td>'+ obj1.type2[i] + '</td><tr>'
			}else{
				box.innerHTML += '<tr><td>' + obj1.type[i] + '</td><td>'+ obj1.type2[i] + '</td><tr>'
			}
		}
	}
	var hour,minute,second;
		hour=minute=second=0;
		var millisecond=0;
		var int;
		function start(){
			int=setInterval(timer,1);
		}
		let a = []
		function timer(){
			millisecond=millisecond + 1;
		}
		function stop(){
				a.push(millisecond)
				window.clearInterval(int);
				millisecond = 0
		}