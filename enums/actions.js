import { ProductCode } from '~/enums/global-enums';
import { actionsByProspectCodeEncuesta } from '~/enums/encuesta-enums';

export const actionsByProduct = { 
  [ProductCode.ENCUESTA]: actionsByProspectCodeEncuesta,
};
