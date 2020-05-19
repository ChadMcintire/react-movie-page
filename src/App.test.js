import React from 'react';
import { render } from '@testing-library/react';
import {shallow} from 'enzyme'
import App from './App';

function flushPromises() {
  return new Promise(resolve => setImmediate(resolve));
}

test('that the Browse page is displayed when the action state variable is set to browse', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.state().isHomeDisplayed).toEqual(true)

})

test('that login button onclick calls the doLogin method', () => {
  const wrapper = shallow(<App />)
  wrapper.instance().doLogin = jest.fn()
  wrapper.instance().forceUpdate()
  const button = wrapper.find('[name="login"]')
  button.simulate('click')
  expect(wrapper.instance().doLogin).toHaveBeenCalled()
})


test('test that the state changes when login occurs', () => {
  const wrapper = shallow(<App />)
  wrapper.instance().forceUpdate()
  const button = wrapper.find('[name="login"]')
  button.simulate('click')
  expect(wrapper.state().isHomeDisplayed).toBeFalsy()
  expect(wrapper.state().isLoginDisplayed).toBeTruthy()
})


test('username saved in the state variable', () => {
  const wrapper = shallow(<App />)
  wrapper.setState({isLoginDisplayed: true});
  const uname = "something"
  wrapper.find('input[name="uname"]').simulate("change",
  {target:{name:'uname',value: uname}})
  expect(wrapper.state().uname).toEqual(uname)
})


test('password saved in the state variable', () => {
  const wrapper = shallow(<App />)
  wrapper.setState({isLoginDisplayed: true});
  const password = "something"
  wrapper.find('input[name="pass"]').simulate("change",
  {target:{name:'pass',value: password}})
  expect(wrapper.state().pass).toEqual(password)
})


//test('display if the user was successfully created', async () => {
//  const fetchMock = jest.fn() 
//  const oldfetch = global.fetch()
//  global.fetch = fetchMock
//  fetchMock.mockImplementation(() => {
//  return Promise.resolve({
//    json:() => {return Promise.resolve({"status": "success", "message":
//    "The account has been successfully created"})
//  }})})
//
// const wrapper = shallow(<App />)
// var keys = Object.keys(wrapper.state()).filter(k => wrapper.state()[k]);
// wrapper.setState({
//   [keys]: false,
//   isLoginDisplayed: true
// });
// const button = wrapper.find('[name="sub"]')
// button.simulate("click")
// await flushPromises()
// wrapper.update()
// //const button = wrapper.find('[name="login"]')
// //button.simulate('click')
// expect(fetchMock).toHaveBeenCalledWith("http://localhost:3001/register")
//})


  
