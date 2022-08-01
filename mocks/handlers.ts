import { rest } from 'msw';
import { API_PATH } from '../hooks/useName';
export const handlers = [
  // Handles a POST /login request
  rest.get(API_PATH, (req, res, ctx) => {
    return res(ctx.delay(500), ctx.json({ name: 'piknow' }));
  }),
];
