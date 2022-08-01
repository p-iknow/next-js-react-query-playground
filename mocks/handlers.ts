import { AGE_API_PATH } from '@hooks/use-age';
import { rest } from 'msw';
import { NAME_API_PATH } from '../hooks/use-name';
export const handlers = [
  // Handles a POST /login request
  rest.get(NAME_API_PATH, (req, res, ctx) => {
    return res(ctx.delay(500), ctx.json({ name: 'piknow' }));
  }),

  rest.get(AGE_API_PATH, (req, res, ctx) => {
    return res(ctx.delay(500), ctx.json({ age: 32 }));
  }),
];
