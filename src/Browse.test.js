import React from 'react';
import { render } from '@testing-library/react';
import {shallow} from 'enzyme'
import Browse from './Browse';


test('check that 4 movies are available', async () => {
  const movieName = "A Game of Thrones"
  const movie_id = 1
  const poster = "path"
  const fetchMock = jest.fn()
  const oldFetch = global.fetch
  global.fetch = fetchMock
  fetchMock.mockImplementation(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve([{
          title: movieName,
          movieId: movie_id,
          poster: poster
        }])
      } 
    })
  })
  
  const wrapper = await shallow(<Browse />)
  //EXERCISE
  await wrapper.update()
  
  //ASSERT
  expect(fetchMock).toHaveBeenCalledWith("http://localhost:3001/movies")
  //expect(wrapper.state('name')).toBe(movieName)
  //expect(wrapper.state('movieId')).toBe(movie_id)
  //expect(wrapper.state('poster')).toBe("path")
  
  //TEARDOWN
  global.fetch = oldFetch
})

