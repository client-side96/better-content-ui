import React from 'react';
import _, { DebouncedFunc } from 'lodash';

type DebounceCallback = never | DebouncedFunc<never>;

const useTextFieldDebounce = (
  callback: DebounceCallback,
  duration: number
): DebounceCallback => {
  const savedCallback = React.useRef<DebounceCallback>(callback);
  React.useEffect(() => {
    savedCallback.current = _.debounce(callback, duration, {
      trailing: true,
      leading: false,
    });

    return () => savedCallback.current.cancel();
  }, [callback, duration]);

  return savedCallback.current;
};

export default useTextFieldDebounce;
