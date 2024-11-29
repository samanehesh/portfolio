import {ITag} from './ITag'
import {ICategory} from './ICategory'

export interface IProject {
    'id': number;
    'title': string;
    'slug': string;
    'excerpt': string;
    'body': string;
    'url': string | null;
    'published_date': string | null;
    'image': string[] | null; 
    'thumb': string | null;
    'category_id': number | null;
    'created_at': string;
    'updated_at': string;
    'category': ICategory | null;
    'tags': ITag[] | undefined;
    'repo' : string | null;
}
