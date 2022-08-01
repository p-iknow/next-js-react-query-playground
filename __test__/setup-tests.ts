import '@testing-library/jest-dom';
import { queryClient } from './test-utils';

// React Query 의 경우 매 렌더마다 cache 를 삭제해야 테스트 코드가 정상 동작함
afterEach(() => {
  queryClient.clear();
});

jest.setTimeout(10000); // in milliseconds
