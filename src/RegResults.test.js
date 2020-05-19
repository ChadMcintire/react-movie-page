import React from 'react';
import { render } from '@testing-library/react';
import {shallow} from 'enzyme'
import RegResults from './RegResults';


test('check that an account has been successfully added', async () => {
  const fetchMock = jest.fn()
  const oldFetch = global.fetch
  global.fetch = fetchMock
  fetchMock.mockImplementation(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve({
          message: "The account has been successfully added"
        })
      } 
    })
  })
  
  const wrapper = await shallow(<RegResults uname="person1" pass="password1"/>)
  //EXERCISE
  await wrapper.update()
  
  //ASSERT
  expect(fetchMock).toHaveBeenCalledWith("http://localhost:3001/register", 
  {'body': {'email': 'person1', 'password': 'password1'}, 'headers':{'Content-Type': 'application/json'}, 'method': 'POST'})

  expect(wrapper.state('message')).toBe("The account has been successfully added")

  expect(wrapper.text()).toBe("The account has been successfully added")
  
  //TEARDOWN
  global.fetch = oldFetch
})

test('check that an account has been failed', async () => {
  const fetchMock = jest.fn()
  const oldFetch = global.fetch
  global.fetch = fetchMock
  fetchMock.mockImplementation(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve({
          message: "The account has not been created"
        })
      } 
    })
  })

  const wrapper = await shallow(<RegResults uname="person1" pass="password1"/>)
  //EXERCISE
  await wrapper.update()

  //ASSERT
  expect(fetchMock).toHaveBeenCalledWith("http://localhost:3001/register", 
  {'body': {'email': 'person1', 'password': 'password1'}, 'headers':{'Content-Type': 'application/json'}, 'method': 'POST'})

  expect(wrapper.state('message')).toBe("The account has not been created")

  expect(wrapper.text()).toBe("The account has not been created")

  //TEARDOWN
  global.fetch = oldFetch
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

