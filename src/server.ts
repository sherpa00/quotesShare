import app from "./index";
import ENV_VARIABLES from "./configs/env_variables";

app.listen(ENV_VARIABLES.PORT, () => {
  console.log("Server running at port " + String(ENV_VARIABLES.PORT));
});
