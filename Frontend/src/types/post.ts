export interface Post {
  isLoading?: boolean;
  _id: number;
  title: string;
  imageUrl: string;
  category: number;
  text: string;
  fullName: string;
  createdAt: string;
  viewsCount: number;
  commentsCount: number;
}
