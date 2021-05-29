const validator = require('validator');
const helpers = require('../helpers');
const userDesc = require('../enums/responses.desc');
const enums = require('../enums/enums');

const isNullOrEmpty = data => {
  if (data && data != null && !validator.isEmpty(data.toString())) {
    return false;
  }

  return true;
};

// const isNullOrEmptyDirect = data =>{
//   if(isNullOrEmpty(data)){
//     return 'isNull';
//   }
//   return null;
// }

exports.isNullOrEmpty = isNullOrEmpty;
// exports.isNullOrEmptyDirect = isNullOrEmptyDirect;

const isBoolean = data => {
  if (!isNullOrEmpty(data)) {
    if (data === 1 || data === true || data === 'true') {
      return true;
    }
  }
  return false;
};
exports.isBoolean = isBoolean;


const isBooleanReal = data => {
  if (data != null && !validator.isEmpty(data.toString())) {
    if (data === 1 || data === true || data === 'true' ||
    data === 0 || data === false || data === 'false') {
      return true;
    }
  }
  return false;
};

exports.validateInternal = (data, accu) => {
  if (data != null) accu.push(data);
};

exports.phoneNumber = phoneNumber => {
  if (isNullOrEmpty(phoneNumber)) {
    return helpers.createError(enums.params.phoneNumber, userDesc.emailIsEmpty, enums.errorTypes.validation);
  }
  if (!validator.default.isLength(phoneNumber, { min: 10, max: 10 })) {
    return helpers.createError(enums.params.phoneNumber, userDesc.emailIsEmpty, enums.errorTypes.validation);
  }
  return null;
};

exports.email = email => {
  if (isNullOrEmpty(email)) {
    return helpers.createError(enums.params.email, userDesc.emailIsEmpty, enums.errorTypes.validation);
  }
  if (!validator.default.isEmail(email)) {
    return helpers.createError(enums.params.email, userDesc.emailIsInvalid, enums.errorTypes.validation);
  }
  return null;
};

exports.companyName = companyName => {
  if (isNullOrEmpty(companyName)) {
    return helpers.createError(enums.params.companyName, userDesc.companyNameEmpty, enums.errorTypes.validation);
  }
  return null;
};

exports.password = password => {
  if (isNullOrEmpty(password)) {
    return helpers.createError(enums.params.password, userDesc.passwordIsEmpty, enums.errorTypes.validation);
  }
  if (password.length < 4) {
    return helpers.createError(enums.params.password, userDesc.passwordIsInvalid, enums.errorTypes.validation);
  }
  return null;
};
exports.oldPassword = oldPassword => {
  if (isNullOrEmpty(oldPassword)) {
    return helpers.createError(enums.params.oldPassword, userDesc.oldPassword, enums.errorTypes.validation);
  }
  
  return null;
};

exports.passwordsMatch = (password, confirmPassword) => {
  if (password !== confirmPassword) {
    return helpers.createError(enums.params.password, userDesc.passwordsDoNotMatch, enums.errorTypes.validation);
  }
  return null;
};

exports.title = title => {
  if (isNullOrEmpty(title)) {
    return helpers.createError(enums.params.title, userDesc.titleIsEmpty, enums.errorTypes.validation);
  }
  return null;
};
exports.location = location => {
  if (isNullOrEmpty(location)) {
    return helpers.createError(enums.params.location, userDesc.locationIsEmpty, enums.errorTypes.validation);
  }
  return null;
};
exports.description = description => {

  if (isNullOrEmpty(description)) {
    return helpers.createError(enums.params.description, userDesc.descriptionIsEmpty, enums.errorTypes.validation);
  }
  return null;
};
exports.companyInfo = companyInfo => {
  if (isNullOrEmpty(companyInfo)) {
    return helpers.createError(enums.params.companyInfo, userDesc.companyInfoIsEmpty, enums.errorTypes.validation);
  }
  return null;
};

exports.isMarkdownText = markDownText => {
  if (isNullOrEmpty(markDownText)) {
    return helpers.createError(enums.params.markDownText, userDesc.markDownText, enums.errorTypes.validation);
  }
  return null;
};

exports.comment = comment => {

  if (isNullOrEmpty(comment)) {
    return helpers.createError(enums.params.comment, userDesc.commentIsEmpty, enums.errorTypes.validation);
  }
  return null;
};

exports.isYoutubeLink = youtubeLink => {
  //const regex = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(\?\S*)?$/g
  let youtubeRegEx = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(\?\S*)?$/;
  if(isNullOrEmpty(youtubeLink) || youtubeLink.search(youtubeRegEx) === -1){
    return helpers.createError(enums.params.youtubeLink,userDesc.youtubeLink,enums.errorTypes.validation);
  }
  return null;
};

