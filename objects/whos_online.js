// You have a group chat application, but who is online!?
// You want to show your users which of their friends are online and available to chat!
// Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.
// If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.
// Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object {}

const myFriends = [{
  username: 'David',
  status: 'online',
  lastActivity: 100
}, {
  username: 'Lucy',
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob',
  status: 'online',
  lastActivity: 104
}]

const whosOnline2 = friends => {
  let output = {};
  friends.forEach(friend => {
    let status = friend.status;
    if (status === 'online' && friend.lastActivity > 10) {
      status = 'away';
    }
    if (output[status]) {
      output[status].push(friend.username);
    }
    else {
      output[status] = [friend.username];
    }
  });
  return output;
}
console.log(whosOnline2(myFriends));

// ---------------
const whosOnline = friends => {
  if (friends == []) {
    return {};
  }
  let results = {online: [], offline: [], away: [],};
  friends.forEach(user => {
    if (user.status == 'online' && user.lastActivity > 10) {
      results.away.push(user.username);
    } else if (user.status == 'online') {
      results.online.push(user.username);
    } else {
      results.offline.push(user.username);
    }
  })
  if (results.online.length === 0) {
    delete results.online;
  }
  if (results.offline.length === 0) {
    delete results.offline;
  }
  if (results.away.length === 0) {
    delete results.away;
  }
  return results;
}
console.log(whosOnline(myFriends));
