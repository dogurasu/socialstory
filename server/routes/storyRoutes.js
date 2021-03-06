import express from "express";
import {
    getStories,
    getStoryById,
    deleteStory,
    updateStory,
    getStoriesByUID,
    createStory,
} from "../controllers/storyController.js";
import { protect, restrictUserAccess, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route('/')
    .get(getStories)
    .post(protect, createStory);

router.route('/:storyId')
    .get(getStoryById)
    .delete(restrictUserAccess, deleteStory)
    .put(restrictUserAccess, updateStory);

router.route('/user/:uid')
    .get(protect, getStoriesByUID)

// router.route('/:userId')
//     .get(getUserStories)

export default router;