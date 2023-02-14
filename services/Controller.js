class Controller {
    constructor(users, posts) {
        this.users = users;
        this.posts = posts;
    }
    //*********************************
    createPost = (post) => {
        return this.posts.addPosts(post);
    }

    processPosts(postProcessor){
        this.posts.getAllPosts().forEach(postProcessor);
    }


    getPostById = (id) => {
        return this.posts.getPost(id);
    }

    //*********************************


    createUser = (user) => {
        return this.users.add(user);
    }

    removeUser = (id) => {
        return this.users.remove(id);
    }
    getUserById = (id) => {
        return this.users.get(id);
    }

    processUsers(userProcessor){
        this.users.getAll().forEach(userProcessor);
    }
}