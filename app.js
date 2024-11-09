// fetch('https://jsonplaceholder.typicode.com/posts/67')
// // .then(response => console.log(response))
// .then(response => response.json())
// .then(data => console.log(data))

// fetch(" http://localhost:3000/users")
// .then((response)=>response.json())
// .then((response)=> console.log(response))

// fetch("http://localhost:3000/users" , {
//     method : 'POST',
//     headers : {
//         'content-type' : 'application/json; charset=UTF8',
//     },
//     body : JSON.stringify({
//         firstName : 'asghar',
//         lastName : 'asghari',
//         age : 50
//     })
// })
// .then((response)=> response.json())
// .then((json)=> console.log(json));

// fetch('http://localhost:3000/users', {
//     method: 'POST',
//     body: JSON.stringify({
//         firstName: 'asghar',
//         lastName: 'asghari',
//         age: 10,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     }
//   })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// fetch('http://localhost:3000/users/1',{
//   method : 'DELETE'
// })
// .then((response)=>response.json())
// .then((json)=>console.log(json))

// fetch('http://localhost:3000/users/3', {
//   method : 'PATCH',
//   headers : {
//     'Content-type' : 'application/json; charset=UTF-8',
//   },
//   body : JSON.stringify({
//     firstName : 'hosein',
//     lastName : 'hoseinzadeh',
//     age: 9
//   })

// })
// .then((response) => response.json())
// .then((response) => console.log(response))

// fetch('http://localhost:3000/users/2', {
//   method : 'PUT',
//   headers : {
//     'Content-type' : 'application/json; charset=UTF-8',
//   },
//   body : JSON.stringify({
//     firstName : 'jonjon',
//     age: 999
//   })
// })
// .then((response) => response.json())
// .then((response) => console.log(response))

// axios.get('http://localhost:3000/users')
// .then(res=> console.log(res.data))

// axios.post('http://localhost:3000/users', {
//   firstName : 'masoumeh',
//   lastName : 'mohajeri',
//   age : 77
// })
// .then(res=>console.log(res.data));

// axios.delete('http://localhost:3000/users/16d1')
// .then(res=>console.log(res.data));

// axios.patch('http://localhost:3000/users/3',{
//   age :999,
//   firstName: 'mohammad'
// })
// .then(res=>console.log(res.data));

// axios.patch('http://localhost:3000/users/3',{
//   age :999,
//   firstName: 'mohammadhosein',
//   lastName: 'imani'
// })
// .then(res=>console.log(res.data));

// axios.put('http://localhost:3000/users/3',{
//   age :999,
//   firstName: 'mohammmmmad'
// })
// .then(res=>console.log(res.data));

axios
  .put("http://localhost:3000/course/3", {
    course: "web",
  })
  .then((res) => console.log(res.data));
