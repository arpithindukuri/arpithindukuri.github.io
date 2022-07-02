export interface IPost {
  dateCreated: string;
  dateUpdated: string;
  title: string;
  description: string;
  thumbnailPath: string;
  tags: ITag[];
  slug: string;
}

export interface ITag {
  name: string;
  iconPath?: string;
  color?: string;
}
