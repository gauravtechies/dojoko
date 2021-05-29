const commonValidations = require('./index');
const enums = require('../enums/enums');
//Registration validation
exports.validateRegData = body => {
  const error = [];
  commonValidations.validateInternal(commonValidations.email(body[enums.params.email]), error);
  commonValidations.validateInternal(commonValidations.companyName(body[enums.params.fullName]), error);
  commonValidations.validateInternal(commonValidations.password(body[enums.params.password]), error);
  // commonValidations.validateInternal(commonValidations.password(body[enums.params.confirmPassword]), error);
  // commonValidations.validateInternal(
  //   commonValidations.passwordsMatch(body[enums.params.password], body[enums.params.confirmPassword]),
  //   error
  // );

  return error;
};


//Login validation
exports.validateLoginData = body => {
  const error = [];
  commonValidations.validateInternal(commonValidations.email(body[enums.params.email]), error);
  commonValidations.validateInternal(commonValidations.password(body[enums.params.password]), error);
  return error;
};





exports.validateAdminUserGetData = (limit, offset) => {
  const error = [];
  commonValidations.validateInternal(commonValidations.isLimit(limit), error);
  commonValidations.validateInternal(commonValidations.isOffset(offset),error);
  return error;
}

exports.validateHistoryGetData = (limit, offset) => {
  const error = [];
  commonValidations.validateInternal(commonValidations.isLimit(limit), error);
  commonValidations.validateInternal(commonValidations.isOffset(offset),error);
  return error;
}

exports.validateAdminUserDeleteData = (id) => {
  const error = [];
  commonValidations.validateInternal(commonValidations.isUserId(id), error);
  return error;
}

exports.validateCreatePmp = body => {
  const error = [];
  commonValidations.validateInternal(commonValidations.title(body[enums.params.title]), error);
  return error;
};

exports.validateChildPmp = body => {
  const error = [];
  commonValidations.validateInternal(commonValidations.isChildId(body[enums.params.childId]),error);
  commonValidations.validateInternal(commonValidations.description(body[enums.params.description]), error);
  return error;
}
exports.validateSharePostData = body => {
  const error = [];
  commonValidations.validateInternal(commonValidations.title(body[enums.params.fullName]), error);
  commonValidations.validateInternal(commonValidations.email(body[enums.params.email]),error);
  commonValidations.validateInternal(commonValidations.isMasterId(body[enums.params.masterOnePmpId]),error);
  commonValidations.validateInternal(commonValidations.isShare(body[enums.params.share]),error);
  return error;
};

exports.validateShareDeleteData = body => {
  const error = [];
  commonValidations.validateInternal(commonValidations.isMasterId(body[enums.params.masterOnePmpId]),error);
  return error;
};


exports.validateAdminPutData = body => {
  const error = [];
  commonValidations.validateInternal(commonValidations.fullName(body[enums.params.fullName]), error);
  commonValidations.validateInternal(commonValidations.isVerified(body[enums.params.isVerified]), error);
  commonValidations.validateInternal(commonValidations.isDisalbed(body[enums.params.isDisabled]), error);
  commonValidations.validateInternal(commonValidations.isRoleId(body[enums.params.roleId]), error);
  
  

  return error;
};
exports.validateCommentData = body => {
  const error = [];
  commonValidations.validateInternal(commonValidations.isMasterId(body[enums.params.masterOnePmpId]), error);
  commonValidations.validateInternal(commonValidations.isChildId(body[enums.params.childId]),error);
  commonValidations.validateInternal(commonValidations.comment(body[enums.params.comment]), error);

  return error;
}
exports.validatePutCommentData = body => {
  const error = [];
  commonValidations.validateInternal(commonValidations.comment(body[enums.params.comment]), error);
  commonValidations.validateInternal(commonValidations.isCommentId(body[enums.params.commentId]), error);
  return error;
}

exports.validateDeleteCommentData = body => {
  const error = [];
  commonValidations.validateInternal(commonValidations.isCommentId(body[enums.params.commentId]), error);
  return error;
}

exports.validatePmpId = body => {
  const error = [];
  commonValidations.validateInternal(commonValidations.isMasterId(body[enums.params.masterOnePmpId]), error);
  return error;
}

exports.validateMasterPmpId = id => {
  const error = [];
  commonValidations.validateInternal(commonValidations.isMasterId(id), error);
  return error;
}
exports.validateToken = token => {
  const error = [];
  commonValidations.validateInternal(commonValidations.isToken(token), error);
  return error;
}


exports.validateAdminPmpSectionData = body => {
  const error = [];
  commonValidations.validateInternal(commonValidations.pmpSection(body[enums.params.pmpSectionOne], enums.params.pmpSectionOne), error);
  commonValidations.validateInternal(commonValidations.pmpSection(body[enums.params.pmpSectionTwo], enums.params.pmpSectionTwo), error);
  commonValidations.validateInternal(commonValidations.pmpSection(body[enums.params.pmpSectionThree], enums.params.pmpSectionThree), error);
  commonValidations.validateInternal(commonValidations.pmpSection(body[enums.params.pmpSectionFour], enums.params.pmpSectionFour), error);
  commonValidations.validateInternal(commonValidations.pmpSection(body[enums.params.pmpSectionFive], enums.params.pmpSectionFive), error);
  commonValidations.validateInternal(commonValidations.pmpSection(body[enums.params.pmpSectionSix], enums.params.pmpSectionSix), error);
  commonValidations.validateInternal(commonValidations.pmpSection(body[enums.params.pmpSectionSeven], enums.params.pmpSectionSeven), error);
  commonValidations.validateInternal(commonValidations.pmpSection(body[enums.params.pmpSectionEight], enums.params.pmpSectionEight), error);
  commonValidations.validateInternal(commonValidations.pmpSection(body[enums.params.pmpSectionNine], enums.params.pmpSectionNine), error);
  commonValidations.validateInternal(commonValidations.pmpSection(body[enums.params.pmpSectionTen], enums.params.pmpSectionTen), error);
  commonValidations.validateInternal(commonValidations.pmpSection(body[enums.params.pmpSectionEleven], enums.params.pmpSectionEleven), error);
  commonValidations.validateInternal(commonValidations.pmpSection(body[enums.params.pmpSectionTwelve], enums.params.pmpSectionTwelve), error);
  

  return error;
}
