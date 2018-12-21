/**
 * @module  api
 * api请求的地址常量
 * */
export const GET_LOGIN_CAPTCHA = '/login/captcha';
export const SEND_VERIFI_CODE = '/api/login/send_verifi_code';//获取验证码
export const REGISTER = '/api/login/register';//注册
export const GET_USER_INFO = 'api/user/user_info';//个人勋章列表
export const LOGIN = '/api/login/login';//登录
export const LOGOUT = '/api/user/logout';//登录
export const REAL_QUOTES = '/api/quotes/real_quotes';//real_quotes
export const OPTIONAL_LIST = '/api/quotes/optional_list';//real_quotes
export const TARGET = '/api/quotes/target';//标的证券信息
export const DATE_TG = '/api/quotes/date_tg';//标的合约日期列表
export const EXEC_TG = '/api/quotes/exec_tg';//标的指定日期的合约行权价格列表
export const STAT_TG = '/api/quotes/stat_tg';//合约基础信息
export const MD_TG = '/api/quotes/md_tg';//实时行情
export const SMD_TG = '/api/quotes/smd_tg';//实时行情
export const HMD_TG = '/api/quotes/hmd_tg';//实时行情
export const OPTIONAL = '/api/quotes/optional';//是否自选
export const EDIT_OPTIONAL = '/api/quotes/edit_optional';//是否自选
export const CJ_KH = '/api/position/cj_kh';//是否自选
export const WT_KH = '/api/position/wt_kh';//是否自选
export const CC_KH = '/api/position/cc_kh';//是否自选
export const MG_KH = '/api/position/mg_kh';//是否自选
export const CJ_FROM = '/api/position/cj_from';//是否自选
export const WT_FROM = '/api/position/wt_from';//是否自选
export const LSCJ_KH = '/api/position/lscj_kh';//是否自选
export const LSZJ_KH = '/api/position/lszj_kh';//是否自选
export const ADDKH = '/api/Operation/addkh';//是否自选
export const KHINFO = '/api/Operation/khinfo';//是否自选
export const EDITKH_NAME = '/api/Operation/editkh_name';//是否自选
export const CHANGE_PASS = '/api/Operation/changepass';//是否自选
export const UPLOAD = '/api/Operation/upload';//是否自选
export const WEITUO_KH = '/api/Operation/weituo_kh';//是否自选
export const CHEDAN_KH = '/api/Operation/chedan_kh';//是否自选
export const SETBANK = '/api/Operation/setbank';//是否自选
export const WITHDRAWAL_KH = '/api/position/withdrawal_kh';//是否自选
export const DEPOSIT_KH = '/api/position/deposit_kh';//是否自选
export const REFLECT = '/api/pay/reflect';//是否自选
export const GET_TIME = '/api/user/get_time';//是否自选

