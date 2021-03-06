const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema

const SettingSchema = new Schema({
    applicationName:{
        type:String,
        required:true
    }, 
    applicationEmail:{
        type:String,
        required:true
    }, 
    logoUrl:{
        type:String,
        required:true
    }, 
    currency:{
        type:String,
        required:true
    },
    contactNo:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    homebgUrl:{
        type:String,
        required:true
    },
    homeTitle:{
        type:String,
        required:true
    },
    homePara:{
        type:String,
        required:true
    },
    homeBtnText:{
        type:String,
        required:true
    },
    homeBtnPath:{
        type:String,
        required:true
    },

    aboutHeading:{
        type:String,
        required:true
    },
    aboutPara:{
        type:String,
        required:true
    },
    aboutCoverUrl:{
        type:String,
        required:true
    },
    aboutVideoUrl:{
        type:String,
        required:true
    },
    clientList:{
        type:String,
    },
    featurebgUrl:{
        type:String,
        required:true 
    },
    featureTitle:{
        type:String,
        required:true 
    },
    featurePara:{
        type:String,
        required:true 
    },
    featureList:{
        type:String,
        required:true 
    },
    bannerBgUrl:{
        type:String,
        required:true 
    },
    bannerText:{
        type:String,
        required:true 
    },
    bannerPara:{
        type:String,
        required:true 
    },
    bannerBtnText:{
        type:String,
        required:true
    },
    bannerBtnPath:{
        type:String,
        required:true
    },
    hashtag:{
        type:String,
        required:true
    },
    hashImageList:{
        type:String,
        required:true
    },
    footerText:{
        type:String,
        required:true
    },
    contactText:{
        type:String,
        required:true
    },
    socialLinksList:{
        type:String,
        required:true
    },
    quickBook:{
        type:String,
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = Setting = mongoose.model('settings',SettingSchema);
