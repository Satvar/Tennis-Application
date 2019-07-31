const express = require('express');
const router  = express.Router();
const multer  = require('multer')
const passport = require('passport')
const uploadfile  = require('../util/imageupload')
const passportFacebook = require('../auth/facebook');
const passportInstagram = require('../auth/instagram');  //check fot this when testing


const Authctrl  = require('../controllers/UserCtrl')
const Coachctrl  = require('../controllers/CoachesCtrl')

////coach routes
router.post('/quickInsertCoach' , Authctrl.quickInsertCoach)
router.post('/detailedInsertCoach',uploadfile.fields([{ name: 'Coach_Image', maxCount: 1 }, { name: 'Coach_Resume', maxCount: 1 }]) , Authctrl.detailedInsertCoach)
router.get('/coachVerification' , Authctrl.coachVerification)
router.post('/downloadresume',Authctrl.downloadresume)
router.post('/coachSignIn' , Authctrl.coachSignIn)
router.post('/insertIndividualCourse', uploadfile.single('Course_Image'), Authctrl.insertIndividualCourse)

//user routes
router.post('/quickInsertUser' , Authctrl.quickInsertUser)
router.post('/detailedInsertUser' ,uploadfile.single('User_profileimage'), Authctrl.detailedInsertUser)
router.get('/userVerification' , Authctrl.userVerification)
router.post('/userSignIn' , Authctrl.userSignIn)

//admin routes

router.get('/getallcoaches', Coachctrl.getallcoaches)
router.post('/getcoachbyid',Coachctrl.getcoachbyid)
router.post('/getCoachDetails' , Authctrl.getCoachDetails)
router.post('/getUserDetails' , Authctrl.getUserDetails)
router.post('/blockCoach' , Authctrl.blockCoach)
router.post('/UnblockCoach' , Authctrl.unBlockCoach)
router.post('/deleteCoach' , Authctrl.deleteCoach)



//social logins

router.get('/auth/facebook',
  passportFacebook.authenticate('facebook'));
router.get('/auth/instagram',
  passportFacebook.authenticate('instagram'));

router.get('/auth/facebook/callback',
  passportFacebook.authenticate('facebook', { failureRedirect: '/login' }),  //user userlogin route instead of /login
  function (req, res) {
    console.log("===========", res)
    // Successful authentication, redirect home.
    res.redirect('/');
  });
router.get('/auth/instagram/callback',
passport.authenticate('instagram', { failureRedirect: '/login' }),  //user userlogin route instead of /login
  function (req, res) {
    console.log("===========", res)
    // Successful authentication, redirect home.
    res.redirect('/');
  });

module.exports = router;