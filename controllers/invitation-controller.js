const Invitation = require('../models/invitation');
const HttpError = require('../models/http-error');


const getAllInvitation = async (req,res,next) =>{
    const invitations= await Invitation.find();
    if(invitations.length ===0)
    {
       let error = new HttpError('there is no invitations in the db',404);
       return next(error);        
    }
     res.json(invitations);
}

const getInvitationByid = async (req,res,next) =>{
    const invitationId = req.params.invid;
    console.log(invitationId);
    let invitation;
    try{
         invitation= await Invitation.findById(invitationId);
        if(!invitation)
        {
            let error = new HttpError('cant find invitation for this id',404);
            return next(error);    
        }
        }catch(err)
        {
            let errorr = new HttpError('Somthing went wrong',500);
            return next(errorr);
        }
        res.json({invitation});
}

const createInvitation = async (req,res,next) =>{
    const {invitationDate,carNumber,company,work,worker,status,days,price }= req.body;
    const createdInvitation= new Invitation({
        invitationDate,
        carNumber,
        company,
        work,
        worker,
        status,
        days,
        price
    });
    try{
        await createdInvitation.save();
        } catch(err)
        {
            const error = new HttpError('Creating car faild, please try again.',500);
            return next(error);
        }
        res.status(200).json(createdInvitation)
}

const getInvitationsByCarNumber = async (req,res,next) =>{
    const carnumber = req.params.cnum;
    const invitations = await Invitation.find({carNumber:carnumber});
    if(invitations.length === 0)
    {
        const error = new HttpError('there is no invitations for this car number',404);
        return next(error);
    }
    console.log(invitations);
    res.status(200).json(invitations);
    }


exports.getAllInvitation = getAllInvitation;
exports.getInvitationByid = getInvitationByid;
exports.createInvitation = createInvitation;
exports.getInvitationsByCarNumber = getInvitationsByCarNumber;