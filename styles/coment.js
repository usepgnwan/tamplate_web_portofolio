

function coment() {
		let name = document.querySelector('#nama').value;
		let comments = document.querySelector('#pesan').value;


	if ( name.length == 0 ||  comments.length == 0 ) {
		alert('Masih ada yang kosong!');
	}else{
		alert('Terima Kasih!');
		
		const history = {
			namaNya: name,
			komeNnya:comments,
		}

		simpanHistory(history);
		renderHistory();

	}
}