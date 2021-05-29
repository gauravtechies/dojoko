'use strict'


const share = require('./share');
const emailTypes = require('./emailTypes');
const emailSubjects = require('./emailSubjects');



const errorTypes = {
  validation: 'validation',
  unAuthorized: 'UnAuthorized',
  serverError: 'server_error',
  error: 'error',
  length: 'length',
  conflict: 'alreadyExist',
  notFound:'notFound'
};


const statusCodes = {
  ok: '200',
  unAuthorized: '401',
  badRequest: '403',
  internalServerError: '500',
  notFound: '404',
  conflict:'409'
};


const params = {
  childId:'childId',
  phoneNumber: 'phoneNumber',
  password: 'password',
  password_hash:'password_hash',
  null:'null',
  confirmPassword:'confirmPassword',

  fullName: 'fullName',
  title:'title',
  success: 'success',
  count: 'count',
  token:'token',
  token_expires_at:"token_expires_at",
  location:'location',
  description:'description',
  comment:'comment',
  companyInfo:'companyInfo',
  youtubeLink:'youtubeLink',
  facebookLink: 'facebookLink',
  twitterLink: 'twitterLink',
  instagramLink: 'instagramLink',
  linkedinLink: 'linkedinLink',
  markDownText: 'markDownText',
  title: 'title',
  userId:'userId',
  masterOnePmpId: 'masterOnePmpId',
  childOnePmpId: 'childOnePmpId',
  canEdit: 'canEdit',
  canView: 'canView',
  canComment: 'canComment',
  childId:'childId',
  share: 'share',
  limit: 'limit',
  offset: 'offset',
  isVerified: 'is_verified',
  isDisabled: 'is_disabled',
  roleId: 'roleId',
  ontraportId: 'ontraportId',
  commentId:'commentId',
  user:'user',
  account:'account',
  oldPassword: 'oldPassword',
  companyInfo: 'companyInfo',
  location: 'location',
  pmpSectionOne: 'pmpSectionOne',
  pmpSectionTwo: 'pmpSectionTwo',
  pmpSectionThree: 'pmpSectionThree',
  pmpSectionFour: 'pmpSectionFour',
  pmpSectionFive: 'pmpSectionFive',
  pmpSectionSix: 'pmpSectionSix',
  pmpSectionSeven: 'pmpSectionSeven',
  pmpSectionEight: 'pmpSectionEight',
  pmpSectionNine: 'pmpSectionNine',
  pmpSectionTen: 'pmpSectionTen',
  pmpSectionEleven: 'pmpSectionEleven',
  pmpSectionTwelve: 'pmpSectionTwelve',
  pmpId: 'pmpId',
  deleteId: 'deleteId',

  companyName:"companyName",
  email: 'email',
};


const responseContentTypes = {
  json: 'json'
};


const users = {
  admin:'admin',
  user:'user'
};


const common = [
  '/profile',
  '/onepmp/{id}',
  '/onepmp',
  '/changePassword',
  '/childpmp/{id}',
  '/commentPmp/{masterPmpId}',
  '/commentPmp',
  '/publicLink',
  '/publicLink/{token}',
  '/history',
  '/duplicate'
];

const access = {
  admin: [
    '/users',
    '/admin/home',
    '/admin/users',
    '/admin/users/{id}',
    '/admin/pmpSections',
    ...common
  ],
  user: [
    '/users/{id}',
    '/shareOnePmp',
    '/shareOnePmp/{id}',
    ...common
  ]
}
module.exports = {
  errorTypes,
  statusCodes,
  params,
  responseContentTypes,
  users,
  access,
  share,
  emailTypes,
  emailSubjects
};
