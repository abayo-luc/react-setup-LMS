import { user } from '../data';

const decode = jest.fn();

decode.mockReturnValue({
  ...user,
});
export default {
  decode,
};
