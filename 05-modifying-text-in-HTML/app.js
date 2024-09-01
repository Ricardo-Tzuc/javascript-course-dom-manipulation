const titleElement = document.querySelector("#app-title")
console.log(titleElement);








// Off topic, but just trying some timeOut to appreciate changes made in DOM.
const innerFirstTitle = titleElement.textContent
console.log(innerFirstTitle);
const titles = ["New Title ~ modified with JS, yeih!","This is an another"]

function resolveAfter2Seconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
async function changeTitleAfter2Sec(arr) {
    for (let element of arr)  {
        const result = await resolveAfter2Seconds()
        //actually it can works without a variable
        titleElement.textContent = element
        console.log(titleElement); 
        console.log(result);
    }
    await resolveAfter2Seconds()
    titleElement.textContent = innerFirstTitle

}
changeTitleAfter2Sec(titles)
// Use a wrapper function in order to use fn inside timeOuts: https://developer.mozilla.org/en-US/docs/Web/API/setTimeout