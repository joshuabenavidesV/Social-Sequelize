const { Comment, Like, Post, Profile, User } = require("./index");
const { sequelize } = require('./db/connection.js');
const users = require("./seed/users.json")
const profile = require("./seed/profiles.json")
const post = require("./seed/posts.json")
const likes = require("./seed/likes.json")
const comments = require("./seed/comments.json")

describe('Social Sequelzie Test', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the test suite is run
       await sequelize.sync({ force: true });
    })

    // Write your tests here
    
    test("replace with your test", function() {
        expect(true).toBe(true);
    })

    test('can create a User', async () => {
    const testUser = await User.create({ username: "john_doe", email: "john_doe@example.com" });
    expect(testUser.username).toBe("john_doe");
})
test('can create a Profile', async () => {
    const testProfile = await Profile.create({ "bio": "I'm a software engineer",
      "profilePicture": "https://example.com/profile1.jpg",
      "birthday": "1990-06-15" });
    expect(testProfile.bio).toBe("I'm a software engineer");
})
test('can create a Post', async () => {
    const testPost = await Post.create({ "title": "Hiking in Yosemite",
      "body": "I had an amazing time hiking in Yosemite National Park!",
      "createdAt": "2022-03-15T10:30:00.000Z"});
    expect(testPost.createdAt).toBe("2022-03-15T10:30:00.000Z");
})
test('can create a Comment', async () => {
    const testComment = await Comment.create({  "body": "This is a great post!",
      "createdAt": "2022-01-01T12:00:00Z"});
    expect(testComment.body).toBe("This is a great post!");
})

test('can create a Like', async () => {
    const testLike = await Like.create({  "reactionType": "👍",
      "createdAt": "2022-03-20T10:00:00Z"});
    expect(testLike.reactionType).toBe("👍");
})
test('user can have only one profile', async () => {
    await sequelize.sync({force:true})
    let myUser = await User.create(users[0]);
    let myProfile = await Profile.create(profile[0]);
    await myUser.setProfile(myProfile);
    const associatedProfile = await myUser.getProfile();

    expect(associatedProfile instanceof Profile).toBeTruthy();
})

test('user can have many likes', async () => {
    await sequelize.sync({force:true})
    let myUser = await User.create(users[0]);
    let myLike1 = await Like.create(likes[0]);
    let myLike2 = await Like.create(likes[1]);
    await myUser.addLike(myLike1);
    await myUser.addLike(myLike2);
    const associatedLikes = await myUser.getLikes();

    expect(associatedLikes.length).toBe(2);
    expect(associatedLikes instanceof Like).toBeTruthy;
})

test('Likes can have many users', async () => {
    await sequelize.sync({force:true})
    let myLike = await Like.create(likes[0]);
    let user1 = await User.create(users[0]);
    let user2 = await User.create(users[1]);
    await myLike.addUser(user1);
    await myLike.addUser(user2);
    const associatedUsers = await myLike.getUsers();

    expect(associatedUsers.length).toBe(2);
    expect(associatedUsers instanceof User).toBeTruthy;
})
})