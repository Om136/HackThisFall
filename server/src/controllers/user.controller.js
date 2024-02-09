import {Soln} from '../models/solution.model.js';
import {Doubt} from '../models/doubt.model.js';
import { ApiError } from '../utils/ApiError.js';



const addDoubt=async(req,res,next)=>{
    try{
        const {content,user_id}=req.body;
        const current_date=new Date().toISOString();

        const doubt=await Doubt.create({
            content:content,
            owner:user_id,
            publishingDate:current_date

        })

        const createdDoubt=await Doubt.findById(doubt._id);
        if(!createdDoubt){
            throw new ApiError(500,'Some error occured could not add your doubt');
        }
        res.status(201).json({
            status:201,
            data:createdDoubt
        })
        
    }catch(error){
        next(error);
    }

}

const addSolution=async(req,res,next)=>{
    try{
        const {content,user_id,ques_id}=req.body;
        const current_date=new Date().toISOString();
        const soln=await Soln.create({
            question:ques_id,
            owner:user_id,
            content:content,
            publishingDate:current_date
        });
        const ques=await Doubt.findById(ques_id);
        await ques.solutions.push(soln._id);
        ques.status='completed';
        await ques.save({validateBeforeSave:true});
        
        res.status(201).json({
            status:201,
            data:soln
        });
        
    }catch(error){
        next(error);
    }

}


const getQues=async(req,res,next)=>{
    const allQues=await Doubt.aggregate([
        {
            $lookup:{
                from:'Soln',
                localField:"_id",
                foreignField:"content",
                as:'answer'
            }
        },
        {
            $lookup:{
                from:'Soln',
                localField:"_id",
                foreignField:"owner",
                as:'answer_owner'
            }
        },
        {
            $lookup:{
                from:'Soln',
                localField:"_id",
                foreignField:"upvotes",
                as:'upvotes'
            }
        },
        {
            $lookup:{
                from:'Soln',
                localField:"_id",
                foreignField:"downvotes",
                as:'downvotes'
            }
        },
        {
            $lookup:{
                from:'Soln',
                localField:"_id",
                foreignField:"publishingDate",
                as:'publishingDate'
            }
        },
        {
            $project:{
                
            }
        }
    ])

}

export {addDoubt,addSolution};