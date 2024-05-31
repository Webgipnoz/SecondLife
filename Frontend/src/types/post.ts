export interface Post {
  isLoading?: boolean;
  id: number;
  title: string;
  imageUrl: string;
  category: number;
  description: string;
  profileName: string;
  createdAt: string;
  viewsCount: number;
  commentsCount: number;
}
