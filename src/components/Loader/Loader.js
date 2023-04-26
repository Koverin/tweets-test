import { TailSpin } from 'react-loader-spinner';
import { BoxLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <BoxLoader>
      <TailSpin
        height="80"
        width="80"
        color="violet"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </BoxLoader>
  );
};