exports.isFacebookLink = facebookLink => {
  let facebookLinkRegEx = '^(?:https?:\/\/)?(?:m\.|www\.)?(?:facebook\.com\/)';
  if(isNullOrEmpty(facebookLink) || facebookLink.search(facebookLinkRegEx) === -1){
    return helpers.createError(enums.params.facebookLink,userDesc.facebookLink,enums.errorTypes.validation);
  }
  return null;
};

exports.isTwitterLink = twitterLink => {
  let twitterLinkRegEx = '^(?:https?:\/\/)?(?:m\.|www\.)?(?:twitter\.com\/)';
  if(isNullOrEmpty(twitterLink) || twitterLink.search(twitterLinkRegEx) === -1){
    return helpers.createError(enums.params.twitterLink,userDesc.twitterLink,enums.errorTypes.validation);
  }
  return null;
};

exports.isInstragramLink = instagramLink => {
  let instagramLinkRegEx = '^(?:https?:\/\/)?(?:m\.|www\.)?(?:instagram\.com\/)';
  if(isNullOrEmpty(instagramLink) || instagramLink.search(instagramLinkRegEx) === -1){
    return helpers.createError(enums.params.instagramLink,userDesc.instagramLink,enums.errorTypes.validation);
  }
  return null;
};

exports.isLinkedInLink = linkedInLink => {
  let linkedInLinkRegEx = '^(?:https?:\/\/)?(?:m\.|www\.)?(?:linkedin\.com\/)';
  if(isNullOrEmpty(linkedInLink) || linkedInLink.search(linkedInLinkRegEx) === -1){
    return helpers.createError(enums.params.linkedinLink,userDesc.linkedinLink,enums.errorTypes.validation);
  }
  return null;
};



exports.isMasterId = id => {
  if(isNaN(id) || isNullOrEmpty(id)){
    return helpers.createError(enums.params.masterOnePmpId,userDesc.masterOnePmp,enums.errorTypes.validation);
  }
  return null;
}
exports.isToken = token => {
  if(isNullOrEmpty(token)){
    return helpers.createError(enums.params.token,userDesc.tokenNotValid,enums.errorTypes.validation);
  }
  return null;
}


exports.isChildId = id => {
  if(isNaN(id) || isNullOrEmpty(id) ){
    return helpers.createError(enums.params.childOnePmpId,userDesc.ChildOnePmp,enums.errorTypes.validation);
  }
  return null;
}
exports.isCommentId = id => {
  if(isNaN(id) || isNullOrEmpty(id) ){
    return helpers.createError(enums.params.commentId,userDesc.commentIdEmpty,enums.errorTypes.validation);
  }
  return null;
}
exports.isShare = share => {
  if(isNullOrEmpty(share)){
    return helpers.createError(enums.params.share,userDesc.share,enums.errorTypes.validation);
  } else if(share === enums.share.canComment || 
    share === enums.share.canEdit || 
    share === enums.share.canView){
      
  } else {
    return helpers.createError(enums.params.share,userDesc.share,enums.errorTypes.validation);
  }
  return null;
}


exports.isLimit = limit => {
  if(isNaN(limit)){
    return helpers.createError(enums.params.limit,userDesc.limit,enums.errorTypes.validation);
  }
  return null;
}

exports.isOffset = offset => {
  if(isNaN(offset)){
    return helpers.createError(enums.params.offset,userDesc.offset,enums.errorTypes.validation);
  }
  return null;
}

exports.isUserId = id => {
  if(isNaN(id)){
    console.log(id);
    return helpers.createError(enums.params.userId,userDesc.userNotFound,enums.errorTypes.validation);
  }
  return null;
}


exports.isVerified = isVer => {
  if(!isBooleanReal(isVer)){
    return helpers.createError(enums.params.isVerified,userDesc.isVerified,enums.errorTypes.validation);
  }
  return null;
}

exports.isDisalbed = isDisable => {
  if(!isBooleanReal(isDisable)){
    return helpers.createError(enums.params.isDisabled,userDesc.isDisabled,enums.errorTypes.validation);
  }
  return null;
}

exports.isRoleId = roleId => {
  if(isNaN(roleId)){
    return helpers.createError(enums.params.roleId,userDesc.roleId,enums.errorTypes.validation);
  }
  return null;
}


exports.pmpSection = (section,sectionName) => {

  if (isNullOrEmpty(section)) {
    return helpers.createError(sectionName, userDesc.pmpSectionCannotBeEmpty, enums.errorTypes.validation);
  }
  return null;
};
