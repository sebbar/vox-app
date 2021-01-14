const data = {
    users: [],
    posts: [],
    comments: [],
    auth: {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2MTA1NTI2NTIsImV4cCI6MTYxMDYzOTA1Mn0.-v3xc91vPC3uyOTxwYyGVXD2qQ_5a2bgJ3nURTb1I8c'
    }
};

export class Comment {
    id: string;
    userId: number;
    postId: number;
    content: string;
    created: Date;
    modified: Date;

    constructor(id, userid, postid, content) {
        this.id = id;
        this.userId = userid;
        this.postId = postid;
        this.content = content;
        this.created = new Date();
    }
}

export class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    avatar: string;

    constructor( id: number, firstname: string, lastname: string) {
        this.id = id;
        this.firstName = firstname;
        this.lastName = lastname;
    }

    displayname() {
        return (this.firstName + ' ' +  this.lastName);
    }
}

export class Post {
    id: number;
    authorId: number;
    title: string;
    content: string;
    comments: Comment[];
    created: Date;
    modified: Date;

    constructor(id, tilte, athorid) {
        this.id = id;
        this.title = tilte;
        this.authorId = athorid;
        this.created = new Date();
    }

    getComments() {
        return (this.comments);
    }
}

// export class Model {
//     user;
//     posts;
//     constructor() {
//     this.user = new User(1, 'Adam', 'Sebbar');
//     this.posts = [
//         new Post('Buy Flowers', false),
//         new Post('Get Shoes', false),
//         new Post('Collect Tickets', false),
//         new Post('Call Joe', false)]
//     }
// }


