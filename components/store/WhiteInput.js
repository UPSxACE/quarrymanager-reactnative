import { Input } from 'native-base';

export default function WhiteInput({ label, ...props }) {
  return <Input height="40px" width={'100%'} {...props} placeholder={label} />;
}
