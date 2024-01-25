### Tips

Try experimenting with the comparison operators (`<`, `>`, `===`, etc.) in the node REPL, which you can launch using the `node` command in Labber.

Work on your code iteratively – that means in small pieces.  

To help you figure out how to use `hungry` and `availableTime` inside your function, try outputting their values to the Terminal as follows.

```javascript
const whatToDoForLunch = function (hungry, availableTime) {
  if (!hungry) {
    console.log("Get back to work");
  } else if (hungry && availableTime < 20) {
    console.log("Pick something up & eat it in the lab");
  } else if (hungry && availableTime < 30) {
    console.log("Eat at a place nearby");
  } else if (hungry && availableTime > 30){
    console.log("We're in a bootcamp and we should reconsider how much time we actually have to spare");
  }
};
```