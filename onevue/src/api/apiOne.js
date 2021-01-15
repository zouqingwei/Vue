import axios from '../index'
import { prefix_ms } from '@/config'
var qs = require('qs');
// 课程管理=>列表
export const getCourseList = (params) => {
  return axios.request({
    url: prefix_ms + '/course/selectListByPage',
    method: 'post',
    // data: {
    //   "param": ''
    // },
    data: { courseName: params.courseName,beginTime: params.beginTime, endTime: params.endTime },
    params: {
      pageNum: params.pageNum,
      pageSize: params.pageSize,
    },
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
  })
}
// 复制问卷
export const copySurvey = ({ id, title }) => {
      return axios.request({
        url: prefix_ms + '/questionnaire/copy/' + id + '/' + title,
        method: 'get'
      })
    }
    
    // 删除问卷
    export const deleteSurvey = ({ id }) => {
      return axios.request({
        url: prefix_ms + '/questionnaire/delete/' + id,
        method: 'get'
      })
    }
    
    // 查看结果:统计
    export const getResultStatistics = ({ id }) => {
      return axios.request({
        url: prefix_ms + '/respondent/statistics',
        method: 'get',
        params: {
          id
        }
      })
    }
    
    // 查看结果:数据
    export const getResultPage = (params) => {
      return axios.request({
        url: prefix_ms + '/respondent/page?' + params,
        method: 'get'
      })
    }
    
    // 查看结果:导出数据--没有引用
    export const exportResult = (params) => {
      return axios.request({
        url: prefix_ms + '/respondent/export',
        method: 'post',
        data: JSON.stringify(params),
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      })
    }
    // 答卷名单数据
    export const getAnsPage = (params) => {
      return axios.request({
        url: prefix_ms + '/respondent/pageList?questionnaireId=' + params.questionnaireId + '&status=' + params.status,
        method: 'get',
        params: {
          page:params.page,
          size:params.size
        }
      })
    }
    
    // 查看学生答卷
    export const getStudAnswer = ({ studentId, questionnaireId }) => {
      return axios.request({
        url: prefix_ms + '/respondent/findAnswerDetail',
        method: 'get',
        params: {
          studentId,
          questionnaireId
        }
      })
    }

    // 小程序内容安全检测
export async function msgCheckWX({ content }) {
  let checkFlag = true;
  let result = await axios.request({
    url: '/certification/wechat/check/msgCheck',
    method: 'post',
    data: qs.stringify({ 'msg': content }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=uft-8'
    }
  });
  if (result.errcode == 87014) {
    checkFlag = false;
  }
  return checkFlag;
}

// 测试用-获取token
async function getAccessTokenTest() {
  let accessToken = '';
  let tokenResult = await axios.request({
    url: '/apiweixin/cgi-bin/token',
    method: 'get',
    params: {
      grant_type: 'client_credential',
      appid: '',
      secret: ''
    }
  });
  if (tokenResult.access_token) {
    accessToken = tokenResult.access_token;
  } else {
    console.log('获取token失败');
  }
  return accessToken;
}
// 测试用-小程序内容安全检测
export async function msgCheckWXTest({ content }) {
  let resultToken = '';
  await getAccessTokenTest().then(function (value) {
    resultToken = value;
  })
  return await axios.request({
    url: '/apiweixin/wxa/msg_sec_check?access_token=' + resultToken,
    method: 'post',
    data: JSON.stringify({ content: content }),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}
