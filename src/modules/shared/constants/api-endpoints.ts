import { environment } from '../../../environments/environment';

export class ApiEndpoints {
    public static URL_AppBase: string = environment.appRoot;
    public static URL_BmsBase: string = ApiEndpoints.URL_AppBase + 'api/bms/';
    public static URL_BmsGetBordereaus: string = ApiEndpoints.URL_BmsBase + 'getbordereaus';
    public static URL_BmsCreateBordereaus: string = ApiEndpoints.URL_BmsBase + 'createbordereau';
    public static URL_BmsUploadFiles: string = ApiEndpoints.URL_BmsBase + 'uploadfiles';
    public static URL_BmsLoadSheet: string = ApiEndpoints.URL_BmsBase + 'loadfile';
    public static URL_BmsUploadFilesAndGetSheets: string = ApiEndpoints.URL_BmsBase + 'UploadFiles/Sheets';
    public static URL_BmsGetFields: string = ApiEndpoints.URL_BmsBase + 'fields';
    public static URL_BmsUpdateFieldMapping: string = ApiEndpoints.URL_BmsBase + 'fields/mapping/';
    public static URL_BmsValidateFieldMapping: string = ApiEndpoints.URL_BmsBase + 'validatemappings/';
    public static URL_BmsValidateData: string = ApiEndpoints.URL_BmsBase + 'getvalidations/';
    public static URL_BmsBeginNameMatch: string = ApiEndpoints.URL_BmsBase + 'beginnamematch';
    public static URL_BmsGetNameMatchResults: string = ApiEndpoints.URL_BmsBase + 'GetNameMatchResults';
}
