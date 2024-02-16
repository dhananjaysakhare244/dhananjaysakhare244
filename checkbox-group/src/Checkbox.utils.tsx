export const useGetBillLabels = (): IBillLabelLabels => {
  const ExcludeFirstName = "First NAme";
  const ExcludeLastName = "Last name";
  const ExcludeEmail = "Email";
  const ExcludeBirthDate = "Birth date";
  const ExcludeCity = "City";
  return {
    ExcludeFirstName,
    ExcludeLastName,
    ExcludeEmail,
    ExcludeBirthDate,
    ExcludeCity,
  };
};

interface IBillLabelLabels {
  [key: string]: string;
}

export interface InitialState {
  ExcludeFirstName: boolean;
  ExcludeLastName: boolean;
  ExcludeEmail: boolean;
  ExcludeBirthDate: boolean;
  ExcludeCity: boolean;
}
export const initialState: InitialState = {
  ExcludeFirstName: false,
  ExcludeLastName: false,
  ExcludeEmail: false,
  ExcludeBirthDate: false,
  ExcludeCity: false,
};

export interface INewBills {
  billNos: number[];
  ExcludeFirstName: boolean;
  ExcludeLastName: boolean;
  ExcludeEmail: boolean;
  ExcludeBirthDate: boolean;
  ExcludeCity: boolean;
}
export const reducer = (state: InitialState, action: ExcludeAction) => {
  const { type, payload } = action;
  return { ...state, [type]: payload };
};

export interface ExcludeAction {
  type: string;
  payload: boolean;
}
