export type SelectProps = {
  value: string;
  onChange: (value: string) => void;
  optionsList: string[];
};

export type OptionProps = {
  option: string;
  isOptionSelected: boolean;
  onOptionClick: (option: string) => void;
  onCallBack: () => void;
};
