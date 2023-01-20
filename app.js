import { renderMushroom, renderFriend } from './render-utils.js';

const friendsEl = document.querySelector('.friends');
const friendInputEl = document.getElementById('friend-input');
const mushroomsEl = document.querySelector('.mushrooms');
const addMushroomButton = document.getElementById('add-mushroom-button');
const addFriendButton = document.getElementById('add-friend-button');

let mushroomCount = 3;

const friendData = [
    {
        name: 'Erich',
        satisfaction: 2,
    },
    {
        name: 'Sarah',
        satisfaction: 3,
    },
    {
        name: 'Missael',
        satisfaction: 1,
    },
    {
        name: 'Soraya',
        satisfaction: 2,
    },
];

const defaultFriends = [
    '',
    'George',
    'Jennifer',
    'Max',
    'Alex',
    'Martin',
    'Jimmy',
    'Susan',
    'Frank',
    'Bob',
    'Tim',
];

displayFriends();
displayMushrooms();

addMushroomButton.addEventListener('click', () => {
    if (Math.random() > 0.5) {
        alert('found a mushroom!');

        mushroomCount++;
        displayMushrooms();
    } else {
        alert('no luck!');
    }
});

addFriendButton.addEventListener('click', () => {
    const friendName = friendInputEl.value;

    const newFriend = {
        name: friendName || defaultFriends[`${Math.floor(Math.random() * 11)}`],
        satisfaction: 1,
    };

    friendData.push(newFriend);

    friendInputEl.value = '';

    displayFriends();
});

function displayFriends() {
    friendsEl.textContent = '';

    for (let friend of friendData) {
        const friendEl = renderFriend(friend);

        friendEl.addEventListener('click', () => {
            if (friend.satisfaction < 3 && mushroomCount > 0) {
                friend.satisfaction++;
                mushroomCount--;
            } else if (mushroomCount === 0) {
                alert('You are out of mushrooms, you must forage for more!');
            } else if (friend.satisfaction === 3) {
                alert(`Your friend, ${friend.name} is full`);
            }
            displayFriends();
            displayMushrooms();
        });

        friendsEl.append(friendEl);
    }
}

function displayMushrooms() {
    // clear out the mushroom div
    mushroomsEl.textContent = '';
    for (let i = 0; i < mushroomCount; i++) {
        mushroomsEl.append(renderMushroom());
    }
}

// import functions and grab DOM elements

// initialize state

// get the name from the input
// create a new friend object
// push it into the friends state array, passed in as an argument
// clear out the input element
// clear out and display all the friends (use a function here)

// clear out the friends in DOMl
// for each friend in state . . .
// use renderFriend to make a friendEl
// this is a clickable list, so . . .
// add an event listener to each friend
// and if the friend's satisfaction level is below 3 and you have mushrooms left
// increment the friends satisfaction and decrement your mushrooms
// clear out and display the updated friends and mushrooms (hint: displayFriends, displayMushrooms)
// append the friendEl to the friends list in DOM
// for each mushroom in your mushroom state, render and append a mushroom
