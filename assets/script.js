var topic = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topic[Math.floor(Math.random() * topic.length)];

function selectTopic() {
    if (randomTopic === 'HTML') {
     console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
     console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
     console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
      console.log("Let's study JavaScript!");
    } else {
     console.log('Please try again!');
}
}

var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

function listTopics(){
    for(var list = 0; list < topics.length; list++){
        console.log(topics[list]);
    }
}

console.log('Here are the topics we learned through Prework:');
listTopics();

console.log('Which topic should we study first?');
selectTopic();