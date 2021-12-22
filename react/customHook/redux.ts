import { TypedUseSelectorHook, useDispatch as reduxDispatch, useSelector as reduxSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../redux/store';

/**
 * type 지정 없이 redux Root State 에 접근하는
 * useSelector, useDispatch
 */
export const useSelector: TypedUseSelectorHook<RootState> = reduxSelector;
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useDispatch = () => reduxDispatch<AppDispatch>();

// todo useInput 등 만들기
