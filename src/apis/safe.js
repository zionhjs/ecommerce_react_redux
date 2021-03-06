/**
 * 安全相关API
 */

import request, { Method } from '../utils/request'
import { store } from '../redux/store'
import md5 from 'js-md5'

/**
 * 发送绑定手机验证码
 * @param mobile
 * @param captcha
 */
export function sendBindMobileSms(mobile, captcha) {
  return request({
    url: `members/security/bind/send/${mobile}`,
    method: Method.POST,
    needToken: true,
    data: {
	    uuid: store.getState().user.uuid,
      captcha
    }
  })
}

/**
 * 绑定手机号
 * @param mobile
 * @param sms_code
 */
export function bindMobile(mobile, sms_code) {
  return request({
    url: `members/security/bind/${mobile}`,
    method: Method.PUT,
    needToken: true,
    data: { sms_code }
  })
}

/**
 * 发送手机验证码
 * 在修改手机号和更改密码时通用
 * @param captcha
 */
export function sendMobileSms(captcha) {
  return request({
    url: 'members/security/send',
    method: Method.POST,
    needToken: true,
    data: {
      uuid: store.getState().user.uuid,
      captcha
    }
  })
}

/**
 * 验证更换手机号短信
 * @param sms_code
 */
export function validChangeMobileSms(sms_code) {
  return request({
    url: 'members/security/exchange-bind',
    method: Method.GET,
    needToken: true,
    params: { sms_code }
  })
}

/**
 * 更换手机号
 * @param mobile
 * @param sms_code
 */
export function changeMobile(mobile, sms_code) {
  return request({
    url: `members/security/exchange-bind/${mobile}`,
    method: Method.PUT,
    needToken: true,
    data: { sms_code }
  })
}

/**
 * 验证更改密码手机短信
 * @param sms_code
 */
export function validChangePasswordSms(sms_code) {
  return request({
    url: 'members/security/password',
    method: Method.GET,
    needToken: true,
    params: { sms_code }
  })
}

/**
 * 更改密码
 * @param captcha
 * @param password
 */
export function changePassword(captcha, password) {
  return request({
    url: 'members/security/password',
    method: Method.PUT,
    needToken: true,
    data: {
      uuid: store.getState().user.uuid,
      captcha,
      password: md5(password)
    }
  })
}
