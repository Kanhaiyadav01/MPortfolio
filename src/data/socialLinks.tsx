import { ReactNode } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export interface SocialLink {
  name: string;
  url: string;
  icon: ReactNode;
  color: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/Kanhaiyadav01',
    icon: <FaGithub />,
    color: '#181717',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kanhaiya-yadav-2426a9330',
    icon: <FaLinkedin />,
    color: '#0A66C2',
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/VanooseG',
    icon: <FaTwitter />,
    color: '#1DA1F2',
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/kanhaiyayadav_01/',
    icon: <SiLeetcode />,
    color: '#FFA116',
  },
  {
    name: 'Email',
    url: 'mailto:kanhaiyakumar25213@gmail.com',
    icon: <FaEnvelope />,
    color: '#EA4335',
  },
];
