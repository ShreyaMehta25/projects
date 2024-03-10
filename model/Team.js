const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const teamSchema=new Schema({
    TeamName:{
        type:String,
        required:[true,"Please enter team's name"],
        unique:true
    },
    TeamID:{
        type:Number,
        default: mongoose.Types.ObjectId
    },
    membersList: [{
        name: {
            type: String,
            required: true
        },
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // Assuming you have a User model for members
            required: true
        },
        section:{
            
        }
        isTeamLeader: {
            type: Boolean,
            default: false // Default value, only one member can be a team leader
        }
    }]
}, { collection: 'Team' });
module.exports=mongoose.model('Team',teamSchema);