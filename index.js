const btnEL = document.getElementById("btn");
const apiURL = "https://api.quotable.io/random";
const quoteEL = document.getElementById("quote");
const authorEL = document.getElementById("author");


async function getQuote() {

  try {
    btn.innerText = "Loading...";
    btnEL.disabled = true;
    quoteEL.innerText="Updating..."
    authorEL.innerText="Updating..."
    const response = await fetch(apiURL);
    const data = await response.json();

    const quoteContent = data.content;
    const quoteAuthor = data.author;
    quoteEL.innerText = quoteContent;
    authorEL.innerText = "~ " + quoteAuthor;
    btn.innerText = "Get a Quote";
    btnEL.disabled = false;
  } catch (error) {
    console.log(error);
    quoteEL.innerText = "an error happened, try again later";
    authorEL.innerText = "an error happened";
    btn.innerText = "Get a Quote";
    btnEL.disabled = false;
  }


}

btnEL.addEventListener("click", getQuote)
