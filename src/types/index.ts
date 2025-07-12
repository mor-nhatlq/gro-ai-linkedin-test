export enum LeadFormFieldTypes {
  LEAD_NAME = "leadName",
  LEAD_ROLE = "leadRole",
  LEAD_COMPANY = "leadCompany",
  LEAD_LINKEDIN = "leadLinkedIn",
}

export type LeadFormField = {
  type: LeadFormFieldTypes;
  onChange: (value: string) => void;
  value: string;
  placeholder?: string;
  label?: string;
};
