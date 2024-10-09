const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const contact = document.querySelector('#Contact');
const header = document.querySelector('header');
const note = document.querySelector('#Note');
const interact = document.querySelector('#interact');

document.querySelectorAll('.flex-item').forEach(p => {
    p.addEventListener('mouseover', function() {
        p.style.backgroundColor = '#F2E5BF';
        p.style.color = '#CB6040';
        body.style.backgroundColor = '#DA8359';  // Màu nền khi di chuột vào
        h1.style.color = '#ffffff';
        contact.style.color = '#ffffff';
        header.style.backgroundColor = '#F2E5BF';
        header.style.color = '#257180';
        note.style.color = '#FCFAEE';
        document.querySelectorAll('.grid-item').forEach(g => {
            g.style.color = '#F2E5BF';
        });
    });

    p.addEventListener('mouseout', function() {
        p.style.backgroundColor = '#CB6040';
        p.style.color = '#F2E5BF';
        body.style.backgroundColor = '#F2E5BF';  // Màu nền trở về ban đầu khi di chuột ra
        h1.style.color = '#461e14';
        contact.style.color = '#6d2b16';
        header.style.backgroundColor = '#257180';
        header.style.color = '#F2E5BF';
        note.style.color = '#A5B68D';

        document.querySelectorAll('.grid-item').forEach(g => {
            g.style.color = '#CB6040';
        });
    });
});

document.querySelectorAll('.grid-item').forEach(p => {
    p.addEventListener('mouseover', function() {
        // Khi di chuột vào
        p.style.color = '#257180';
        p.style.fontWeight = 'bolder';
    });

    p.addEventListener('mouseout', function() {
        // Khi di chuột ra
        p.style.color = '#CB6040';
        p.style.fontWeight = 'normal';
    });
});

//------------------//

const image1 = document.querySelector('#item1');
const image2 = document.querySelector('#item2');
const minibox = document.querySelector('#minibox')
const changeImage = document.createElement('img');

//Dat kich thuoc
changeImage.style.width = '200px';
changeImage.style.height = '200px';
changeImage.style.margin = '10px auto';
changeImage.style.marginTop = '0px';
changeImage.style.borderRadius = '20px'

image1.addEventListener('mouseover', function() {
    changeImage.src = image1.src;
    changeImage.alt = image1.alt;
    minibox.append(changeImage);
});

image2.addEventListener('mouseover', function() {
    changeImage.src = image2.src;
    changeImage.alt = image2.alt;
    minibox.append(changeImage);
});