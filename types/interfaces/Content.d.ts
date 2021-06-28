import { JsonApiDocument, JsonApiSingleResponse } from './JsonApi';
import { IRelationships } from './Relationships';
import { ResultResponse } from './ResultResponse';
export interface ContentAttr extends JsonApiDocument {
    data: {
        id: string;
        type: string;
        attributes: {
            urlTitle: string;
            associatedImage: string;
            contentID: string;
            customBody: string;
            urlTitlePath: string;
            linkUrl: string;
            setting: string;
            title: string;
            linkLabel: string;
            customSummary: string;
            sortOrder: number;
        };
        relationships: IRelationships;
    };
}
export interface IContent extends JsonApiSingleResponse {
    data: ContentAttr;
}
export interface IContentResult extends ResultResponse<IContent> {
}
