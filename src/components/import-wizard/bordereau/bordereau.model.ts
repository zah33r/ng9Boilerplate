import { BordereauStage } from './enums/bordereau-stage.enum';
import { BordereauFileStatus } from './enums/bordereau-file-status.enum';
import { BordereauFrequency } from './enums/bordereau-frequency.enum';
import { BordereauType } from './enums/bordereau-type.enum';

export class Bordereau {
    Id: number;
    LOB: string;
    Underwriter: string;
    CedingGroup: string;
    CedingCompany: string;
    AsAtDate: Date;
    PolicyEffectiveDate: Date;
    TreatyStatus: string;
    TreatyNo: string;
    Stage: BordereauStage;
    FileStatus: BordereauFileStatus;
    Frequency: BordereauFrequency;
    Comments: string;
    Type: BordereauType;
    Name: string;
    FileId: string;
}
