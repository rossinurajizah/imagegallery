const container = document.querySelector('.container');
const besar =document.querySelector('.besar');
const kecils=document.querySelectorAll('.kecil');

container.addEventListener('click',function(e) {

	// cek apakah yang di klik adalah thumb
	if (e.target.className == 'kecil') {
		besar.src=e.target.src;
		besar.classList.add('fade');
		setTimeout(function() {
			besar.classList.remove('fade');
		}, 500);

	    kecils.forEach(function(kecil) {
		// 	   if(kecil.classList.contains('active') ) {\
	    //        kecil.classList.remove('active');
		// }
		   kecil.className='kecil';
	});

		e.target.classList.add('active');

	}
});