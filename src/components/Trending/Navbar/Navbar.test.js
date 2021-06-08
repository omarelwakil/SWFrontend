import react from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';

const userId = "60b5f47c2b026f150822c5fd";
const fakeDataToSend = [
    { title: "About", path: "/people/" + userId, selected: false },
    { title: "Photostream", path: "/photos/" + userId, selected: false },
    { title: "Albums", path: "/photos/" + userId + "/albums", selected: true },
    { title: "Faves", path: "/photos/" + userId + "/favorites", selected: false },
    { title: "Camera Roll", path: "/cameraroll", selected: false }
];

it('Navbar renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Navbar items={fakeDataToSend}/>, div);
});