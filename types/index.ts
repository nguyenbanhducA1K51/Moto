import { manufacturers } from '@constants';
import { MouseEventHandler } from "react";

export interface MotorProps{

}
export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
export interface MotorProps{
  make: string;
  model: string;
  year: number;
  type: string
  displacement: string;
  engine: string;
  power: string;
  torque: string;
  compression: string;
  bore_stroke: string;
  valves_per_cylinder: string;
  fuel_system: string;
  fuel_control: string;
  ignition: string;
  

}

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}
export interface MotorFilter {
  manufacturer?: string;
  year?: number;
  model?:string
}
export interface HomeProps {
  searchParams: FilterProps;
}

export interface CarCardProps {
  model: string;
  make: string;
  mpg: number;
  transmission: string;
  year: number;
  drive: string;
  cityMPG: number;
}

export interface MotorCardProps{
  model: string,
  make: string,
  year: number,
  engine: string,
  power: string,
  
  
  
}
export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}
