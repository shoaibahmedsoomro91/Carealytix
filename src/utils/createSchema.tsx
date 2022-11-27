import * as yup from "yup";

export function createEntrySchema(type : string) {	
	const schema = yup.object({
		minValue: type === 'NUMERIC' ? yup.number().required() : yup.number().integer().required(),
		maxValue: type === 'NUMERIC' ? yup.number().required() : yup.number().integer().required(),
		dialysis_type: yup.string().required(),
		notes: yup.string() 
	}).required();
  return schema;
}