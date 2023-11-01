import { Action } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { IInitialState } from "./state";

type AppExtraArg = undefined;
export type AppThunkDispatch = ThunkDispatch<IInitialState, AppExtraArg, Action<string>>;

export const useAppDispatch = (): AppThunkDispatch => useDispatch<AppThunkDispatch>();