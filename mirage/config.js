export default function() {
  this.namespace = 'api/v1/';
  this.get('posts', function(){
    return [{
      title: 'Post 1',
      body: "Post 1 for testing",
      tag_list: ["test"]
    }, {
      title: 'Post 2',
      body: "Post 2 for testing",
      tag_list: ["test"]
    }]
  });
  this.get('posts/post-1', function(){
    return {
      title: 'Post 1',
      body: "Post 1 for testing",
      tag_list: ["test"]
    }
  });
  this.put('posts/post-1', function(){
    return {
      title: 'Post 1',
      body: "Changed the body content",
      tag_list: ["test"]
    }
  });
  this.delete('posts/post-1', function(){
    return true;
  });
}
