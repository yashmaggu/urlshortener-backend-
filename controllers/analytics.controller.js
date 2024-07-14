const URL=require("../models/url.models.js")

async function getAnalytics(req,res){
    const shortid=req.params.shortId;
    const result=await URL.findOne({shortid});
    return res.json({
        totalClicks:result.visitHistory.length,
        analytics:result.visitHistory
    })
}

module.exports=getAnalytics;