class Users {
    constructor() {
        this.users = {};
        this.posts = {};
    }


    getPost = (id) => {
        if(this.posts[id]){
            return this.posts[id];
        } else {
            throw new Error('User is not found');
        }
    }

    addPosts = (post) => {
        if(this.posts[post.id]){
            throw new Error('Error can`t connect to weblink');
        } else {
            this.posts[post.id] = post;
            return true;
        }
    }


    getAllPosts = () => {
        return Object.values(this.posts)
    }



    add = (user) => {
        if(this.users[user.id]){
            throw new Error('Error can`t connect to weblink');
    } else {
            this.users[user.id] = user;
            return true;
        }
    }

    remove = (id) => {
        if(this.users[id]) {
            delete this.users[id];
        } else {
            throw new Error('There is not such user');
        }
    }

    removeAll = () => {
        this.users.clear();
    }

    get = (id) => {
        if(this.users[id]){
            return this.users[id];
        } else {
            throw new Error('User is not found');
        }
    }

    getAll = () => {
        return Object.values(this.users)
    }

    set = (user) => {
        if(!this.users[user.id]) {
            throw new Error('User is not found!!!');
        } else {
                this.users[user.id] = user;
                return true;
            }
        }



}