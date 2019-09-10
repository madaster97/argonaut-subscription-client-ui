
export enum RenderDataAsTypes {
  None,
  FHIR,
  JSON,
  Error,
  Text,
}

export interface SingleRequestData {
  name: string;
  id: string;
  requestUrl?: string;
  requestDataType?: RenderDataAsTypes;
  requestData?: string;
  responseDataType?: RenderDataAsTypes;
  responseData?: string;
  outcome?: string;
  info?: string;
  enabled?: boolean;
}