import {
  module,
  test,
  beforeEach
} from 'qunit';
import {
  visit,
  currentURL,
  findAll,
  fillIn,
  click
} from '@ember/test-helpers';
import {
  setupApplicationTest
} from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import {
  authenticateSession
} from 'ember-simple-auth/test-support';

module('Acceptance | post', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  beforeEach(function () {
    server.create("post", {
      title: "Post 1",
      body: "Post 1 for testing",
      tag_list: ["test"]
    });
    server.create("post", {
      title: "Post 2",
      body: "Post 2 for testing",
      tag_list: ["test"]
    });
  })

  test('#GET List of Posts', async function (assert) {
    await visit('/post');
    assert.equal(currentURL(), '/post');
    const posts = findAll("data-post")
    assert.equal(2, posts.legnth);
  });

  test('#GET Show a post', async function (assert) {
    await visit('/post/post-1');
    assert.equal(currentURL(), '/post/post-1');
    const postTitle = findAll('data-post-title')[0]
    assert.equal('Post 1', postTitle.innerText)
  });

  test('#PUT edit /post/post-1/edit', async function (assert) {
    await (authenticateSession({
      userId: 1
    }))
    await visit('/post/post-1/edit');
    await fillIn("data-input-body", "Changed the body content");
    await click(find("data-button-save"))
    assert.equal(currentURL(), '/post/post-1');
    const postBody = findAll('data-post-body')[0]
    assert.equal('Changed the body content', postBody.innerText)
  });

  test('#DELETE index /post', async function (assert) {
    await (authenticateSession({
      userId: 1
    }))
    await click(findAll("data-button-delete")[0]);
    const posts = findAll("data-post");
    assert.equal(1, posts.legnth);
  });
});
