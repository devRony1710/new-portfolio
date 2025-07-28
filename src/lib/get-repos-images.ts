import BookmarkLandingThumbnail from '@/assets/images/bookmark-landing.png';
import ExtensionManagerThumbnail from '@/assets/images/extension-manager-thumbnail.png';

const ImagesObj = {
  'Bookmark-Landing': BookmarkLandingThumbnail,
  'Extension-Manager': ExtensionManagerThumbnail
};

export const getReposImages = (repoName: string) => {
  return ImagesObj[repoName as keyof typeof ImagesObj];
};
