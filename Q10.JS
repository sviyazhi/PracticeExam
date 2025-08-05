//Q10a

const post = {
  postId: "123456789",
  author: {
    userId: "ugyy7gh7",
    name: "John Doe",
    tags: ["Alice Wawukali", "James Wantali", "Peter Woyera"]
}
};

class Post {
  constructor(postId, author) {
    this.postId = postId;
    this.author = author;
  }
}

const post2 = new Post("123456789", { name: "John Doe" });

function PostConstructor(postId, author) {
  this.postId = postId;
  this.author = author;
}

const post3 = new PostConstructor("123456789", { name: "John Doe" });






//Q10c

const jsonString = JSON.stringify(post);
console.log(jsonString);

const jsObject = JSON.parse(jsonString);
console.log(jsObject);