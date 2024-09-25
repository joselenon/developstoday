import { FieldValues, UseFormGetValues, UseFormReturn } from 'react-hook-form';

export type InputOptionsMap = {
  textarea: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
  select: React.SelectHTMLAttributes<HTMLSelectElement>;
  button: React.ButtonHTMLAttributes<HTMLButtonElement>;
};

export interface ICreateInput<Type extends keyof InputOptionsMap> {
  id: string;
  label?: string;
  rhfConfig: UseFormReturn<FieldValues, any, undefined>;
  validationFn: (value: any, getValues?: UseFormGetValues<FieldValues>) => { valid: boolean; errorMsg: string };
  options: InputOptionsMap[Type];
}
