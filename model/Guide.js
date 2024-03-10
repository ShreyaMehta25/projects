const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const guideSchema = new mongoose.Schema({
    guideName: {
        type: String,
        required: [true, "Please enter guide name"],
        unique: true // Ensure guide names are unique
    },
    guideID: {
        type: String,
        default: mongoose.Types.ObjectId
    },
    allocatedTeams: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team' 
    }]
}, { collection: 'Guide' });

const Guide = mongoose.model("Guide", guideSchema);

export default Guide;
