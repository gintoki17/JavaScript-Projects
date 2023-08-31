const btn = document.getElementById('jokeBtn');
const chat = document.getElementById('chat')
const jokesContainer = document.querySelector('.messages');

btn.addEventListener('click',()=>{
  const message= document.querySelector('.btn span').textContent;
  addMessageToChat(message,'user');

})

async function generateJoke(){
    const resp=await fetch("https://icanhazdadjoke.com", {
        headers: {
          Accept: "application/json",
        },
      });
    const respData=await resp.json();
}
generateJoke();

btn.addEventListener('click', async () => {
  addUserMessageToChat("Can you tell me a joke", 'user'); // Adding user's request
  setTimeout(async ()=>{
  const resp = await fetch("https://icanhazdadjoke.com", {
      headers: {
          Accept: "application/json",
      },
  });
  const respData = await resp.json();

  addJokeToChat(respData.joke, 'bot'); // Adding the joke to the chat as 'bot'
},200);
});

function addUserMessageToChat(message, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', sender);
  messageDiv.textContent = message;
  chat.appendChild(messageDiv);
}

function addJokeToChat(joke, sender) {
  const jokeDiv = document.createElement('div');
  jokeDiv.classList.add('message', 'joke-message', sender);
  jokeDiv.textContent = joke;
  chat.appendChild(jokeDiv); // Append to the messages container
}
