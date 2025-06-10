
const boxxEl = document.querySelector('#boxx');
const h1 = document.querySelector('h1');
    h1.textContent ='Qiymatlar :'
    h1.style.color = 'rgb(11, 193, 38)'

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((res) => print(res))
    .catch((e) => console.error('fetch error:', e));
    

function print(res) {
    res.forEach(post => {
        const textEl = document.createElement('h1');
        textEl.textContent = post.body;
        textEl.classList.add('stil');
        boxxEl.append(textEl);
        console.log(textEl)
    });
}