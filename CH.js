document.addEventListener('DOMContentLoaded', function () {
    const textItems = document.querySelectorAll('.text-item');

    textItems.forEach(item => {
        item.addEventListener('click', function () {
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked'); 
            }, 300); 
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('fade-in'); 
    const textItems = document.querySelectorAll('.text-item');

    textItems.forEach(item => {
        item.addEventListener('click', function () {
            if (this.id === 'ch4') {
                this.classList.add('error');
                this.classList.add('shake');
                setTimeout(() => {
                    this.classList.remove('shake');
                    this.classList.remove('error');
                }, 1500); 
            } else {
                document.body.classList.add('slide-up'); 
                setTimeout(() => {
                    let targetUrl = '';
                    if (this.id === 'ch1') {
                        targetUrl = 'ch1.html'; 
                    } else if (this.id === 'ch2') {
                        targetUrl = 'ch2.html';
                    }else if (this.id === 'ch3') {
                        targetUrl = 'ch3.html'; 
                    }
                    window.location.href = targetUrl;
                }, 500); 
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('fade-in'); 

    const backButton = document.getElementById('backs-button');

    if (backButton) {
        backButton.addEventListener('click', function () {
            document.body.classList.add('slide-up'); 
            setTimeout(() => {
                window.location.href = 'eye.html';
            }, 500); 
        });
    }
});