const baseUrl = 'https://jsonplaceholder.typicode.com';
const users = new Users();
const posts = new Users();
const controller = new Controller(users, posts);

const storageVal = localStorage.getItem("posts");
const database = storageVal?JSON.parse(storageVal):[];


//const formUser = document.querySelector('#form_user');
//const formGetPosts = document.querySelector('#form_get_posts');
//const formAddPost = document.querySelector('#form_add_post');
//const list = document.querySelector('#list');

    (async () => {
        const response = await fetch(`${baseUrl}/posts`);
        const json = await response.json();
        console.log(json)
       localStorage.setItem('posts', JSON.stringify(json));
    })();

    (async () => {
        const response = await fetch(`${baseUrl}/users`);
        const json = await response.json();
        await (json.forEach(item => controller.createUser(item)));

        await controller.processUsers(user =>
            Toolbox.addItemToList('ul',
                `User ID: ${user.id} , user Name: ${user.name},
             user Nickname: ${user.username}`))
    })();

Toolbox.addNavButtonControl('#btn_form_user',
    ['#form_user', '#form_add_post', '#form_get_posts']);

Toolbox.addNavButtonControl('#btn_form_add_post',
    ['#form_add_post', '#form_user', '#form_get_posts']);

Toolbox.addNavButtonControl('#btn_form_get_posts',
    ['#form_get_posts', '#form_add_post', '#form_user']);





//*************************Form User Handler***************************
Toolbox.formHandler('#form_user', user => {
    controller.createUser(user);
    Toolbox.addItemToList('#list',`User ID: ${user.id} ,
     user Name: ${user.name},
     user Nickname: ${user.username}`);
});

//**********************Form Add Post**********************************
Toolbox.formHandler('#form_add_post', item => {
    let post = {
        title: item.title,
        body: item.body,
        userId: item.userId
    };
    fetch(`${baseUrl}/posts`, {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }).then(response =>  response.json())
        .then(data =>{
            console.log(database)
            database.push(data);
            console.log(database)
            alert(`ID USER = ${data.userId} successfully`)
        })
});
//**********************Form Get Post**********************************




Toolbox.formHandler('#form_get_posts', post => {
    database.forEach((value) => {
        if(value.userId === +post.id){
            console.log(value)
             controller.createPost(value);
           Toolbox.addItemToList('#list_posts',`Post User ID: ${value.userId} ,
             Post Title: ${value.title},
             Post Body: ${value.body}`);
        }

    })
});

console.log(database);