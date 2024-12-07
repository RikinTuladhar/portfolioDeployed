const { default: mongoose } = require("mongoose");

const TechStackSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const TechStack =
  mongoose.models.TechStack || mongoose.model("TechStack", TechStackSchema);
export default TechStack;
