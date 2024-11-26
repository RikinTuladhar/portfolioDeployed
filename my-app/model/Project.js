const { default: mongoose } = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    start_date: {
        type: String
    },
    tech_stack: {
        type: [String]
    },
    github_link: {
        type: String
    },
    website_link: {
        type: String
    }
});

const Project = mongoose.models.Project || mongoose.model("Project", ProjectSchema);
export default Project;
