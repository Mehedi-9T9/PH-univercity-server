export type TMonths =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';
  export type semesterMappingDemo ={
    [keys:string]:string
}
export type TAcademicSemester = {
  semesterName: 'Autumn' | 'Summer' | 'Fall';
  semesterCode: '01' | '02' | '03';
  year: string,
  startMonth:TMonths,
  endMonth:TMonths,
};