// export const LOGOUT = '/login/logout';
// export const REGISTER = '/register';
// export const FORGETPASSWORD = '/login/modifyPassword';
// export const SENDCAPTCHA = '/login/sendRandomCaptcha';
// export const UPLOAD = '/data/saveData';
//
// export const QUERY_TASK_LIST = '/project/info/toMain';
// export const GET_DICT = '/common/getDict'; //字典表查询
// export const QUERY_CHALLENGE_TO_MAIN = "/student/challenge/toMain"; //考核中心主页面信息
// export const GET_INSPECTION_DETAILS = "/student/challenge/getDetails"; //获取小技能柱
// export const GET_INSPECTION_HISTORY = "/student/challenge/getHistory";//获取考核历史记录
// export const GET_INSPECTION_TESTS = "/student/test/getTests";//获取考核列表
// export const GET_AFTER_EXAMINE_BASE = "/student/challenge/getPassBase";//获取通关后数据
// export const HOME_QUERYMYSTAGE="/student/home/queryMyStage";
// export const HOME_TO_MAIN = '/student/home/toMain';//首页列表
// export const HOME_GETSKILLSCORE= '/student/home/getSkillScore';//获取某人技能住||||||| .r2121
// export const GET_STATGE = "/system/skillColumn/getStage";
// export const GET_QUESTIONS = "/student/test/getQuestions";//考核页面获取试题=======
// export const TEST_SUBMINTQUESTIONS = "/student/test/submitQuestions";//试卷
// export const QUERYONEPOST="/company/recruitment/queryOnePost";
// export const RE_GETALLJOBS="/company/recruitment/getAllJobs";
// export const GETALLJOBSBYPAGE="/company/recruitment/getAllJobsByPage";
// export const UPDATECOLLECT="/system/operation/updateCollect";
// export const UPDATEMANAGERINFOR="/system/manager/updateManagerInfo";
// export const QUERYALLFORUM="/forum/forum/queryAllForum";
// export const SAVEAPPLYHELP="/company/promotion/saveApplyHelp";
// export const CHECKSTUDENRTINFO="/company/promotion/checkStudentInfo";
// export const SAVEFORUM="/forum/forum/saveForum";
// export const QUERYONEFORUM="/forum/forum/queryOneForum";
// export const FOTUMPRAISEORTRAMPLE="/forum/forum/forumPraiseOrTrample";
// export const ADDSTUDENT="/system/manager/delOrAddStudentFriend";
// // 每日练习
// export const QUERY_SPECIAL_CLASSIFY = "/questions/classify/queryAllClassify";//获取专项考核分类
// export const GET_STUDENT_EXAM_NUM = "/questions/classify/getStudentExamNum";//获取二级分类中各种题数量
// export const GET_QUESTION_NUM = "/questions/classify/getQuestionNum";//获取二级分类中可选题数量
// export const GET_ALL_SHIELD_QUESTION = "/questions/question/getAllShieldQestion";//查询当前用户已经屏蔽的题
// export const CREATE_PAPER = "/questions/question/createPaper";//创建一张试卷
// export const ERROR_QUESTION = "/questions/question/errorQuestion";//试题纠错
// export const UPDATE_SHIELD_QUESTION = "/questions/question/updateShieldQuestion";//屏蔽或取消屏蔽
// export const SUBMIT_QUESTION = "/questions/question/commitQuestion";//提交试卷
// export const UPDATE_SHARE = "/system/operation/updateShare";//分享
// export const UP_OR_DOWN_ANALYSIS = "/questions/question/upOrDownAnalysis";//踩赞答案解析
// export const SAVE_ANALYSIS = "/questions/question/saveAnalysis";//发表解析
//
//
// export const QUERYINFORMATION = "/information/information/queryInformation";//分页查询全部行业质询
//
// // 个人信息
// export const QUERY_STUDENT_RESUME = "/system/manager/querySutdentResume";//查询用户详情
// export const UPDATE_RESUME_INFO = "/system/manager/updateResumeInfo"//修改简历信息
// export const DOWNLOAD_RESUME = "/system/manager/downloadResume"//下载简历
// export const QUERY_COLLECT_BY_PAGE = "/system/operation/queryCollectByPage";//查询收藏列表
// export const QUERY_STUDENT_SIGN_IN = "/system/operation/queryStudentSingin";//查询学生签到
// export const STUDENT_OPERATION_SIGN_IN = "/system/operation/studentOperationSignin";//学生签到
// export const QUERY_ONE_QUESTION = "/questions/question/queryOneQustion";//查询一道试题
//
// export const SAVEPEPLY = "/forum/forum/saveReply";//提交评论
// //个人信息：我的笔记
// export const QUERY_ALL_NOTE_BY_PAGE = "/system/operation/queryAllNoteByPage";//查询所有笔记
// export const SAVE_NOTE = "/system/operation/saveNote";//保存笔记
// export const DEL_NOTE = "/system/operation/delNote";//删除笔记
//
// export const QUERY_POST_NUM = "/system/manager/queryPostNum";//删除笔记
//
// export const QUERY_FRIENDS_BY_PAGE = "/system/manager/queryFriendsByPage";//查询好友列表
//
// export const QUERY_KNOWLEDGE = "/questions/classify/queryKnowledge"//查询知识点
//
//
//
