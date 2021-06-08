import { render, cleanup,screen} from '@testing-library/react';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import CommentOnMedia from './CommentOnMedia';;

afterEach(cleanup);
class LocalStorageMock {
  constructor() {
      this.store = {};
  }

  clear() {
      this.store = {};
  }

  getItem(key) {
      return this.store[key] || null;
  }

  setItem(key, value) {
      this.store[key] = String(value);
  }

  removeItem(key) {
      delete this.store[key];
  }
};

global.localStorage = new LocalStorageMock();
global.localStorage.setItem("userData", JSON.stringify({ "user": { "showCase": { "title": "Showcase", "photos": [{ "description": "Open water with nature having an effect on people", "tags": [{ "count": 1, "_id": "60b9014fc3e2a5e8ab88355d", "name": "nature", "__v": 0, "createdAt": "2021-06-03T16:20:31.302Z", "updatedAt": "2021-06-03T16:20:31.302Z" }, { "count": 2, "_id": "60b9014fc3e2a5e8ab88355f", "name": "sea", "__v": 0, "createdAt": "2021-06-03T16:20:31.306Z", "updatedAt": "2021-06-04T07:45:42.453Z" }, { "count": 1, "_id": "60b9014fc3e2a5e8ab883561", "name": "open", "__v": 0, "createdAt": "2021-06-03T16:20:31.308Z", "updatedAt": "2021-06-03T16:20:31.308Z" }, { "count": 1, "_id": "60b9014fc3e2a5e8ab883563", "name": "water", "__v": 0, "createdAt": "2021-06-03T16:20:31.310Z", "updatedAt": "2021-06-03T16:20:31.310Z" }, { "count": 1, "_id": "60b9014fc3e2a5e8ab883565", "name": "sunny", "__v": 0, "createdAt": "2021-06-03T16:20:31.312Z", "updatedAt": "2021-06-03T16:20:31.312Z" }, { "count": 1, "_id": "60b9c34cf2719a0012dce992", "name": "beauty", "createdAt": "2021-06-04T06:08:12.958Z", "updatedAt": "2021-06-04T06:08:12.958Z", "__v": 0 }, { "count": 35, "_id": "60b7e454c3e2a5e8ab87e435", "name": "", "__v": 0, "createdAt": "2021-06-02T20:04:36.518Z", "updatedAt": "2021-06-06T19:59:19.923Z" }], "comments": [], "views": 30, "favouriteCount": 2, "isPublic": true, "license": "None", "safety": "Safe", "contentType": "Photo", "allowCommenting": false, "albums": [], "_id": "60b9014f3f586e0012bf004c", "title": "Nature", "url": "https://api.qasaqees.tech/public/images/60b7e086e2660c0012988e44/60b901483f586e0012bf004b.jpg", "creator": { "_id": "60b7e086e2660c0012988e44", "firstName": "omar", "lastName": "elwakil", "userName": "hakar2", "id": "60b7e086e2660c0012988e44", "numberOfFollowers": 0, "isFollowing": false }, "createdAt": "2021-06-03T16:20:31.316Z", "updatedAt": "2021-06-04T07:52:40.281Z", "__v": 0, "commentsNum": 0, "isFavourite": false }, { "description": "", "tags": [{ "count": 1, "_id": "60b9c411c3e2a5e8ab8f41a6", "name": "man", "__v": 0, "createdAt": "2021-06-04T06:11:29.069Z", "updatedAt": "2021-06-04T06:11:29.069Z" }, { "count": 1, "_id": "60b9c411c3e2a5e8ab8f41a8", "name": "walking", "__v": 0, "createdAt": "2021-06-04T06:11:29.073Z", "updatedAt": "2021-06-04T06:11:29.073Z" }, { "count": 2, "_id": "60b7bf73c3e2a5e8ab87ce53", "name": "dog", "__v": 0, "createdAt": "2021-06-02T17:27:15.824Z", "updatedAt": "2021-06-04T06:11:29.075Z" }], "comments": [], "views": 0, "favouriteCount": 0, "isPublic": true, "license": "None", "safety": "Safe", "contentType": "Photo", "allowCommenting": true, "albums": [], "_id": "60b9c411f2719a0012dce994", "title": "man-walking-dog", "url": "https://api.qasaqees.tech/public/images/60b7e086e2660c0012988e44/60b9c410f2719a0012dce993.jpg", "creator": { "_id": "60b7e086e2660c0012988e44", "firstName": "omar", "lastName": "elwakil", "userName": "hakar2", "id": "60b7e086e2660c0012988e44", "numberOfFollowers": 0, "isFollowing": false }, "createdAt": "2021-06-04T06:11:29.078Z", "updatedAt": "2021-06-04T06:11:29.078Z", "__v": 0, "commentsNum": 0, "isFavourite": false }] }, "description": "I'm a software Developer... \nWelcome to my profile!!!\nWhat do you want to know about me?", "occupation": "Software Developer", "homeTown": "Mohandessin", "currentCity": "", "coverPhotoUrl": "https://api.qasaqees.tech/public/images/default/8.jpeg", "profilePhotoUrl": "https://api.qasaqees.tech/public/images/default/8.jpeg", "_id": "60b7e086e2660c0012988e44", "email": "hakar2@flickr.com", "firstName": "omar", "lastName": "elwakil", "userName": "hakar2", "age": 23, "createdAt": "2021-06-02T19:48:22.652Z", "updatedAt": "2021-06-04T08:40:46.392Z", "__v": 1, "numberOfFollowers": 1, "numberOfPhotos": 3, "id": "60b7e086e2660c0012988e44", "numberOfFollowings": 1, "isFollowing": false } }));
global.localStorage.setItem("accessToken", 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYjdlMDg2ZTI2NjBjMDAxMjk4OGU0NCIsImlhdCI6MTYyMzA0NDg3NywiZXhwIjoxNjMxNjg0ODc3fQ.oU05Sp_4sIL-sMdjNY3nvceOETzzVeyIsP0n5KFUtNg');

configure({ adapter: new Adapter() });

describe('CommentOnMedia props Render and comment form' , ()=>{
    test('renders comment form', () => {
        let wrapper = mount(<CommentOnMedia photoId={"60b9014f3f586e0012bf004c"} />);
        let element = wrapper.find("#comment-form");
        expect(element).toHaveLength(1);
      });
});

