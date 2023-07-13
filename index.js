const { Probot } = require("probot");
const app = new Probot();

app.on("issue_comment.created", async (context) => {
  // Your bot logic goes here
});

app.start();
