import { useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getGithubUserInfo } from '@/api/get/get-github-user-info/get-github-user-info';

export interface UserInfo {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export const getUserInfo = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>();

  const { data: getUserInfo, isLoading: isLoadingUserInfo } = useQuery({
    queryKey: ['userInfo'],
    queryFn: () => getGithubUserInfo()
  });

  useMemo(() => {
    setUserInfo(getUserInfo);
  }, [getUserInfo]);

  return {
    userInfo,
    isLoadingUserInfo
  };
};
