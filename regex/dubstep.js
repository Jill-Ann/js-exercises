// 6kyu
// For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".

// The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters

// Return the words of the initial song. Separate the words with a space.

const songDecoder = song => {
  return song.replace(/(WUB)+/g," ").trim();
}

console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")); // =>  WE ARE THE CHAMPIONS MY FRIEND
