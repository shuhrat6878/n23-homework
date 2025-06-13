
const Url = 'https://jsonplaceholder.typicode.com/users'

async function getUsers() {
    try {
        const res = await fetch(Url)
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('eror users',error)
    }
    
}
// getUsers().then(console.log)


async function getIdUsers(id) {
    try {
        const res = await fetch(`${Url}/${id}`)
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('ereor id ',error);
        
    }
    
}
// getIdUsers(4).then(console.log)

























// const controller = new AbortController();


// async function getData() {
//     try {
//         const data = await fetch('https://httpstat.us/200?sleep=6000', {
//             signal: controller.signal
//         })
//         console.log(data)
//     } catch (error) {
//         console.log('hatolik wuyerda cqadi--=---',error)
//     }
    
// }
// getData();

// setTimeout(() => {
//     controller.abort()
// }, 3000);