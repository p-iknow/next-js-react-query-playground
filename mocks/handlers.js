import { rest } from 'msw'
import {API_PATH} from '../hooks/useName'
export const handlers = [
  // Handles a POST /login request
  rest.post(API_PATH, {name: 'John Doe'}),
]