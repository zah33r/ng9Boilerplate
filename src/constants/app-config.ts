import { environment } from '../environments/environment';

export class AppConfig {
    public static URL_AppBase: string = environment.appRoot;
    public static URL_BmsBase: string = AppConfig.URL_AppBase + 'api/bms/';
    public static URL_BmsGetBordereaus: string = AppConfig.URL_BmsBase + 'getbordereaus';
    public static URL_BmsCreateBordereaus: string = AppConfig.URL_BmsBase + 'createbordereau';
    public static URL_BmsUploadFiles: string = AppConfig.URL_BmsBase + 'uploadfiles';
    public static URL_BmsLoadSheet: string = AppConfig.URL_BmsBase + 'loadfile';
    public static URL_BmsUploadFilesAndGetSheets: string = AppConfig.URL_BmsBase + 'UploadFiles/Sheets';
    public static URL_BmsGetFields: string = AppConfig.URL_BmsBase + 'fields';
    public static URL_BmsUpdateFieldMapping: string = AppConfig.URL_BmsBase + 'fields/mapping/';
    public static URL_BmsValidateFieldMapping: string = AppConfig.URL_BmsBase + 'validatemappings/';
    public static URL_BmsValidateData: string = AppConfig.URL_BmsBase + 'getvalidations/';
    public static URL_BmsBeginNameMatch: string = AppConfig.URL_BmsBase + 'beginnamematch';
    public static URL_BmsGetNameMatchResults: string = AppConfig.URL_BmsBase + 'GetNameMatchResults';

    public static AppVersion: string = environment.version;
}
