import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import AlbumInternal from './AlbumInternal';

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
global.localStorage.setItem("userData", JSON.stringify({ "user": { "showCase": { "title": "Showcase", "photos": [{ "description": "", "tags": [], "comments": [], "views": 3, "favouriteCount": 0, "isPublic": true, "license": "None", "safety": "Safe", "contentType": "Photo", "allowCommenting": true, "albums": [], "_id": "60b9d824e204b10012339f7b", "title": "durand-20160224-11053", "url": "https://api.qasaqees.tech/public/images/60b7df35f8941e0012b98eec/60b9d824e204b10012339f7a.jpg", "creator": { "_id": "60b7df35f8941e0012b98eec", "firstName": "omar", "lastName": "elwakil", "userName": "hakar", "id": "60b7df35f8941e0012b98eec", "numberOfFollowers": 0, "isFollowing": false }, "createdAt": "2021-06-04T07:37:08.762Z", "updatedAt": "2021-06-04T21:02:24.890Z", "__v": 0, "commentsNum": 0, "isFavourite": false }, { "description": "", "tags": [], "comments": [], "views": 0, "favouriteCount": 0, "isPublic": true, "license": "None", "safety": "Safe", "contentType": "Photo", "allowCommenting": true, "albums": [], "_id": "60ba90e040170a0011a64362", "title": "images", "url": "https://api.qasaqees.tech/public/images/60b7df35f8941e0012b98eec/60ba90e040170a0011a64361.jpg", "creator": { "_id": "60b7df35f8941e0012b98eec", "firstName": "omar", "lastName": "elwakil", "userName": "hakar", "id": "60b7df35f8941e0012b98eec", "numberOfFollowers": 0, "isFollowing": false }, "createdAt": "2021-06-04T20:45:20.821Z", "updatedAt": "2021-06-04T20:45:20.821Z", "__v": 0, "commentsNum": 0, "isFavourite": false }, { "description": "", "tags": [], "comments": [], "views": 0, "favouriteCount": 0, "isPublic": true, "license": "None", "safety": "Safe", "contentType": "Photo", "allowCommenting": true, "albums": [], "_id": "60ba90e140170a0011a64363", "title": "cavern-imaging-1", "url": "https://api.qasaqees.tech/public/images/60b7df35f8941e0012b98eec/60ba90e040170a0011a64360.jpg", "creator": { "_id": "60b7df35f8941e0012b98eec", "firstName": "omar", "lastName": "elwakil", "userName": "hakar", "id": "60b7df35f8941e0012b98eec", "numberOfFollowers": 0, "isFollowing": false }, "createdAt": "2021-06-04T20:45:21.165Z", "updatedAt": "2021-06-04T20:45:21.165Z", "__v": 0, "commentsNum": 0, "isFavourite": false }, { "description": "", "tags": [], "comments": [], "views": 0, "favouriteCount": 0, "isPublic": true, "license": "None", "safety": "Safe", "contentType": "Photo", "allowCommenting": true, "albums": [], "_id": "60ba90fb40170a0011a64365", "title": "8578d0e1670dd3c6ad2894d793dccace", "url": "https://api.qasaqees.tech/public/images/60b7df35f8941e0012b98eec/60ba90f940170a0011a64364.jpg", "creator": { "_id": "60b7df35f8941e0012b98eec", "firstName": "omar", "lastName": "elwakil", "userName": "hakar", "id": "60b7df35f8941e0012b98eec", "numberOfFollowers": 0, "isFollowing": false }, "createdAt": "2021-06-04T20:45:47.350Z", "updatedAt": "2021-06-04T20:45:47.350Z", "__v": 0, "commentsNum": 0, "isFavourite": false }, { "description": "", "tags": [], "comments": [], "views": 0, "favouriteCount": 0, "isPublic": true, "license": "None", "safety": "Safe", "contentType": "Photo", "allowCommenting": true, "albums": [], "_id": "60ba910140170a0011a64367", "title": "Darren-Jew-Tonga-Cave", "url": "https://api.qasaqees.tech/public/images/60b7df35f8941e0012b98eec/60ba910040170a0011a64366.jpg", "creator": { "_id": "60b7df35f8941e0012b98eec", "firstName": "omar", "lastName": "elwakil", "userName": "hakar", "id": "60b7df35f8941e0012b98eec", "numberOfFollowers": 0, "isFollowing": false }, "createdAt": "2021-06-04T20:45:53.264Z", "updatedAt": "2021-06-04T20:45:53.264Z", "__v": 0, "commentsNum": 0, "isFavourite": false }, { "description": "", "tags": [], "comments": [], "views": 0, "favouriteCount": 1, "isPublic": true, "license": "None", "safety": "Safe", "contentType": "Photo", "allowCommenting": true, "albums": [], "_id": "60ba910840170a0011a64369", "title": "images", "url": "https://api.qasaqees.tech/public/images/60b7df35f8941e0012b98eec/60ba910840170a0011a64368.jpg", "creator": { "_id": "60b7df35f8941e0012b98eec", "firstName": "omar", "lastName": "elwakil", "userName": "hakar", "id": "60b7df35f8941e0012b98eec", "numberOfFollowers": 0, "isFollowing": false }, "createdAt": "2021-06-04T20:46:00.585Z", "updatedAt": "2021-06-04T20:50:16.352Z", "__v": 0, "commentsNum": 0, "isFavourite": false }, { "description": "", "tags": [], "comments": [], "views": 0, "favouriteCount": 1, "isPublic": true, "license": "None", "safety": "Safe", "contentType": "Photo", "allowCommenting": true, "albums": [], "_id": "60ba910e40170a0011a6436b", "title": "l5xjgecutbe6wuunhuit", "url": "https://api.qasaqees.tech/public/images/60b7df35f8941e0012b98eec/60ba910e40170a0011a6436a.jpg", "creator": { "_id": "60b7df35f8941e0012b98eec", "firstName": "omar", "lastName": "elwakil", "userName": "hakar", "id": "60b7df35f8941e0012b98eec", "numberOfFollowers": 0, "isFollowing": false }, "createdAt": "2021-06-04T20:46:06.842Z", "updatedAt": "2021-06-04T20:50:18.780Z", "__v": 0, "commentsNum": 0, "isFavourite": false }, { "description": "", "tags": [], "comments": [], "views": 0, "favouriteCount": 0, "isPublic": true, "license": "None", "safety": "Safe", "contentType": "Photo", "allowCommenting": true, "albums": [], "_id": "60ba912240170a0011a6436f", "title": "wed-blog-shutterstock_1703194387_low_nwm", "url": "https://api.qasaqees.tech/public/images/60b7df35f8941e0012b98eec/60ba912140170a0011a6436e.jpg", "creator": { "_id": "60b7df35f8941e0012b98eec", "firstName": "omar", "lastName": "elwakil", "userName": "hakar", "id": "60b7df35f8941e0012b98eec", "numberOfFollowers": 0, "isFollowing": false }, "createdAt": "2021-06-04T20:46:26.505Z", "updatedAt": "2021-06-04T20:46:26.505Z", "__v": 0, "commentsNum": 0, "isFavourite": false }, { "description": "", "tags": [], "comments": [], "views": 0, "favouriteCount": 0, "isPublic": true, "license": "None", "safety": "Safe", "contentType": "Photo", "allowCommenting": true, "albums": [], "_id": "60ba912d40170a0011a64371", "title": "scuba_GettyImages-592260477", "url": "https://api.qasaqees.tech/public/images/60b7df35f8941e0012b98eec/60ba912840170a0011a64370.jpg", "creator": { "_id": "60b7df35f8941e0012b98eec", "firstName": "omar", "lastName": "elwakil", "userName": "hakar", "id": "60b7df35f8941e0012b98eec", "numberOfFollowers": 0, "isFollowing": false }, "createdAt": "2021-06-04T20:46:37.354Z", "updatedAt": "2021-06-04T20:46:37.354Z", "__v": 0, "commentsNum": 0, "isFavourite": false }] }, "description": "Hi I'm a Developer...", "occupation": "", "homeTown": "", "currentCity": "", "coverPhotoUrl": "https://api.qasaqees.tech/public/images/60b7df35f8941e0012b98eec/60b9d824e204b10012339f7a.jpg", "profilePhotoUrl": "https://api.qasaqees.tech/public/images/default/8.jpeg", "_id": "60b7df35f8941e0012b98eec", "email": "hakar@flickr.com", "firstName": "omar", "lastName": "elwakil", "userName": "hakar", "age": 23, "createdAt": "2021-06-02T19:42:45.388Z", "updatedAt": "2021-06-04T20:47:03.614Z", "__v": 1, "numberOfFollowers": 1, "numberOfPhotos": 9, "id": "60b7df35f8941e0012b98eec", "numberOfFollowings": 1, "isFollowing": false } }));
global.localStorage.setItem("accessToken", 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYjdkZjM1Zjg5NDFlMDAxMmI5OGVlYyIsImlhdCI6MTYyMjgzOTAyOSwiZXhwIjoxNjIyOTI1NDI5fQ._B30pMgVzZsEGZfwgBr8kz1h-83HX50dxq0YOIe2ntA');

configure({ adapter: new Adapter() });

describe('AlbumInternal', () => {

    it('Should render all images that will come from the backend', () => {
        const wrapper = shallow(<AlbumInternal
            albumId="60baabf254a4dd00128e1c1f"
            userId="60baab7c54a4dd00128e1c1e"
        />);
        expect(wrapper.find(Image)).not.toBeNull();
    });
});